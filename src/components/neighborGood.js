import React from 'react'
import axios from 'axios'
import { Link, Route, Switch } from 'react-router-dom'
import Map from './map'
import Home from './Home/Home'
import ComplaintInfo from './complaintInfo'
import Feed from './Feed'
import './complaintMarker.css'



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
            <div id="mapPage">
                <div><h1 id="map-title">NeighborGood</h1></div>
                <div><Map onComplaintClick={this.handleComplaint} /></div>
                <div>{SelectedComplaint ? ComplaintInfo(SelectedComplaint) : <strong id='compDes'> Choose a complaint </strong>}</div>
                <br />
            </div>
        )
    }

    handleHome = () => {
        return (
          <Home />
        )
    }

    handleFeed = () => {
        return (
            
            <Feed />
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
                    <Route path='/NeighborGood/feed' render={this.handleFeed} />
                </Switch>
            </div>
        )
    }
}


export default NeighborGood