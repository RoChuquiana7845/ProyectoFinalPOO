import Appbar from "@mui/material/AppBar";
import { Avatar, Container, MenuItem, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import "tailwindcss/tailwind.css";
import Tooltip from '@mui/material/Tooltip';

const Navbar = () => {
  const items = ["Crear Grupo", "Iniciar Sesión", "Registrarse"];
  const settings = ['Cerrar Sesion', 'Mas Configuración'];
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [menuUser, setMenuUser] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuOpen(true);
    setAnchorElNav(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    setAnchorElNav(null);
  };

  const handlerOpenUserMenu = (event) => {
    setMenuUser(true); 
    setAnchorElUser(event.currentTarget);
  }

  const handlerCloseUserMenu = () => {
    setMenuUser(false);
    setAnchorElUser(null);
  }

  return (
    <Appbar sx={{bgcolor: 'black'}}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Avatar
            style={{ width: "60px", height: "60px", borderRadius: "15px", margin: "15px"}}
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            src={"/Meeting Logo.png"}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: {
                xs: "none",
                md: "flex",
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                letterSpacing: ".3rem",
                textDecoration: "none",
              },
            }}
          >
            {"MEETING PROYECT"}
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              onClick={handleMenuOpen}
            >
              <MenuIcon style={{color: "white"}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={menuOpen}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              onClose={handleMenuClose}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {items.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Avatar
            style={{ width: "60px", height: "60px", borderRadius: "15px", margin: "15px"}}
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} 
            src={"/Meeting Logo.png"}
          />

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {'MEETING PROYECT'}
          </Typography>

          <Box sx={{flexGrow: 1, display: {xs: 'none', md:'flex'}}}>
            {
              items.map((page) => (
                <Button key={page} onClick={()=> alert('HOLA')} sx={{my:2, color: 'white', display: 'block'}}>
                  {page}                 
                </Button>
              ))
            }
          </Box>

          <Box sx={{flexGrow: 0}}>
            <Tooltip title="Configuración">
              <IconButton onClick={handlerOpenUserMenu} sx={{ P: 0}}>
                <Avatar alt={'nombre user'} src={'ruta de usuario'}/>
              </IconButton>
            </Tooltip>

            <Menu
            sx={{mt: '45px'}}
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            open={menuUser}
            onClose={handlerCloseUserMenu}
            >

              {
                settings.map((setting)=> (
                  <MenuItem key={setting} onClick={handlerCloseUserMenu}>
                    <Typography textAlign={"center"}>{setting}</Typography>
                  </MenuItem>
                ))
              }
            </Menu>

          </Box>
        </Toolbar>
      </Container>
    </Appbar>
  );
};

export default Navbar;
