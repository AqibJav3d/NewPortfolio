import { Button, Menu } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { useNavigate, Link } from "react-router-dom";
import { MenuList } from "./Data";
const Header = (theme) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  // const handleLinkClick = (path) => {
  //   navigate(path);
  // };

  return (
    <div className={classes.headerWrapper}>
      <div className={classes.headerContainer}>
        <div className={classes.header}>
          <div className={classes.container}>
            <div className={classes.logo}>
              <a href="/">Akib :)</a>
            </div>

            <nav id="cssmenu" className={classes.cssMenu}>
              <ul>
                {MenuList.map(({ path, text }, i) => (
                  <li>
                    <Link to={path}>{text}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={classes.hamburger}>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MenuIcon />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {MenuList.map(({ path, text }, i) => (
                  <MenuItem onClick={handleClose}>
                    <Link to={path}>{text}</Link>
                  </MenuItem>
                ))}
                {/* <MenuItem onClick={() => {}}>Home</MenuItem>
                <MenuItem onClick={handleClose}>About</MenuItem>
                <MenuItem onClick={handleClose}>Skills</MenuItem>
                <MenuItem onClick={handleClose}>Resume</MenuItem>
                <MenuItem onClick={handleClose}>Portfolio</MenuItem>

                <MenuItem onClick={handleClose}>Contact</MenuItem> */}
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
