import React from "react";
import { useDispatch } from "react-redux"
import { useState } from "react";
import comentariosActions from "../redux/actions/comentariosActions";
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import "../styles/Comments.css"
// import toast from 'react-hot-toast';

function ModifyComment({ comentario  }) {


    const [modify, setModify] = useState()
    const dispatch = useDispatch()


    //EDITAR COMENTARIO

    async function modifyComment(event) {
        const commentData = {
            commentID: event.target.id,
            comment: modify,
        }
        const res = await dispatch(comentariosActions.UpdateComment(commentData))
     

        // if (res.data.success) {
        //     toast(res.data.message)
        // } else {
        //     toast.error(res.data.message)
        // }
    }

    //ELIMINAR COMENTARIO

    async function deleteComment(event) {
        const res = await dispatch(comentariosActions.DeleteComment(event.target.id))



        // if (res.data.success) {
        //     toast(res.data.message)
        // } else {
        //     toast.error(res.data.message)
        // }
    }

    return (
        <>
            <div className="l-comments-container">
                <div className='l-usuario-container'>
                    <div className='l-avatar'>
                        <Avatar alt="Remy Sharp" src={comentario?.IdUsuario.imagen} />
                        <p className='l-nombreusuario'>{comentario?.idUsuario.nombre}</p>
                    </div>

                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                    {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */}
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
                    <div className="comment-box" onInput={(event) => setModify(event.currentTarget.textContent)} suppressContentEditableWarning={true} contentEditable>{comentario.comentario}</div>
                    </div>
                    <div className='l-buttons-cont'>
                        <button onClick={modifyComment} className="call-button comment-button">✏️</button>
                        <button onClick={deleteComment} className="call-button comment-button">❌</button>
                    </div>
                </Box>
            </div>
        </>















    )
}
export default ModifyComment