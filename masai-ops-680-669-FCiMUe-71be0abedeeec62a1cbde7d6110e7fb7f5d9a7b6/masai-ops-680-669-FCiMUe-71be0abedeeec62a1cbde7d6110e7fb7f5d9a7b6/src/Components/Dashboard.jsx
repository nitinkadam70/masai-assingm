import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMeetupData } from '../Redux/AppReducer/action';

export default function Dashboard() {
  const navigate = useNavigate();

  const { meetupsData, errorText, isLoading, isAuth } = useSelector(
    (store) => store.AppReducer
  );

  const dispatch = useDispatch();

  const handleShowMyEvents = () => {
    if (isAuth) {
      navigate('/home');
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    dispatch(getMeetupData());
  }, []);

  return (
    <div>
      <div className="nav">
        <button onClick={handleShowMyEvents} className="my-events">
          {' '}
          Show My Events
        </button>
        <div>
          <button onClick={() => navigate('/login')}>Login</button>
          <button
            onClick={() => navigate('/register')}
            className="register"
          >
            Register
          </button>
        </div>
      </div>
      <h2>Upcoming Events</h2>
      <div className="meetups_wrapper">
        {meetupsData &&
          meetupsData.map((elem) => (
            <div key={elem.id} className="mini-container">
              <img
                src={elem.image}
                className="image"
                alt={elem.title}
              />
              <h4 className="title">{elem.title} </h4>
              <div className="location"> {elem.location}</div>
              <div className="date"> {elem.date}</div>
              <div className="time"> {elem.time}</div>
              <div className="theme">{elem.theme} </div>
              <div className="description">{elem.description}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
