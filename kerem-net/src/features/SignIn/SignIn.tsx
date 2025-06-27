import {
  Button,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Dialog,
  DialogActions,
  Typography,
  TextField,
  Box,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Hooks/useAccount/store";
import { logIn, setAccountInfo } from "../../Hooks/useAccount/createSlice";

interface SignInProps {
  isSignInOpen: boolean;
  setOpenSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignIn: React.FC<SignInProps> = ({ isSignInOpen, setOpenSignIn }) => {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleClose = () => {
    setOpenSignIn(false);
  };
  const handleSubmit = () => {
    dispatch(logIn({ username, password }))
      .unwrap()
      .then((response) => {
        dispatch(
          setAccountInfo({
            username: response.data.username,
            password: response.data.password,
            id: response.data.id    
          })
        );
        setOpenSignIn(false);   
      })
      .catch((error) => {
        console.log(error); 
      });
  };
  const dispatch: AppDispatch = useDispatch();
  return (
    <Dialog open={isSignInOpen} onClose={handleClose}>
      <DialogTitle>
        <Typography variant="h5" component={"span"} color="primary">
          Sign In To KeremNet
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter your username and password to sign in to KeremNet. If you don't
          have an account press on sign up
        </DialogContentText>
        <Box>
          <TextField
            autoFocus
            required
            margin="dense"
            label="Username"
            fullWidth
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Box>
        <Box>
          <TextField
            autoFocus
            required
            margin="dense"
            label="Password"
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit} autoFocus>
            Sign In
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default SignIn;
