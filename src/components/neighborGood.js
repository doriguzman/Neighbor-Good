import React from 'react'
import axios from 'axios'
import { Link, Route, Switch } from 'react-router-dom'
import Map from './map'
import Home from './Home/Home'
import ComplaintInfo from './complaintInfo'
import RecentComplaints from './recentcomplaints';



class NeighborGood extends React.Component {
    constructor() {
        super();
        this.state = {
            userSelects: '',
            SelectedComplaint: null
        }
    }


    handleComplaint = (complaint) => {
        this.setState({
            SelectedComplaint: complaint
        })
    }


    

    handleMap = () => {
        const { SelectedComplaint } = this.state
        return (
            <div>
                <h1 className="title">311's Reported Complaints</h1>
                {SelectedComplaint ? ComplaintInfo(SelectedComplaint) : <strong> Choose a complaint </strong>}
                <Map onComplaintClick={this.handleComplaint} />
                <br />
            </div>
        )
    }

    handleHome = () => {
        return (
          <Home />
        )
    }

    handleRecentComplaints = () => {
        return (
            <RecentComplaints />
        )
    }

    render() {
        const { SelectedComplaint } = this.state
        console.log(`yay i  made it `, SelectedComplaint)
        return (
            <div >
                <Switch>
                    <Route exact path='/NeighborGood' render={this.handleHome} />
                    <Route path='/NeighborGood/map' render={this.handleMap} />
                    <Route path='/NeighborGood/recentcomplaints' render={this.handleRecentComplaints} />
                </Switch>
            </div>
        )
    }
}


export default NeighborGood