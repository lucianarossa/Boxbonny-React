import React from "react";
import FilterProduct from '../components/FilterProduct'
import '../styles/cards.css'

const PacksComponent = () => {

    return (


        <div className="productsList fontRaleway w-full flex  ">
            <div className="containerFilter">
                <FilterProduct />
            </div>

            <div class="container">
                <div class="overlay">
                    <div class="items fontRaleway"></div>
                    <div class="items head fontRaleway">
                        <p className="text-sm my-2">La posibilidad de elegir una actividad emocionante e innovadora</p>
                        <hr />
                    </div>
                    <div class="items price fontRaleway">
                        <p class="old">$8000</p>
                        <p class="new">$6000</p>
                    </div>
                    <div class="items cart">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                </div>
            </div>

        </div>


    );

}

export default PacksComponent
