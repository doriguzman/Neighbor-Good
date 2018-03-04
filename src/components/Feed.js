import React from 'react'
import axios from 'axios'
import ComplaintInfo from './complaintInfo'


class Feed extends React.Component {
    constructor(){
        super();
        this.state = {
            feed: [],
            userInput: ''
        }
    }

    componentDidMount(){
        axios
        .get("https://data.cityofnewyork.us/resource/fhrw-4uyv.json")
        .then(res => {
         
            this.setState({
                feed: res.data.filter(complaint => complaint.incident_zip && complaint.incident_address)              
            })
        })
        .catch(err => {
            console.log(`err fetching feed`, err)
        })
    }

    handleUserInput = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }


    render(){
        const { feed, userInput } = this.state 
        console.log(`feed`,feed)
        return (
            <div>
            Enter a Zip Code:
            <input 
            type="text"
            value={userInput}
            onChange={this.handleUserInput}
            />
            <ul>
                {feed.filter(complaint => complaint.incident_zip.includes(userInput)).map(complaint => (
                    <li>
                       {ComplaintInfo(complaint)}
                       ------------------------------
                    </li>
                ))}
                </ul>
                </div>
        )
    }
}

export default Feed