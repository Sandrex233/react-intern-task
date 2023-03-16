import React, { useState, useEffect } from 'react';
import axios from 'axios';

const User = () => {
  const [user, setUser] = useState(null);
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/api/users/${match.params.id}`)
      .then(res => {
        setUser(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/api/users/${match.params.id}/friends`)
      .then(res => {
        setFriends(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && user && (
        <>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <h2>Friends</h2>
          <ul>
            {friends.map(friend => (
              <li key={friend.id}>{friend.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default User;
