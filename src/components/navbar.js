import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import "../style/home.css";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  <Button variant="inherit" href="/whitepaper">
    <p className="navlinks">whitepaper</p>
  </Button>,
  <Button variant="inherit" href="/community">
    <p className="navlinks">community</p>
  </Button>,
  <Button variant="inherit" href="/faq">
    <p className="navlinks">FAQ</p>
  </Button>,
  <Button variant="inherit" href="/team">
    <p className="navlinks">Team</p>
  </Button>,
  <Button
    variant="contained"
    sx={{
      backgroundColor: "orange",
      borderRadius: "40px",
      "&:hover": {
        background: "orange",
      },
    }}
    href="https://dex-onzechain.web.app/#/"
  >
    <p style={{ color: "white" }} className="navlinks">
      Launch app
    </p>
  </Button>,
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" style={{ background: "#FFFFFF" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 100 }}>
            <a className="homelink" href="/">
              <img
                className="logo"
                src="https://i.postimg.cc/4xf8S5Mp/Onzechain-logo-2.png"
              ></img>
            </a>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Box
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ m: 2, color: "black", display: "block" }}
              >
                {page}
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
