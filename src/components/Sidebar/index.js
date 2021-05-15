import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ReceiptIcon from "@material-ui/icons/Receipt";
import clsx from "clsx";
import React, { useState } from "react";
import { useSidebar, useSidebarToggle } from "../../context/Drawer";

const projectName = "Logo";

const menuItems = [
  {
    category: "Heading 1",
    items: [
      { name: "Menu Option 1", Icon: DashboardIcon },
      { name: "Menu Option 2", Icon: ReceiptIcon },
      { name: "Menu Option 3", Icon: ReceiptIcon },
    ],
  },
  {
    category: "Heading 2",
    items: [
      { name: "Menu Option 4", Icon: ReceiptIcon },
      { name: "Menu Option 5", Icon: ReceiptIcon },
    ],
  },
  {
    category: "Heading 3",
    items: [
      { name: "Menu Option 6", Icon: ReceiptIcon },
      { name: "Menu Option 7", Icon: ReceiptIcon },
    ],
  },
  {
    category: "Heading 4",
    items: [
      { name: "Menu Option 8", Icon: ReceiptIcon },
      { name: "Menu Option 9", Icon: ReceiptIcon },
    ],
  },
];

const useStyles = ({ drawerWidth }) =>
  makeStyles((theme) => ({
    container: {
      [theme.breakpoints.up("md")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    projectName: {
      paddingLeft: theme.spacing(3),
      marginTop: theme.spacing(2),
      fontSize: "26px",
      fontWeight: 700,
      textTransform: "uppercase",
    },
    category: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(3),
    },
    categoryText: {
      fontWeight: 500,
    },
    item: {
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: theme.spacing(4),
      "&:hover,&:focus": {
        color: "blue",
      },
    },
    itemActiveItem: {
      color: "blue",
      borderRight: "2px solid blue",
    },
    itemIcon: {
      minWidth: "auto",
      marginRight: theme.spacing(2),
    },
    activeIcon: {
      color: "blue",
    },
    divider: {
      marginTop: theme.spacing(2),
    },
  }));

const Sidebar = ({ other, drawerWidth = 230 }) => {
  const classes = useStyles({ drawerWidth })();
  const theme = useTheme();
  const mobileWidth = useMediaQuery(theme.breakpoints.down("md"));
  const [active, setActive] = useState("Menu Option 1");

  const open = useSidebar();
  const setOpen = useSidebarToggle();

  return (
    <Drawer
      variant={!mobileWidth ? "permanent" : "temporary"}
      PaperProps={{ style: { width: drawerWidth } }}
      open={open}
      onClose={setOpen}
      className={classes.container}>
      <List disablePadding>
        <ListItem className={classes.projectName}>{projectName}</ListItem>

        <Divider className={classes.divider} />

        {menuItems.map(({ category, items }, i) => (
          <React.Fragment key={i}>
            <ListItem className={classes.category}>
              <Typography variant={"body2"} className={classes.categoryText}>
                {category}
              </Typography>
            </ListItem>

            {items.map(({ name, Icon }) => (
              <ListItem
                key={name}
                button
                onClick={() => setActive(name)}
                className={clsx(
                  classes.item,
                  active === name && classes.itemActiveItem
                )}>
                <ListItemIcon
                  className={clsx(
                    classes.itemIcon,
                    active === name && classes.activeIcon
                  )}>
                  <Icon fontSize="small" />
                </ListItemIcon>
                <Typography variant={"body2"}>{name}</Typography>
              </ListItem>
            ))}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
