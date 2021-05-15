import {
  Button,
  Divider,
  Grid,
  Hidden,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InfoIcon from "@material-ui/icons/Info";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import NotificationsIcon from "@material-ui/icons/Notifications";
import React from "react";
import { useSidebarToggle } from "../../context/Drawer";
import PersonIcon from "@material-ui/icons/Person";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "transparent",
  },
  drawerButton: {
    marginRight: theme.spacing(2),
  },
  normalButton: {
    backgroundColor: "#2569E6",
    color: "white",
    padding: "5px 20px",
    textTransform: "inherit",
    borderRadius: "7px",
    height: "fit-content",
    marginRight: "10px",
    "& :hover": {
      color: "#7C8DB5",
    },
  },
  iconButton: {
    color: "#7C8DB5",
  },
  profileButton: {
    color: "#7C8DB5",
    textTransform: "inherit",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  dropDownItem: {
    color: "darkslategrey",
    padding: "10px 20px",
  },
  dropDownItemIcon: { fontSize: "18px", marginRight: "10px" },
  dropDownProgress: {
    backgroundColor: "#E7F3FC",
    color: "blue",
    padding: "10px 20px",
  },
  dropDownProgressCounter: {
    color: "darkslategrey",
  },
}));

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: "white",
  },
  bar: {
    background:
      "linear-gradient(90deg, rgba(114,190,252,1) 35%, rgba(0,104,251,1) 100%)",
  },
}))(LinearProgress);

const CustomAppbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const setOpen = useSidebarToggle();

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderProfileDropdown = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleProfileMenuClose}>
      <MenuItem
        onClick={handleProfileMenuClose}
        className={classes.dropDownItem}>
        <FavoriteIcon fontSize="small" className={classes.dropDownItemIcon} />
        Menu 1
      </MenuItem>
      <Divider />
      <MenuItem
        onClick={handleProfileMenuClose}
        className={classes.dropDownItem}>
        <FavoriteIcon fontSize="small" className={classes.dropDownItemIcon} />
        Menu 2
      </MenuItem>
      <Divider />
      <MenuItem
        onClick={handleProfileMenuClose}
        className={classes.dropDownItem}>
        <FavoriteIcon fontSize="small" className={classes.dropDownItemIcon} />
        Menu 3
      </MenuItem>
      <Divider />
      <MenuItem
        onClick={handleProfileMenuClose}
        className={classes.dropDownProgress}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Typography variant="body2">Lorem Ipsum</Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              className={classes.dropDownProgressCounter}>
              (1050/2000)
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <BorderLinearProgress variant="determinate" value={60} />
          </Grid>
        </Grid>
      </MenuItem>
      <Divider />
      <MenuItem
        onClick={handleProfileMenuClose}
        className={classes.dropDownItem}>
        <MeetingRoomIcon
          fontSize="small"
          className={classes.dropDownItemIcon}
        />
        Logout
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appbar} elevation={0}>
        <Toolbar>
          {/* Drawer Button */}
          <Hidden mdUp>
            <IconButton
              edge="start"
              className={classes.drawerButton}
              aria-label="open drawer"
              onClick={setOpen}>
              <MenuIcon />
            </IconButton>
          </Hidden>

          <div className={classes.grow} />

          {/* Desktop */}
          <div className={classes.sectionDesktop}>
            <Button
              variant="outlined"
              size="small"
              className={classes.normalButton}>
              Button1
            </Button>

            <IconButton className={classes.iconButton}>
              <InfoIcon />
            </IconButton>

            <IconButton className={classes.iconButton}>
              <NotificationsIcon />
            </IconButton>

            <Button
              edge="end"
              aria-controls={menuId}
              aria-haspopup="true"
              size="small"
              onClick={handleProfileMenuOpen}
              className={classes.profileButton}>
              <PersonIcon />
              &nbsp;Jason Statham&nbsp;
              <KeyboardArrowDownIcon fontSize="small" />
            </Button>
          </div>

          {/* Mobile */}
          <div className={classes.sectionMobile}>
            <IconButton aria-label="show more" aria-haspopup="true">
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {/* Render Mobile Menu */}
      {renderProfileDropdown}
    </div>
  );
};

export default CustomAppbar;
