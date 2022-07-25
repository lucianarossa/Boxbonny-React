import { Link as LinkRouter } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import shoppingActions from "../redux/actions/shoppingActions";
import { useState } from 'react'
import { useEffect } from "react";

export default function ShoppingCart() {
  const [reload, setReload] = useState(false)
  const dispatch = useDispatch()
  const products = useSelector(store => store.shoppingReducer.productos)


  async function toDelete(prod) {
     dispatch(shoppingActions.deleteProduct(prod))
    setReload(!reload)
  }


  return (

    <div className="bg-gray-100">
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Carrito de compras</h1>
              <h2 className="font-semibold text-2xl">{products.shopping?.length} Packs</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Detalles de Producto</h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Cantidad</h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Precio</h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
            </div>
            {products.shopping?.map((prod, index) =>
              <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" key={index}>
                <div className="flex w-2/5">
                  <div className="w-20">
                    <video className="h-24" src={prod.idPack?.imagen} alt="" />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{prod.idPack?.nombre}</span>
                    <button href="#" onClick={()=>toDelete(prod._id)} className="text-start font-semibold hover:text-red-500 text-gray-500 text-xs">🗑️Eliminar</button>

                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>

                  <input className="mx-2 border text-center w-8" type="text" />
                  <div className="div4-products">
                    {/* <input id={prod.idPack?._id} className="custom-input-products" type="number" onChange={toModify}  defaultValue="1" min="1" max="100"/> */}
                  </div>
                  <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">${prod.idPack?.Precio}</span>
                <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
              </div>)}

            <LinkRouter to="/packs" className="flex font-semibold hover:underline text-orange-600 text-sm mt-10">

              <svg className="fill-current mr-2 text-orange-600 w-4  " viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
              Continuar Comprando
            </LinkRouter>
          </div>

          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">Resumen del pedido</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Packs 3</span>
              <span className="font-semibold text-sm">590$</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">Envio</label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Envio Normal - $10.00</option>
              </select>
            </div>
            <div className="py-10">
              <label className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
              <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
            </div>
            <button className="bg-slate-900 hover:bg-slate-700 px-5 py-2 text-sm text-white uppercase rounded">Applicar</button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Costo Total</span>
                <span>$600</span>
              </div>
              <LinkRouter to="/checkout" className="bg-orange-500 font-semibold hover:bg-orange-600 py-3 text-sm text-white uppercase w-full rounded flex justify-center items-center ">Proceder a la compra</LinkRouter>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}