import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { signInApi } from "../../apis/authApi.jsx";
import "./styles.css";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../../reducers/userReducer.jsx";
const useStyles = makeStyles((theme) => ({
  font: {
    fontSize: "15px",
  },
}));

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000/">
        EYS
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const SignIn = ({ onSignIn }) => {
  //console.log("props",onSignIn );
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let dataToSent = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    try {
      dispatch(loginAsync(dataToSent)).then(async(res) => {
        console.log(res)
        if (res.payload) {
          await  onSignIn();
          localStorage.setItem("token",res.payload.token)
          navigate("/dashboard");
        }
      });
      // console.log(currentUser);
      // const responses = await signInApi(dataToSent);
      //       if (
      //   responses.role === "user" ||
      //   responses.role === "admin" ||
      //   responses.role === "hr"
      // ) {
      //   await onSignIn();

      //   navigate("/dashboard");
      // }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md" style={{ marginTop: "100px" }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          {/* <Typography component="h1" variant="h2">
            Sign in
          </Typography> */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              className={classes.font}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              size="large"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body1">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to={"/"} variant="body1">
                  {"Go Back"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};
export default SignIn;
