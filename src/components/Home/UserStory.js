import React, { Component } from 'react';
// import Map from './map'
import { Link } from 'react-router-dom'

const styles = {
  container: {
    height: "20em",
    width: '14em',
    display: 'inline-block',
    padding: '2em'
  },
  img: {
    height: "10em",
    borderRadius: '8em'
  }
 
};

const UserStory = ({ users }) => {
  return (
    <div>
      {users.map(users =>
        <div class='userDiv' style={styles.container}>
          <img class='userImage' src={users.image} style={styles.img} />
          <pre class='userStory'> {users.user}{users.story} </pre>
          {users.user ? <p>Are you {users.user}? </p> : <p id='last'><a href='localhost/neighborgood/map'>Go to the map to find out!</a> </p>}
        </div>
      )
      }
    </div>
  )
}
//<Link> </Link>
export default UserStory; 