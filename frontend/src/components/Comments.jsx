import React, { useRef } from 'react'
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import "../styles/Comments.css"
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react";
import comentariosActions from "../redux/actions/comentariosActions"
import experienciasActions from "../redux/actions/experienciasActions"
import toast from "react-hot-toast"
import { useParams } from "react-router-dom"
// import { Link as LinkRouter } from "react-router-dom"




function Comments() {
    const { id } = useParams()

    const [open, setOpen] = React.useState(false);
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
    const [modify, setModify] = useState()
    const dispatch = useDispatch()
    const inputTextElement = useRef(null)


    function handleInputText(event) {
        setInputText(event.currentTarget.textContent)
    }

    //AGREGAR COMENTARIO

    async function agregarCommentarioUsuario(event) {
        const comentario = {
            experiencia: experiencia.data._id,
            comentario: inputText,
        }
        const resp = await dispatch(comentariosActions.AddComment(comentario))
        inputTextElement.current.innerText = ""
        // setChangeReload()


        if (resp.success) {
            toast(resp.message)
        } else {
            toast.error(resp.message)
        }
    }

    async function modificarComentarioUsuario(event) {
        const comentario = {
            comentarioId: event.target.id,
            comentario: modify,
        }
        const res = await dispatch(comentariosActions.UpdateComment(comentario))

        if (res.data.success) {
            toast(res.data.message)
        } else {
            toast.error(res.data.message)
        }
    }

    //ELIMINAR COMENTARIO

    async function borrarComentarioUsuario(event) {
        const res = await dispatch(comentariosActions.DeleteComment(event.target.id))


        if (res.data.success) {
            toast(res.data.message)
        } else {
            toast.error(res.data.message)
        }
    }

    return (
    
        <div className='l-dropdown'>
            <Button onClick={handleToggle}>
                <p className='l-textraiting'>Raiting Promedio entre: 10 opiniones</p>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
            </Button>
            <Backdrop
                sx={{ color: 'black', backgroundColor: "white", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                {/* ACA VA EL MAPEO */}

                {usuario ?
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                id="outlined-multiline-static"
                                label="Dejanos tu opinión..."
                                multiline
                                rows={4}
                                ref={inputTextElement}
                                onInput={handleInputText}
                            />
                        </div>
                        <div className='l-buttons-cont'>
                            <button onClick={agregarCommentarioUsuario}>A</button>
                        </div>
                    </Box>
                    :
                    <div className="login-button-box">
                        <p className="invitation"> INGRESA Y DEJANOS TU COMENTARIO</p>
                    </div>
                }
            </Backdrop >
        </div >
    )
}

export default Comments

// {experiencia?.comentarios.map(comentario =>
//     <div className="l-comments-container">
//         <div className="l-btnclose">
//             <button onClick={handleClose}>X</button>
//         </div>

//         {/* si el usuario no es el que hizo el comentario */}

//         {comentario?.idUsuario._id !== usuario.id ?

//             <div>
//                 <div className='l-date'>{comentario.fecha}</div>
//                 <div className='l-usuario-container'>
//                     <div className='l-avatar'>
//                         <Avatar alt="Remy Sharp" src={comentario.idUsuario.imagen} />
//                         <p className='l-nombreusuario'>{comentario.idUsuario.nombre}</p>
//                     </div>

//                     <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
//                     {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */}
//                 </div>
//                 <div>{comentario.comentario}</div>
//             </div>
//             :
//             <div>
//                 <div className='l-date'>{comentario.fecha}</div>
//                 <div className='l-usuario-container'>
//                     <div className='l-avatar'>
//                         <Avatar alt="Remy Sharp" src={comentario.idUsuario.imagen} />
//                         <p className='l-nombreusuario'>{comentario.idUsuario.nombre}</p>
//                     </div>

//                     <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
//                     {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */}
//                 </div>
//                 <Box
//                     component="form"
//                     sx={{
//                         '& .MuiTextField-root': { m: 1, width: '100%' },
//                     }}
//                     noValidate
//                     autoComplete="off"
//                 >
//                     <div>
//                         <TextField
//                             id="outlined-multiline-static"
//                             label="Dejanos tu opinión..."
//                             multiline
//                             rows={4}
//                             onInput={(event) => setModify(event.currentTarget.textContent)}
//                         />
//                     </div>
//                     <div className='l-buttons-cont'>
//                         <button onClick={modificarComentarioUsuario}>M</button>
//                         <button onClick={borrarComentarioUsuario}>B</button>
//                     </div>
//                 </Box>
//             </div>}
//     </div>
// )}