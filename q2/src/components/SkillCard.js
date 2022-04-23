import {
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import React, { useContext, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { skillContext } from "../context/SkillContextProvider";

const SkillCard = ({ title, items ,setShowEdit}) => {
  //context variable
  const { deleteSkill, editSkill, setSkill } = useContext(skillContext);

  const handleShow = (item) => {
    setSkill(item);
    // setShowEdit(false)
  };
  const handleEdit = (item) => {
    setSkill(item);
    setShowEdit(true)
  };
  const handleDelete = (item) => {
    setSkill({});
    deleteSkill(item.id);
  };

  return (
    <div>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", fontSize: "1.5rem", fontWeight: "bold" }}
      >
        {title}
      </Typography>
      <List component="ul">
        {items?.map((item) => (
          <ListItem
            sx={{ mx: ".5rem" }}
            key={item.title}
            onClick={() => handleShow(item)}
          >
            <ListItemText primary={item.title} />
            <ListItemIcon onClick={() => handleEdit(item)}>
              <EditIcon />
            </ListItemIcon>

            <IconButton onClick={() => handleDelete(item)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SkillCard;
