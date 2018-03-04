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
          <p class='userStory'> {users.user}{users.story} </p>
          {users.user ? <p>Are you {users.user}? </p> : <p><Link to='/NeighborGood/Map'>Go to the map to find out!</Link> </p>}
        </div>
      )
      }
    </div>
  )
}
//<Link> </Link>
export default UserStory; 