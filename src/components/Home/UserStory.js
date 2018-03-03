import React, { Component } from 'react';
// import Map from './map'
import {Link} from 'react-router-dom'

const styles = {
    container: {
      height: "20em",
      width: '14em',
      display:'inline-block', 
      padding:'2em'
    },
    img: {
      height: "10em"
    }
  };

const UserStory = ({ users }) => {
  return(
      <div id='stories' >
    {users.map(users=> 
    <div class='userDiv' style={styles.container}>
            <p class='userStory'> {users.user}{users.story} </p>
            <img class='userImage' src={users.image}  style={styles.img}/>
           {users.user ?  <p>Are you {users.user}? </p>: <p><a href='localhost/neighborgood/map'>Go to the map to find out!</a> </p> }
    
        </div>
        )
    }
    </div>
)
}
//<Link> </Link>
export default UserStory; 