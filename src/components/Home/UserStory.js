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
      <div >
    {users.map(users=> 
    <div class='userDiv' style={styles.container}>
            <p class='userStory'> {users.user}{users.story} </p>
            <img class='userImage' src={users.image}  style={styles.img}/>
           {users.user ? <Link to =''> Are you {users.user}?</Link> : <p>I am none of these! <a href='localhost/neighborgood/map'> Go to Map!</a> </p> }
    
        </div>
        )
    }
    </div>
)
}
//<Link> </Link>
export default UserStory; 