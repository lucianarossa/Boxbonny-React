import React, { useRef } from 'react'
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import "../styles/Comments.css"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import comentariosActions from "../redux/actions/comentariosActions"
import ModifyComment from "../components/ModifyComment"
import toast from "react-hot-toast"
import { Link as LinkRouter } from "react-router-dom"
import StarRating from "../components/StarRating"





function Comments({reloadChanger}) {


    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    const experiencia = useSelector(store => store.experienciasReducer.getOneExperiencia)
    console.log("EXPERIENCIA", experiencia)
    const usuario = useSelector(store => store.usuariosReducer.user)
    console.log("USUARIO", usuario)



    const [inputText, setInputText] = useState()
    const dispatch = useDispatch()
    const inputTextElement = useRef(null)

    function handleInputText(event) {
        setInputText(event.currentTarget.textContent)
    }

    //AGREGAR COMENTARIO

    async function agregarCommentarioUsuario(event) {
        event.preventDefault()
        const comentario = {
            experiencia: experiencia._id,
            comentario: inputText,
        }
        const res = await dispatch(comentariosActions.AddComment(comentario))
        inputTextElement.current.innerText = ""
        reloadChanger()
        
        if (res.success) {
            toast(res.message)
        } else {
            toast.error(res.message)
        }
    }

    return (

        <div className='l-dropdown'>
            <Button onClick={handleToggle}>
                {/* <p className='l-textraiting'>Raiting Promedio entre: 10 opiniones</p> */}
                <StarRating/>
                {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */}
            </Button>
            <Backdrop
                sx={{ color: 'black', backgroundColor: "white", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <div className="l-btnclose">
                    <button onClick={handleClose}>❌</button>
                </div>

                {experiencia.comentarios?.map(comentario =>

                    <div className="l-comments-container">
                        {/* si el usuario no es el que hizo el comentario */}

                        {comentario?.idUsuario._id !== usuario?.id ?

                            <>
                                <div className='l-usuario-container'>
                                    <div className='l-avatar'>
                                        <Avatar alt="Remy Sharp" src={comentario.idUsuario?.imagen} />
                                        <p className='l-nombreusuario'>{comentario.idUsuario?.nombre} {comentario.idUsuario?.apellido}</p>
                                    </div>
                                    <Rating name="half-rating-read" defaultValue={1} precision={1} readOnly />
                                </div>
                                <div className="comment-box-commented">{comentario.comentario}</div>
                            </>
                            :
                            <ModifyComment comentario={comentario} reloadChanger={reloadChanger}/>
                        }
                    </div>
                )}


                {/* CONDICION USUARIO LOGUEADO*/}

                {usuario ?
                    <>
                        <div className="l-comments-container">
                            <div className='l-usuario-container'>
                                <div className='l-avatar'>
                                    <Avatar alt="Remy Sharp" src={usuario?.imagen} />
                                    <p className='l-nombreusuario'>{usuario?.nombre} {usuario?.apellido}</p>
                                </div>

                                <Rating name="half-rating" defaultValue={1} precision={1} />
                            </div>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '100%' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div>
                                <div className="comment-box" ref={inputTextElement} onInput={handleInputText} contentEditable suppressContentEditableWarning={true}></div>
                                </div>
                                <div className='l-buttons-cont'>
                                    <button onClick={agregarCommentarioUsuario}>➕</button>
                                </div>
                            </Box>
                        </div>
                    </>
                    :
                    <div className="login-button-box">
                        <p className="invitation"> SI DISFRUTASTE DE ESTA EXPERIENCIA, QUEREMOS CONOCER TU OPINION!</p>
                        <LinkRouter to={"/signin"}>
                        <button className="card-button l-card-button-comments fontRaleway">INGRESA</button>
                        </LinkRouter>
                    </div>
                }
            </Backdrop >
        </div >
    )
}

export default Comments


