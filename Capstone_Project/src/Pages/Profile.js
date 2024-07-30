
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import userIcon from '../Assets/profileicon.jpg';
import "../Style/about.css";

function Profile() {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
  
    const handleInputChange = (event) => {
      setComment(event.target.value);
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      if (comment.trim()) {
        setComments([...comments, comment]);
        setComment('');
      }
    };

    const [points, setPoints] = useState(20);

    const incrementPoints = () => {
      setPoints(points + 1);
    };
  
    const decrementPoints = () => {
      setPoints(points - 1);
    };
    
    
    return(
        <div>
        <h1 style={{ padding: '20px' }}>Profile</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
            <img src={userIcon} alt="User Icon" style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>User Name</p>
        </div>

        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h3>Current Points</h3>
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{points}</p>
            <div>
                <button onClick={incrementPoints} style={{ marginRight: '10px', padding: '10px 20px' }}>
                Add Point
                </button>
                <button onClick={decrementPoints} style={{ padding: '10px 20px' }}>
                Subtract Point
                </button>
            </div>
        </div>

        <div style={{ padding: '20px'}}>
            <h3>Earn points by taking a <NavLink to="/quiz">Quiz</NavLink></h3><br></br>
        </div>
        
        <div style={{ padding: '20px' }}>
      <h3>Tell us how you saved clothing from the landfill:</h3>
      <form onSubmit={handleFormSubmit}>
        <textarea
          value={comment}
          onChange={handleInputChange}
          placeholder="Write your comment here..."
          rows="4"
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>
          Submit
        </button>
      </form>
      <div style={{ marginTop: '20px' }}>
        <h3>Comments</h3>
        {comments.length === 0 && <p>No comments yet.</p>}
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          {comments.map((comment, index) => (
            <li key={index} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
              {comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  
        </div>
    )
}
export default Profile