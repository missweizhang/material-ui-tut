import React from "react";
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DeleteOutlined } from "@mui/icons-material";
import { blue, yellow, red, green } from "@mui/material/colors";

const StyledCard = styled(Card)(({note}) => ({
  border: note?.category === 'work' ? '1px solid red' : null,
}))

const avatarBgColor = (category) => {
  switch (category) {
    case 'work':
      return yellow[700];
    case 'todos':
      return red[400];
    case 'money':
      return green[400];
    default:
      return blue[500];
  }
}

const StyledAvatar = styled(Avatar)(({note}) => ({
  backgroundColor: avatarBgColor(note.category)
}))

const NoteCard = ({ note, handleDelete }) => {
  return (
    <div>
      <StyledCard note={note} elevation={3}>
        <CardHeader
          avatar={<StyledAvatar note={note}>{note.category[0].toUpperCase()}</StyledAvatar>}
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined/>
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        >
        </CardHeader>
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>

        </CardContent>
      </StyledCard>
    </div>
  );
};

export default NoteCard;
