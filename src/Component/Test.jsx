import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import imgNavbar from "../../img/oro2.png";

export default function Navbar({ lang, dir }) {
  const pages = [
    lang === "en" ? "home" : "الصفحة الرئيسية",
    lang === "en" ? "Services" : " الخدمات",
    lang === "en" ? "Manage" : " الإدارة",
    lang === "en" ? "Features" : " المميزات",
    lang === "en" ? "pricing" : " التسعير",
    lang === "en" ? "Contact" : "اتصل بنا",
  ];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar
        sx={{
          background: "transparent",
          //  direction to the style
          direction: dir,
          "& *": {
            //  font for the language
            fontFamily:
              lang === "ar" ? "Arial, sans-serif" : "Assistant, sans-serif",
          },
        }}
        position="static"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1 }}>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                  <img
                    className="styleImgNavbar mx-5 mt-3"
                    src={imgNavbar}
                    alt=""
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px", color: "red" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {/* here */}
                {pages.map((page) => (
                  <MenuItem key={page}>
                    <a
                      href={`#${page.toLowerCase()}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography variant="body1" align="center">
                        {page}
                      </Typography>
                    </a>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <a href="#home" style={{ textDecoration: "none" }}>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  {lang === "en" ? "home" : "الصفحة الرئيسية"}
                </Button>
              </a>
              <a href="#services" style={{ textDecoration: "none" }}>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  {lang === "en" ? "Services" : " الخدمات"}
                </Button>
              </a>
              <a href="#manage" style={{ textDecoration: "none" }}>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  {lang === "en" ? "manage" : " الإدارة"}
                </Button>
              </a>
              <a href="#features" style={{ textDecoration: "none" }}>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  {lang === "en" ? "features" : " المميزات"}
                </Button>
              </a>
              <a href="#pricing" style={{ textDecoration: "none" }}>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  {lang === "en" ? "pricing" : " التسعير"}
                </Button>
              </a>
              <a href="#contact" style={{ textDecoration: "none" }}>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  {lang === "en" ? "Contact" : "اتصل بنا"}
                </Button>
              </a>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

// @media (min-width: 600px){
// .css-19r6kue-MuiContainer-root {
//     padding-left: 100px !important;
//     padding-right: 100px !important;
// }}

// .css-1q39md6-MuiButtonBase-root-MuiButton-root {
// color: #FFFFFF !important;
// }


// .css-i4bv87-MuiSvgIcon-root {
//     color: black !important;
// }

// .css-av538e-MuiButtonBase-root-MuiIconButton-root {
//     color:#A28547 !important;
// }

// .css-1q39md6-MuiButtonBase-root-MuiButton-root {

//   font-weight: 400 !important;
// }

// .css-i4bv87-MuiSvgIcon-root {
//     color: #FFFFFF !important;
// }

// .css-i4bv87-MuiSvgIcon-root{
//   font-size: 1.9rem !important;
//   margin-top: 1rem;
// }

// .MuiPaper-root {
//   left: 5% !important;
 
// }

// .css-1ka5eyc-MuiPaper-root-MuiMenu-paper-MuiPopover-paper {

//   min-width:90% !important;
  
// }

// .css-1q39md6-MuiButtonBase-root-MuiButton-root {
//         min-width: 100px !important;
// }
// .css-i4bv87-MuiSvgIcon-root {
//     font-size: 1.9rem !important;
//     margin-top: 0rem;
// }

// .css-1uwgr7b-MuiTypography-root {

//   color: black;
// }

