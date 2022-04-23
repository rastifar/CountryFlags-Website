import React, { useContext, useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  TextField,
  useMediaQuery,
  useTheme,
  Select,
  Typography,
  InputLabel,
  FormControl,
} from "@mui/material";
import { AddCircleOutline, SettingsSuggestRounded } from "@mui/icons-material";
import { skillContext } from "../context/SkillContextProvider";
import SkillForm from './SkillForm'

const AddSkillModal = (props) => {
  //context
  const { addSkill, skills, editSkill } = useContext(skillContext);
  
  //App variable
  const refTitle = useRef();
  const refDesc = useRef();
  const refSkill = useRef();
  //Modal variable
  const [open, setOpen] = React.useState(false);
  
  const[skill,setSkill] = useState({})
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  const handleSubmit = () => {
    // if (props.action === "Create") {
    //   addSkill({
    //     id: refTitle.current.value.toLowerCase(),
    //     title: refTitle.current.value,
    //     description: refDesc.current.value,
    //     skills: refSkill.current.value,
    //   });
    //   handleClose();      
    // }
    // editSkill({
    //   id: refTitle.current.value,
    //   title: refTitle.current.value,
    //   description: refDesc.current.value,
    //   skills: refSkill.current.value,
    // })
    handleClose(); 

  };
// if(!open) return ''
  return (
    <div>
      <AddCircleOutline onClick={handleClickOpen} 
        sx={{ color: "yellow", fontSize: "3.5rem" }}/>
        
       

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        
        <DialogTitle id="responsive-dialog-title">
          {"Create a New Skills"}

          <Typography color="inherit" sx={{ mt: "1rem" }}>
            Please fill out the form below.
          </Typography>
        </DialogTitle>
          
        <DialogContent>
          <DialogContentText>
         <SkillForm/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmit} sx={{mr:'auto' }}>
            {props.action}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddSkillModal;
