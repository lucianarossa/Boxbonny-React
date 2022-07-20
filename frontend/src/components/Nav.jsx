
import { MdShoppingBasket } from "react-icons/md";
import { Link as LinkRouter } from "react-router-dom"
import "../styles/nav.css"

export default function Nav() {
  return (
    <header class="fixed z-50 w-screen bg-[#F6F7EB]">
      <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex-1 md:flex md:items-center md:gap-12">
          <img className="logo" src="https://i.imgur.com/Xi3X0wB.png" alt="logo" />
          </div>

          <div class="md:flex md:items-center md:gap-12">
            <nav class="hidden md:block" aria-labelledby="header-navigation">
              <h2 class="sr-only" id="header-navigation">Header navigation</h2>

              <ul class="flex items-center gap-6 text-md fontPoppins ">
                <li>
                  <LinkRouter
                    class="text-gray-500 transition hover:text-[#FF8E72]"
                    to="/"
                  >
                    Inicio
                  </LinkRouter>
                </li>

                <li>
                  <LinkRouter
                    class="text-gray-500 transition hover:text-[#FF8E72]"
                    to="/packs"
                  >
                    Packs
                  </LinkRouter>
                </li>
                <li>
                  <div
                    className="relative flex items-center justify-center"
                    onClick={null}
                  >
                    <MdShoppingBasket className="text-textColor text-2xl hover:text-[#FF8E72] cursor-pointer" />

                    <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                      <p className="text-xs text-white font-semibold">
                        {/* {cartItems.length} */}
                      </p>
                    </div>

                  </div>
                </li>
              </ul>
            </nav>


            <div class="flex items-center gap-4 fontPoppins ">
              <div class="sm:gap-4 sm:flex">
                <a
                  class="px-5 py-2.5 text-sm font-medium text-white bg-[#FF8E72] rounded-md hover:text-[#393E41] shadow"
                  href="/"
                >
                  Ingresa
                </a>

                <div class="hidden sm:flex">
                  <a
                    class="px-5 py-2.5 text-sm font-medium text-orange-600 bg-gray-100 hover:text-[#FF8E72] rounded-md"
                    href="/"
                  >
                    Registrate
                  </a>
                </div>
              </div>

              <div class="block md:hidden">
                <button
                  class="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}