import React from "react";
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import profile from "../../assests/images/profile.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  primary: {
    textAlign: "center",
    fontWeight: " 900 !important",
    fontSize: "15px !important",
    color: "rgb(16, 137, 211)",
  },
  secondary: {
    textAlign: "center",
    fontWeight: " 600 !important",
    fontSize: "10px !important",
    color: "rgb(16, 137, 211)",
  },
}));
const getDate=(str)=>{
    const date = new Date(str);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate
} 
const Profile = () => {
  const classes = useStyles();

  const currentUser = useSelector((state) => state.auth);
  // console.log(currentUser);
  const user = currentUser?.user;
  return (
    <>
      <Grid container spacing={2} m={1}>
        <Grid item md={8}>
          <Card>
            <CardHeader title="General Information" />
            <Grid container spacing={2} m={1}>
              <Grid item md={6} xs={12}>
                <label>EmployeeCode:</label>
                <Typography component="h5">{user?.employeeId}</Typography>
              </Grid>
              <Grid item md={6} xs={12}>
                <label>First name:</label>
                <Typography component="h5">{user?.firstname}</Typography>
              </Grid>
              <Grid item md={6} xs={12}>
                <label>Last name:</label>
                <Typography component="h5">{user?.lastname}</Typography>
              </Grid>
              <Grid item md={6} xs={12}>
                <label>Department:</label>
                <Typography component="h5">{user?.department}</Typography>
              </Grid>
              <Grid item md={6} xs={12}>
                <label>Designation:</label>
                <Typography component="h5">{user?.designation}</Typography>
              </Grid>
              <Grid item md={6} xs={12}>
                <label>Mobile:</label>
                <Typography component="h5">{user?.mobile}</Typography>
              </Grid>
              <Grid item md={6} xs={12}>
                <label>Date of Joined:</label>
                <Typography component="h5">{getDate(user?.doj)}</Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card>
            <CardHeader />{" "}
            <CardMedia
              component="img"
              height="194"
              image={profile}
              alt="Paella dish"
            />
            <CardContent>
              <Typography component="h5" className={classes.primary}>
                {user?.firstname}
              </Typography>
              <Typography component="h5" className={classes.secondary}>
                {user?.email.toLowerCase()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
