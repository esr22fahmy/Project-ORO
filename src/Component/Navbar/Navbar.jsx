import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import imgNavbar from "../../img/oro2.png";
import { Drawer } from "@mui/material";
import { useTranslation } from "react-i18next";
import styleNav from "./Navbar.module.css";


export default function Navbar({ lang, dir }) {
  const { t } = useTranslation();

  const pages = [
    t("home"),
    t("services"),
    t("manage"),
    t("features"),
    t("pricing"),
    t("contact"),

    // Trim remove space
  ].map((page) => page.trim());

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
              lang === "ar"
                ? "'Cairo', sans-serif"
                : "'Montserrat', sans-serif",
          },
        }}
        position="static"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1 }}>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0, justifyContent: "start" }}>
                  <img
                    className={`${styleNav.styleImgNavbar} mt-3`}
                    src={imgNavbar}
                    alt=""
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
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
              ></Menu>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="open drawer"
                onClick={toggleDrawer}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
                <Box sx={{ width: 250 }} onClick={toggleDrawer}>
                  {pages.map((page) => (
                    <Button
                      key={page}
                      fullWidth
                      sx={{ my: 4, color: "black" }}
                      // href={`#${page.toLowerCase()}`}
                      href={
                        lang === "en" ? `#${page.toLowerCase()}` : `#${page}`
                      }
                    >
                      {page}
                    </Button>
                  ))}
                </Box>
              </Drawer>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <Button
                className={`${styleNav.linkNav}`}
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => scrollToSection("home")}
                // href={t("#home")}
                href={lang === "en" ? "#home" : "#الرئيسية"}
              >
                {t("home")}
              </Button>
              <Button
                className={`${styleNav.linkNav}`}
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => scrollToSection("services")}
                href={lang === "en" ? "#services" : "#الخدمات"}
              >
                {t("services")}
              </Button>
              <Button
                className={`${styleNav.linkNav}`}
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => scrollToSection("manage")}
                href={lang === "en" ? "#manage" : "#الإدارة"}
              >
                {t("manage")}
              </Button>
              <Button
                className={`${styleNav.linkNav}`}
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => scrollToSection("features")}
                href={lang === "en" ? "#features" : "#المميزات"}
              >
                {t("features")}
              </Button>
              <Button
                className={`${styleNav.linkNav}`}
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => scrollToSection("pricing")}
                href={lang === "en" ? "#pricing" : "#التسعير"}
              >
                {t("pricing")}
              </Button>
              <Button
                className={`${styleNav.linkNav}`}
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => scrollToSection("contact")}
                href={lang === "en" ? "#Contact" : "# اتصل بنا"}
              >
                {t("contact")}
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
