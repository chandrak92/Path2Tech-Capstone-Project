import { useState } from "react";
import { NavLink } from "react-router-dom";
import userIcon from "../Assets/profileicon.jpg";
import "../Style/profile.css";

const Profile = ({user}) => {
  const [error, setError]= useState(false);
  const [loading, setLoading]= useState(false);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [points, setPoints] = useState('');

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

// if else statement to render profile

  return(
    <>
      <section className="profile-head">
        <h1 style={{ padding: '20px' }}>{user.userName}'s Profile</h1>
        <div className="profile-icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
          <img src={userIcon} alt="User Icon" style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{user.firstName}{user.lastName}</p><br />
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{user.email}</p><br />
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{user.birthDate}</p><br />
        </div>
        <div className="profile-points" style={{ padding: '20px', textAlign: 'center' }}>
          <h3>Current Points</h3>
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{points}</p>
        </div>
        <div className="quiz-prompt" style={{ padding: '20px'}}>
            <h3>Earn points by taking a <NavLink to="/quiz">Quiz</NavLink></h3><br />
        </div>
      </section>
      <section className="profile-foot" style={{ padding: '20px' }}>
        <h3>Tell us how you saved clothing from the landfill:</h3>
        <form onSubmit={handleFormSubmit}>
          <textarea
            value= {comment}
            onChange= {handleInputChange}
            placeholder= "Write your comment here..."
            rows= "4"
            style= {{ width: '100%', marginBottom: '10px' }}
          />
          <button type="submit" style={{ padding: '10px 20px' }}>Submit</button>
        </form>
        <div className="profile-feed" style={{ marginTop: '20px' }}>
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
      </section>
  </>
  )
}
export default Profile