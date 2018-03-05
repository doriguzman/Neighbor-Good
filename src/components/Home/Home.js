import React, { Component } from 'react';
import UserStory from './UserStory';
import '../../CSS/Home.css'

const styles = {

  bottom: {

    position: 'absolute',
    // bottom:'0px',
    width: '100%',
    height: '60px',

  }
};
class Home extends React.Component {
  constructor() {
    super();
    this.users = [
      {
        user: 'Olga',
        story: ` is getting older. 
        She wanted to be able to walk around
        and enjoy her day peacefully. 
        She used our app to find 
        a neighborhood 
        that was clean and quiet!`,
        filterComplaint: 'Sanitation',
        image: 'https://www.wpclipart.com/cartoon/people/women_cartoons/old_lady_cartoon.png'
      },

      {
        user: 'Quavo',
        story: ` is a musician.
         He wanted to be able to
         practice his craft 
         without worrying about noise 
         sensitive neighbors. 
         He used our app to find a 
         neighborhood that 
         had few to no noise complaints!`,
        filterComplaint: '',
        image: 'https://ih0.redbubble.net/image.402188121.9994/flat,800x800,070,f.u1.jpg'
      },

      {
        user: 'Adam',
        story: ` is an avid sports car owner and wanted his cars to avoid possible damage.
        He used our app to find a neighborhood with minimal road issues! `,
        story2: <p></p>,
        filterComplaint: '',
        image: 'https://previews.123rf.com/images/deviyanthi79/deviyanthi791404/deviyanthi79140400037/27968665-simple-cartoon-of-a-businessman-driving-a-sport-car.jpg'
      },
      {
        user: '',
        story: <p><a href='localhost/neighborgood/map'>Go to the map to find out!</a> </p>,
        image: 'http://www.bamradionetwork.com/images/easyblog_images/4240/2e1ax_elegantwhite_entry_thinking.jpg'
      }

    ]
  }



  render() {
    return (
<div>   
      <div className='homeback'>
          <div id='title'>
          <div id='middleOfHome'>
          <h1> <strong>Welcome to NeighborGood </strong> </h1>
          <h3><strong> We want to help find the right neighborhood for you! </strong></h3>
         </div>
          </div>
      </div>

      <div id='allStories'>
        <UserStory users={this.users} />

     </div>
     <div>
      <h3 class='endbanner' >Want to report an issue in your neighborhood? <a href='http://www1.nyc.gov/311/index.page'> Click Here</a></h3>
     </div>
     </div>
    )
  }

}

export default Home; 