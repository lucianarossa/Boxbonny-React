import React, { useState } from "react"
import { FaStar } from "react-icons/fa"
import "../styles/StarRaiting.css"
// import comentariosActions from "../redux/actions/comentariosActions"
// import { useDispatch } from "react-redux"

function StarRating({comentario}) {
    
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    // const dispatch = useDispatch

    // async function checkRaiting(event) {
    //     const comentario = {
    //         comentario: comentario._id,
    //         rating: rating,
    //     }
    //     dispatch(comentariosActions.CheckRating(comentario))
        
    // }


    return (

        <div className="rating-container">
             <p className="rating-text">VALORACION {rating}</p>
            <div className="stars-container">

                {/* ESTE MAPEO CREA LAS 5 ESTRELLAS */}

                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;

                    return (
                        <label>
                            <input className="starinput"
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() => setRating(ratingValue)}
                                // id={comentario._id}
                            />
                            <FaStar
                                className="star"
                                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                size={20}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)} />
                        </label>
                    )
                })}
            </div>
        </div>
    )







}

export default StarRating