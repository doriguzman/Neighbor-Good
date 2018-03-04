import React from 'react'
import axios from 'axios'
import ComplaintInfo from './complaintInfo'
import { Link, Route, Switch } from 'react-router-dom'

class Feed extends React.Component {
    constructor() {
        super();
        this.state = {
            feed: [],
            userInput: '',
            message: ''
        }
    }

    componentDidMount() {
        axios
            .get(`https://data.cityofnewyork.us/resource/fhrw-4uyv.json?$$app_token=YCxIsYgQo0t4M310jwJdkoMpC`)
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

    handleSubmit = (e) => {
        const { userInput } = this.state
        console.log(`userrrrr`,userInput)
        if(userInput.length !== 5 || isNaN(userInput)) {
            this.setState({
                message: 'Please enter 5 numbers'
            })
        } else {
            axios
            .get(`https://data.cityofnewyork.us/resource/fhrw-4uyv.json?$$app_token=YCxIsYgQo0t4M310jwJdkoMpC&$where=incident_zip='${userInput}'&$limit=200&$order=created_date DESC`)
            .then(res => {
                console.log(`resawrgargwa`, res)
                this.setState({
                    feed: res.data.filter(complaint => complaint.incident_zip && complaint.incident_address),
                    message: ''
                })
            })
            .catch(err => {
                console.log(`err in handle submit`, err)
                this.setState({
                    message: 'Please enter a zip code'
                })
            })
        }
        
    }

    render() {
        const { feed, userInput, message } = this.state
        console.log(`feed`, feed)
        return (
            <div id="feed">
                <h1>Most Recent Complaints</h1>
                <a href={`https://streeteasy.com/for-sale/nyc/status:open%7Czip:${userInput}?refined_search=true`} target="_blank">Find apartments</a>
                <br />
                Enter a Zip Code: {" "}
            <input
                    type="text"
                    value={userInput}
                    onChange={this.handleUserInput}
                    id="inputBox"
                    placeholder="eg. 10469"
                />
            <button onClick={this.handleSubmit}>Submit</button>
            {message}
                <ul id="feedList">
                    {feed.map(comp => (
                        <li>
                            {ComplaintInfo(comp)}
                            < hr />
                        </li>
                    ))}
                </ul>
                
            </div>
        )
    }
}

export default Feed