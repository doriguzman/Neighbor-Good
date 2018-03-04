import React, { Component } from 'react';
// import Map from './map'
import { Link } from 'react-router-dom'

const styles = {
  container: {
    height: "20em",
    width: '14em',
    display: 'inline-block',
    padding: '2em', 
    verticalAlign:'top'
  },
  img: {
    height: "10em",
    borderRadius: '8em'
  },
  bottom:{
  
      position:'absolute',
      bottom:'0',
      width:'100%',
      height:'60px',
   
  }
 
};

const UserStory = ({ users }) => {
  return (
    <div>
     
      {users.map(users =>
  
        <div class='userDiv' style={styles.container}>
          <img class='userImage' src={users.image} style={styles.img} />
          <p class='userStory'> {users.user}{users.story}{users.story2} </p>
          {users.user ? <p>Are you {users.user}? </p> :''}
        </div>
      )
      }
      
      {/* <h3 style={styles.bottom}>Want to report an issue in your neighborhood? <a href='http://www1.nyc.gov/311/index.page'> Click Here</a></h3> */}
    </div>
  )
}
//<Link> </Link>
export default UserStory; 