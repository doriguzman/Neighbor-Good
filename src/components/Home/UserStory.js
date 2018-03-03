import React, { Component } from 'react';
// import Map from './map'

let style={
    
}

const UserStory = ({ users }) => {
  return(
      <div >
    {users.map(users=> 
    <div class='userDiv'>
            <p class='userStory'> {users.user}{users.story} </p>
            <img class='userImage' src={users.image} />
            <p> Are you {users.user}? <a> </a></p>
        </div>
        )
    }
    </div>
)
}

export default UserStory; 