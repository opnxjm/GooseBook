import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box, Rating, Paper, Button, TextField } from '@mui/material';
import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BottomNav from '../component/BottomNav';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CommentCard from '../component/CommentCard';
import getCookie from '../util/getCookie';

function BookReview() {
  const { book_id } = useParams();
  const [comments, setComments] = useState([]);
  const [bookData, setBookData] = useState(null);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addComment(newComment);
    window.location.reload();
  };

  // Fetch book data
  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await axios.get(`http://localhost:3008/book/${book_id}`);
        if (response.data.success) {
          setBookData(response.data.book);
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    fetchBookData();
  }, [book_id]);

  // Fetch comments
  const fetchComments = async () => {
    try {
      const response = await axios.get(`http://localhost:3008/books/${book_id}/comments`);
      setComments(response.data.comment);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };
  useEffect(() => {
    fetchComments();
  }, [book_id]);

  //Add comments
  const addComment = async (newComment) => {
    try {
      const response = await axios.post(`http://localhost:3008/addReview/${getCookie("userId")}/${book_id}`, {
        review: newComment
      });
      if (response.data.success) {
        setComments([...comments, response.data.comment]);
        setNewComment('');
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };
  // Delete comment
  const deleteComment = async (commentId) => {
    try {
      await axios.delete(`http://localhost:3008/review/${book_id}/${commentId}`);
      setComments((prevComments) => prevComments.filter((comment) => comment.review_id !== commentId));
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  // Edit comment
  const editComment = async (commentId, editedComment) => {
    try {
      await axios.patch(`http://localhost:3008/updateReview/${book_id}/${commentId}`, { review: editedComment });
      console.log(editedComment);
      setComments((prevComments) =>
        prevComments.map((comment) => {
          if (comment.review_id === commentId) {
            return { ...comment, review: editedComment };
          }
          return comment;
        })
      );
    } catch (error) {
      console.error('Error editing comment:', error);
    }
  };

  if (!bookData) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar sx={{ backgroundColor: '#3C2317', width: '100%', marginBottom: '30px' }}>
        <Toolbar>
          <Link to="/Home" style={{ color: 'white' }}>
            <ArrowBackIcon fontSize="large" />
          </Link>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
            <Typography variant="h5" sx={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}>
              {bookData.title}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2} sx={{ flex: '1 0 auto' }}>
        <Grid item xs={12} sm={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '80px' }}>
            <img src={bookData.book_cover} alt="Book cover" style={{ width: '50%' }} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} sx={{ marginTop: '80px' }}>
          <Typography variant="h3" sx={{ color: '#3C2317', fontFamily: 'Montserrat' }}>
            {bookData.title}
          </Typography>
          <Typography variant="h5" sx={{ color: '#3C2317', fontFamily: 'Montserrat' }}>
            {bookData.author}
          </Typography>
          <Rating name="read-only" value={4} readOnly />
          <br />
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#B4CDE6' }}>
            <Link to={`/book/${book_id}`} style={{ textDecoration: 'none' }}>
              <p
                style={{
                  padding: '15px',
                  width: '250px',
                  textAlign: 'center',
                  color: '#3C2317',
                  backgroundColor: 'white',
                  borderRadius: '30px',
                  border: 'solid #3C2317',
                  marginRight: '10px',
                }}
              >
                Overview
              </p>
            </Link>
            <p
              style={{
                padding: '15px',
                width: '250px',
                textAlign: 'center',
                justifySelf: 'end',
                color: 'white',
                backgroundColor: '#3C2317',
                borderRadius: '30px',
                marginLeft: '10px',
              }}
            >
              Review
            </p>
          </Box>
          <br />
          <Box sx={{ border: 'solid black', padding: '5vh' }}>
            <Typography
              variant="h6"
              sx={{ justifyContent: 'left', ml: '7px', fontFamily: 'Montserrat', color: '#3C2317' }}
            >
              Review
            </Typography>
            <Grid item xs={12} sm={8}>
              <Rating name="read-only" value={4} readOnly size="large" sx={{ ml: '6px' }} />
              <br />
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', ml: '5%' }}>
                {comments.map((comment) => (
                  <CommentCard
                    key={comment.review_id}
                    comment={comment}
                    onDelete={() => deleteComment(comment.review_id)}
                    onEdit={(editedComment) => editComment(comment.review_id, editedComment)}
                  />
                ))}
              </Box>
              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', justifyContent: 'row' }}>
                <input
                  type="text"
                  value={newComment}
                  onChange={event => setNewComment(event.target.value)}
                  placeholder="Add comment..."
                />
                <button type="submit" style={{
                  marginLeft: '2vw',
                  backgroundColor: '#628E90',
                  borderRadius: '50px',
                  height: '52px',
                  width: '147px',
                  border: '2px solid #628E90',
                  fontFamily: 'Montserrat',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  color: '#FFF6E8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 'auto',
                  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                }}>Add Comment</button>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <br />
      <Box sx={{ flexShrink: 0, mb: '0vh' }}>
        <BottomNav />
      </Box>
    </Box>
  );
}

export default BookReview;
