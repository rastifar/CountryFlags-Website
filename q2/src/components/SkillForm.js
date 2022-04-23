import React, { useContext, useRef, useState } from "react";
import {
  MenuItem,
  TextField,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

const SkillForm = () => {
  const refTitle = useRef();
  const refDesc = useRef();
  const refSkill = useRef();

  return (
    <>
      <TextField
        inputRef={refTitle}
        fullWidth
        required
        color="primary"
        label="Title"
        variant="standard"
        sx={{ my: ".5rem" }}
        // onChange={handleChange}
        // value={props.action==="Create"?"":"edit"}
      />
      <FormControl fullWidth>
        <InputLabel id="selectSkills">Skills</InputLabel>
        <Select
          inputRef={refSkill}
          fullWidth
          required
          label="Skills"
          variant="standard"
          labelId="selectSkills"
          sx={{ my: "1rem" }}
          color="primary"
          // onChange={handleChange}
          // value={props.action==="Create"?"":"Web Design"}
        >
          <MenuItem value={"Web Design"}>Web Design</MenuItem>
          <MenuItem value={"Front-End"}>Front End</MenuItem>
          <MenuItem value={"Back-End"}>Back End</MenuItem>
        </Select>
      </FormControl>
      <TextField
        inputRef={refDesc}
        fullWidth
        required
        multiline
        rows={4}
        label="Description"
        color="primary"
        variant="standard"
        sx={{ my: ".5rem" }}
        // onChange={handleChange}
        // value={props.action==="Create"?"":"edit"}
      />
    </>
  );
};

export default SkillForm;
