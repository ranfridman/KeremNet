import "./CreatePostPage.css";
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
import {ApiPost} from "../../Scripts/API/Api";
const CreatePostPage = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [postContent, setPostContent] = React.useState("");
  const notifications = useNotifications();

  const createPostData = {
    userId: localStorage.getItem("userId"),
    text: postContent,
    creatorName: localStorage.getItem("username"),
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  const handleSubmit = () => {
    handleNext();
    setPostContent(""); 
    ApiPost(
      "/posts/",
      createPostData,
      () => {
        notifications.show(`Post was created`, {
          severity: "success",
          autoHideDuration: 3000,
        });
      },
      (error: any) => {
        notifications.show(error.message, { severity: "error" });
      }
    );
  };

  const steps = [
    {
      title: "Enter Post Content",
      description:
        "Write down your post and tell the world what you want to say",
      updateFunction: setPostContent,
    },
    {
      title: "Submit",
      description:
        "Attention this is the last step, once you post something on the site it will be visible to all users! Make sure you are happy with your post",
    },
  ];
  return (
    <Container className="create-post-page">
      <Card className="create-post-form">
        <Typography variant="h3" className="create-post-title">
          {" "}
          Create Post
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
                    className="create-post-input"
                    variant="outlined"
                    required
                    onChange={(e) =>
                      step.updateFunction && step.updateFunction(e.target.value)
                    }
                  />
                )}
                <Box sx={{ mb: 2 }}>
                  <Button
                    variant="contained"
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
        {activeStep === steps.length && (
          <Box>
            <Typography
              variant="h5"
              color="primary"
              className="create-post-success"
            >
              Post was created
            </Typography>
            <Button variant="contained" onClick={handleReset}>New Post</Button>
          </Box>
        )}
      </Card>
    </Container>
  );
};

export default CreatePostPage;
