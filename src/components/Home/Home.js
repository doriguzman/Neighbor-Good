import React, { Component } from 'react';
import UserStory from './UserStory';

class Home extends React.Component{
  constructor(){
    super();
    this.users=[
      {
        user:'Olga', 
        story:` is getting old and she wants a clean neighborhood to enjoy! `, 
        filterComplaint: 'Sanitation', 
        image:'https://www.wpclipart.com/cartoon/people/women_cartoons/old_lady_cartoon.png'
      }, 

      {
        user:'Quavo', 
        story:' is a musician and wants a neighborhood where there are ', 
        filterComplaint: '', 
        image:'https://ih0.redbubble.net/image.402188121.9994/flat,800x800,070,f.u1.jpg'
      },
      {
        user:'Adam', 
        story:` is an avid sports car owner and wants his cars to avoid possible damage.
        He wants a neighborhood with the minimal road issues! `, 
        filterComplaint: '', 
        image:'https://previews.123rf.com/images/deviyanthi79/deviyanthi791404/deviyanthi79140400037/27968665-simple-cartoon-of-a-businessman-driving-a-sport-car.jpg'
      }, 
      {
        user:'',
        image: 'https://openclipart.org/image/2400px/svg_to_png/630/ryanlerch-thinkingboy-outline.png'
      }
      
    ]
    this.URL = {
      Info: 'http://www1.nyc.gov/311/index.page'
    }
  }

// handleClick = () => {
// this.setState = {
  
// }
// }

render(){
  return(
    <div>
    <h1> Welcome to NeighborGood! </h1>
    <UserStory users={this.users}/>
    <span>Want to report an issue in your neighborhood? Click <button onClick={(e) => this.URL}>Here</button></span>



      </div>
  )
}

}


export default Home; 