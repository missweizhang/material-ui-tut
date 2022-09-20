import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { format } from 'date-fns'

const Page = styled("div")(({theme}) => ({
  background: "#f9f9f9",
  width: "100%",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(3)
}));

const drawerWidth = 240;
const StyledDrawer = styled(Drawer)({
  width: drawerWidth,
  ".MuiDrawer-paper": {
    width: drawerWidth,
  },
});

const StyledListItemButton = styled(ListItemButton)({
  "&.active" : {
    background: "#fff4f4"
  }
})

// take up the space of toolbar in app bar
const DummyToolbar = styled("div")(({theme}) => theme.mixins.toolbar)

const Layout = ({ children }) => {
  const location = useLocation();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      <AppBar sx={{width: `calc(100% - ${drawerWidth}px)`}}>
        <Toolbar>
          <Typography sx={{flex: 1}}>
            Today is {format(new Date(), 'MMMM do Y')}
          </Typography>
          <Typography>
            Mario
          </Typography>
          <Avatar src="/mario-av.png" sx={{marginLeft: 2}}/>
        </Toolbar>
      </AppBar>

      <StyledDrawer variant="permanent" anchor="left">
        <div>
          <Typography variant="h5" sx={{p: 2}}>Ninja Notes</Typography>
        </div>
        <List>
          {menuItems.map((item) => {
            return (
              <ListItem key={item.text}>
                <StyledListItemButton
                  component={RouterLink}
                  to={item.path}
                  className={location.pathname === item.path ? "active" : null}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </StyledListItemButton>
              </ListItem>
            );
          })}
        </List>
      </StyledDrawer>

      <Page>
        <DummyToolbar />
        {children}
      </Page>
    </div>
  );
};

export default Layout;
