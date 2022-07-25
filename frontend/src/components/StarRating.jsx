import React, { useState } from "react"
import { FaStar } from "react-icons/fa"
import "../styles/StarRaiting.css"

function StarRating() {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)


    return (

        <div className="rating-container">
             <p className="rating-text"> RATING {rating}</p>
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