import "./CreateAccountPage.css";                   
import {
  Container,
  TextField,
  Button,
  Card,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Box,
} from "@mui/material";
import React from "react";
import { useNotifications } from "@toolpad/core/useNotifications";
import api from "../../Scripts/API/Api";
const CreateAccountPage = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [username, setUsername] = React.useState("");
  const [biography, setBiography] = React.useState("");
  const notifications = useNotifications();

  const createUserData = {
    username,
    biography,
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const validateUsername = username.length > 0 && /^[a-zA-Z0-9]+$/.test(username);
  const validateBiography = biography.length > 0 && /^[a-zA-Z0-9]+$/.test(biography);
  const validateUserDetails = true;

  const handleSubmit = () => {
    handleNext();
    api.post("/users/", createUserData).then((response) => {
      
      notifications.show(`Account was created`, { severity: "success",autoHideDuration: 3000 });
      sessionStorage.setItem("username", response.data.username);
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("userId", response.data.id);
    }).catch((error) => {
      notifications.show(error.message, { severity: "error" });

    })
  };

  const steps = [
    {
      title: "Enter Username",
      description:
        "Make sure your username is unique and doesn't contain any special characters",
      updateFunction: setUsername,
      validateFunction: validateUsername,
      initialValue: username
    },
    {
      title: "Enter Biography",
      description: "Tell us a bit about yourself, this will be visible to all users so don't be too personal",
      updateFunction: setBiography,
      validateFunction: validateBiography,
      initialValue: biography
    },
    {
      title: "Create Account",
      description:
        "Once you're done, click the button below to create your account  ",
      validateFunction: validateUserDetails
    },
  ];
  return (
    <Container className="create-account-page">
      <Card className="create-account-form">
        <Typography variant="h3" className="create-account-title">
          Sign Up
        </Typography>

        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.title}>
              <StepLabel>{step.title}</StepLabel>

              <StepContent>
                <Typography>{step.description}</Typography>
                {index !== steps.length - 1 && (
                  <TextField
                    label={step.title}
                    className="create-account-input"
                    variant="outlined"
                    value={step.initialValue}      
                        onChange={(e) =>
                      step.updateFunction && step.updateFunction(e.target.value)
                    }
                  />
                )}
                <Box sx={{ mb: 2 }}>
                  <Button
                    variant="contained"
                    disabled={!step.validateFunction}
                    onClick={
                      index === steps.length - 1 ? handleSubmit : handleNext
                    }
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Submit" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
              {activeStep === steps.length  && (
                <Box>
                  <Typography variant="h5" color="primary" className="create-account-success" >
                    Account was created
                  </Typography>
                </Box>
              ) }

      </Card>
    </Container>
  );
};

export default CreateAccountPage;
