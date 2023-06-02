import React, { useState } from 'react';
import { Grid, Paper, Typography, Button, TextareaAutosize } from '@mui/material';

const CommentCard = ({ comment, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.review);

  const handleDelete = () => {
    onDelete(comment.review_id);
  };

  const handleEdit = () => {
    if (isEditing) {
      onEdit(editedComment);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <Paper elevation={3} sx={{ marginBottom: '20px', fontFamily: 'Montserrat', color: 'black' }}>
      <Grid container spacing={2} sx={{ padding: '10px' }}>
        <Grid item xs={12}>
          {isEditing ? (
            <TextareaAutosize
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
            />
          ) : (
            <Typography variant="body1" sx={{ fontFamily: 'Montserrat', color: 'black' }}>
              {comment.review}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="flex-end" alignItems="center" >
            <Grid item>
              <Button variant="contained" color="success" onClick={handleEdit} sx={{mr:'15px'}}>
                {isEditing ? 'Save' : 'Edit'}
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="error" onClick={handleDelete}>
                Delete
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CommentCard;
