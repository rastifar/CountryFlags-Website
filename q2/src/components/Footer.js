import React, { useContext } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { skillContext } from "../context/SkillContextProvider";
import { Button } from "@mui/material";

const Footer = ({handleShow}) => {

  return (
    <div>
      <BottomNavigation showLabels spacing="2">       
        <BottomNavigationAction
         onClick={() => handleShow("all")}
          label="All"
          component="h1"
          sx={{ fontSize: "1.5rem" }}
        />
        <BottomNavigationAction
         onClick={() => handleShow("webDesign")}
          label="Web Design"
          component="h1"
        />
        <BottomNavigationAction
           onClick={() => handleShow("frontEnd")}
          label="Front End"
          component="h1"
        />
        <BottomNavigationAction
          onClick={() => handleShow("backEnd")}
          label="Back End"
          component="h1"
        />
      </BottomNavigation>
    </div>
  );
};

export default Footer;
