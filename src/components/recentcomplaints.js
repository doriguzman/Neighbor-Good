import React from 'react';
import axios from 'axios';

class RecentComplaints extends React.Component {
    constructor() {
        super();
        this.state = {
            complaints: null 
        }
    }

componentDidMount() {
    axios
        .get("https://data.cityofnewyork.us/resource/fhrw-4uyv.json")
        .then(res => {
            console.log(`res.data`)
            this.setState({
                complaints: res.data.filter(complaint => complaint.location && complaint.location.coordinates),

            });
        })
        .catch(err => {
            console.log("err getting complaints. Check componentDidMount", err);
        });
}

    render() {
        const {complaints}=this.state
        return (
            <div>
                testing
                    </div>
        )
}
}

export default RecentComplaints;