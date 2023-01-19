import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import { mainListItems, avatar } from './ListItems';
import Navbar from "./Navbar";
import StudentTasks from "./StudentTasks";
import MySupervisors from "./MySupervisors";
import StudentLecturers from "./StudentLecturers.js";

// import { Typography } from '@mui/material';
import { Drawer } from "./Drawer";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Student({ setPerson }) {
  
  const [tasks, setTasks] = React.useState([]);
  const [supervisors, setSupervisors] = React.useState([]);
  const [lecturers, setLecturers] = React.useState([]);

  const user_id = localStorage.getItem("user_id");
  console.log(user_id);

  React.useEffect(() => {
    fetch(`/students/${user_id}`)
      .then((r) => r.json())
      .then((data) => {
        setTasks(data.tasks);
        setSupervisors(data.supervisor);
        setLecturers(data.lecturer);
      });
  }, []);

  const mdTheme = createTheme();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [drawerClickInfo, setDrawerClickInfo] = React.useState("My Tasks");

  const avatar = (
    <React.Fragment>
      <ListItemButton
        onClick={(event) => setDrawerClickInfo(event.target.textContent)}
      >
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText>Student 1</ListItemText>
      </ListItemButton>
    </React.Fragment>
  );

  const drawerButtons = (
    <React.Fragment>
      <ListItemButton
        onClick={(event) => setDrawerClickInfo(event.target.textContent)}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="My Tasks" />
      </ListItemButton>

      <Divider sx={{ my: 1 }} />

      <ListItemButton
        onClick={(event) => setDrawerClickInfo(event.target.textContent)}
      >
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="My Supervisors" />
      </ListItemButton>

      <Divider sx={{ my: 1 }} />

      <ListItemButton
        onClick={(event) => setDrawerClickInfo(event.target.textContent)}
      >
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="My Lecturers" />
      </ListItemButton>
      <Divider sx={{ my: 1 }} />

      <ListItemButton
        onClick={() => {
          localStorage.removeItem("role");
          setPerson(null);
        }}
      >
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </React.Fragment>
  );

  return (
    <ThemeProvider theme={mdTheme}>
      {/* Main surface for displayed items */}
      <Box sx={{ display: "flex" }}>
        {/* Left hand side drawer  */}
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [2.3],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              {" "}
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}{" "}
            </IconButton>
          </Toolbar>
          <List component="nav"> {avatar} </List>
          <Divider sx={{ my: 1 }} />
          <List component="nav"> {drawerButtons} </List>
        </Drawer>

        {/* Table */}
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) => theme.palette.grey[100],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {drawerClickInfo === "My Tasks" ? (
                <StudentTasks user="student" tasks={tasks} />
              ) : drawerClickInfo === "My Lecturers" ? (
                <StudentLecturers lecturers={lecturers} />
              ) : drawerClickInfo === "My Supervisors" ? (
                <MySupervisors supervisors={supervisors} />
              ) : (
                <></>
              )}
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Student;
