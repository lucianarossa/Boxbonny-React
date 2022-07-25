import React, { useState } from 'react';
import { MdShoppingBasket } from "react-icons/md";
import { Link as LinkRouter, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import usuariosActions from '../redux/actions/usuariosActions';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { MenuItem } from '@mui/material';
import "../styles/login.css";



export default function Nav() {


  const [anchorElUser, setAnchorElUser] = useState(null);
  const usuario = useSelector(store => store.usuariosReducer.user);
  // console.log("usuario", usuario);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function desloguearse() {
    await dispatch(usuariosActions.desloguearse())
      .then(navigate("/desloguearse", { replace: true }))
      //me lleva de nuevo al home al hacer sign out

  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <header className="sticky top-0  z-50  bg-[#F6F7EB]">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <img className="logo w-[12rem] h-[12rem]" src="https://i.imgur.com/Xi3X0wB.png" alt="logo" />
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav className="hidden md:block" aria-labelledby="header-navigation">
              <h2 className="sr-only" id="header-navigation">Header navigation</h2>

              <ul className="flex items-center gap-6 text-md fontPoppins ">
                <li>
                  <LinkRouter
                    className="text-gray-500 transition hover:text-[#FF8E72]"
                    to="/"
                  >
                    Inicio
                  </LinkRouter>
                </li>

                <li>
                  <LinkRouter
                    className="text-gray-500 transition hover:text-[#FF8E72]"
                    to="/packs"
                  >
                    Packs
                  </LinkRouter>
                </li>
                <li>
                  <LinkRouter
                    className="relative flex items-center justify-center"
                    to="/cart"
                  >
                    <MdShoppingBasket className="text-textColor text-2xl hover:text-[#FF8E72] cursor-pointer" />

                    <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                      <p className="text-xs text-white font-semibold">
                        {/* {cartItems.length} */}
                      </p>
                    </div>

                  </LinkRouter>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-4 fontPoppins ">
              {/* avatar usuario */}
              <Box sx={{ flexGrow: 0 }}>
                <div>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    {usuario ? <Box sx={{ display: 'flex', flexDirection: 'column', WebkitJustifyContent: 'center', color: '#FF8E72', alignItems: 'center', }} >
                      <Avatar alt="imagen del usuario" src={usuario?.imagen} sx={{ width: 30, height: 30 }} sm={{ width: 30, height: 30 }} />
                      <p className="m-nombreAvatar">{usuario?.nombre}</p>
                    </Box>
                      :
                      <>
                        <div className="sm:gap-4 sm:flex">
                          <LinkRouter
                            className="px-5 py-2.5 text-sm font-medium text-white bg-[#FF8E72] rounded-md hover:text-[#393E41] shadow"
                            to="signin"
                          >
                            Ingresá
                          </LinkRouter>
                        </div>
                        <Box sx={{ display: 'flex', flexDirection: 'column', WebkitJustifyContent: 'center', alignItems: 'center', color: 'white', paddingLeft: "2rem" }} > <Avatar alt="avatar no logueado" src={"https://i.imgur.com/F6TK2Lu.png"} sx={{ width: 35, height: 35 }}/></Box>
                      </>
                    }
                  </IconButton>
                </div>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}>
                  {usuario ? (
                    <Box>
                      <MenuItem
                        sx={{ '&:hover': { bgcolor: 'rgb(224,224,224)' } }} onClick={handleCloseUserMenu}>
                        <Typography sx={{ padding: '2px', paddingLeft: '6px', paddingRight: '6px', color: 'rgb(2,0,3)' }} onClick={desloguearse}>Salir</Typography>

                      </MenuItem>
                    </Box>
                  )
                    :
                    <MenuItem
                      sx={{ '&:hover': { bgcolor: 'rgb(224,224,224)' } }} onClick={handleCloseUserMenu}><Typography sx={{ padding: '2px', paddingLeft: '6px', paddingRight: '6px', color: 'rgb(2,0,3)' }}>No estás logueado</Typography></MenuItem>
                  }
                </Menu>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
