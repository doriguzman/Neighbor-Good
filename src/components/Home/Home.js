import React, { Component } from 'react';
import UserStory from './UserStory';

class Home extends React.Component{
  constructor(){
    super();
    this.users=[
      {
        user:'Olga', 
        story:` is getting older. She wanted to be able to walk around
        and enjoy her day peacefully. She used our app to find a neighborhood that was clean and quiet!`, 
        filterComplaint: 'Sanitation', 
        image:'https://www.wpclipart.com/cartoon/people/women_cartoons/old_lady_cartoon.png'
      }, 

      {
        user:'Quavo', 
        story:' is a musician. He wanted to be able to practice his craft without worrying about noise sensitive neighbors. He used our app to find a neighborhood that had few to no noise complaints!', 
        filterComplaint: '', 
        image:'https://ih0.redbubble.net/image.402188121.9994/flat,800x800,070,f.u1.jpg'
      },
      {
        user:'Adam', 
        story:` is an avid sports car owner and wanted his cars to avoid possible damage.
        He used our app to find a neighborhood with minimal road issues! `, 
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
    <span>Want to report an issue in your neighborhood? <a href='http://www1.nyc.gov/311/index.page'> Click Here</a></span>



      </div>
  )
}

}


export default Home; 