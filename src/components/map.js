import React from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import ComplaintMarker from './complaintMarker'
import ComplaintPicture from './complaintPicture'
import '../CSS/Map.css'

const defaultOptions = {
    defaultCenter: { lat: 40.7128, lng: -73.9 },
    defaultZoom: 11
};

class Map extends React.Component {
    constructor() {
        super();
        this.state = {
            mapOptions: defaultOptions,
            complaints: [],
            image: '',
            selectedComplaintId: null,
            Boroughs: {
                BRONX: false,
                BROOKLYN: false,
                QUEENS: false,
                MANHATTAN: false,
                STATEN_ISLAND: false,
            },
            ComplaintsObj: {
                Illegal_Parking: false,
                Street_Condition: false,
                Request_Large_Bulky_Item_Collection: false,
                Graffiti: false,
                Noise: false,
                Taxi_Complaint: false,
                Rodent: false,
            }

        }
        this.boroughs = ['BRONX', 'BROOKLYN', 'QUEENS', 'MANHATTAN', 'STATEN_ISLAND']
        this.incidents = ["Illegal_Parking", "Street_Condition", "Request_Large_Bulky_Item_Collection", "Graffiti", "Taxi_Complaint", "Rodent", "Noise_-_Residential", "Noise_-_Vehicle", "Noise_-_Commercial", "Damaged_Tree"]
    };


    componentDidMount() {
        axios
            .get("https://data.cityofnewyork.us/resource/fhrw-4uyv.json?$$app_token=YCxIsYgQo0t4M310jwJdkoMpC&$limit=5000")
            .then(res => {
                console.log(`res.dataaaaa`, res.data)
                this.setState({
                    complaints: res.data.filter(complaint => complaint.location && complaint.location.coordinates
                        && complaint.incident_address && complaint.park_borough),
                });
            })
            .catch(err => {
                console.log("err getting complaints. Check componentDidMount", err);
            });
    }

    onMapChange = options => {
        this.setState({
            mapOptions: options
        });
    };

    handleComplaintClick = complaint => {
        this.props.onComplaintClick(complaint);
        this.setState({ selectedComplaintId: complaint.unique_key });
    };

    handleBoroughSelect = (e) => {
        const { Boroughs } = this.state
        this.setState({
            Boroughs: { ...Boroughs, [e.target.name]: e.target.checked },
        })
    }

    handleComplaintSelect = (e) => {
        const { ComplaintsObj } = this.state
        this.setState({
            ComplaintsObj: { ...ComplaintsObj, [e.target.name]: e.target.checked },
        })
    }


    filteredBoroughs = (complaint) => {
        const { Boroughs } = this.state
        // if every value is false
        if (Object.values(Boroughs).every(x => !x)) {
            return true
        } else {
            return Boroughs[complaint.borough.replace(/\s/g, '_')]
        }
    }


    filterSelectedComplaint = (complaint) => {
        const { ComplaintsObj } = this.state
        // if every value equals false
        if (Object.values(ComplaintsObj).every(x => !x)) {
            return true
        } else {
            return ComplaintsObj[complaint.complaint_type.replace(/\s/g, '_')]
        }
    }

    filteredComplaints = (complaint) => {
        return this.filteredBoroughs(complaint) && this.filterSelectedComplaint(complaint)
    }


    render() {
        const { complaints, mapOptions, selectedComplaintId } = this.state;
        console.log(this.state.ComplaintsObj)
        return (
            <div id="map-container">
                <div id='map'>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "AIzaSyBcCGZr6R8jHxcmRoMtwD6vkUDAw-ceXDU"
                    }}
                    onChange={this.onMapChange}
                    {...defaultOptions}
                    {...mapOptions}
                >
                    {complaints.filter(this.filteredComplaints).slice(0, 501).map(complaint => (
                        <ComplaintMarker
                            selected={complaint.unique_key === selectedComplaintId}
                            complaint={complaint}
                            image={ComplaintPicture(complaint)}
                            lat={complaint.location.coordinates[1]}
                            lng={complaint.location.coordinates[0]}
                            onComplaintClick={() => this.handleComplaintClick(complaint)}
                        />
                    ))}
                </GoogleMapReact>
                </div>
                <div id='checklist'>
                <ul >
                    <strong>SELECT A BOROUGH: </strong> {" "}
                    <br />
                    {this.boroughs.map(borough => (
                        <li >
                            {borough.split('_').join(' ')}
                            <input
                                name={borough}
                                type="checkbox"
                                checked={this.state.Boroughs[borough]}
                                onChange={this.handleBoroughSelect}
                            />
                        </li>
                    ))}
                </ul>
                <ul >
                   <strong> SELECT A COMPLAINT: </strong> {" "}
                    {this.incidents.map(incident => (
                        <li>
                            {incident.split('_').join(' ')}
                            <input
                                name={incident}
                                type="checkbox"
                                checked={this.state.ComplaintsObj[incident]}
                                onChange={this.handleComplaintSelect}
                            />
                        </li>
                    ))}
                </ul>
                </div>

            </div>
        );
    }
}

export default Map;







// selectAgency: '',
// selectBorough: '',
// selectMonth: '',



// handleSelectBorough = (e) => {
//     const { complaints, selectAgency } = this.state
//     this.setState({
//         selectBorough: e.target.value,
//         filtered: complaints.filter(complaint => complaint.agency_name.includes(selectAgency) && complaint.borough.includes(e.target.value))
//     })
// }

// handleSelectMonth = (e) => {
//     const { complaints, selectAgency, selectBorough } = this.state
//     this.setState({
//         selectMonth: e.target.value,
//         filtered: complaints.filter(complaint => complaint.agency_name.includes(selectAgency) && complaint.borough.includes(selectBorough) && complaint.created_date.split('-')[1].includes(e.target.value))
//     })
// }



// handleSelectAgency = (e) => {
//     const { complaints, selectBorough } = this.state
//     this.setState({
//         selectAgency: e.target.value,
//         filtered: complaints.filter(complaint => complaint.agency_name.includes(e.target.value) && complaint.borough.includes(selectBorough))
//     })
// }






// Select an Agency: {" "}
// <select id="filter" onChange={this.handleSelectAgency} value={selectAgency}>
//     {this.agencies.map(opt =>
//         <option>{opt}</option>)}
// </select>
// <br />
// Select a borough: {" "}
// <select id='filter' onChange={this.handleSelectBorough} value={selectBorough} >
//     {this.boroughs.map(opt =>
//         <option>{opt}</option>)}
// </select>
// <br />
// Select a Month: {" "}
// <select id='filter' value={selectMonth} onChange={this.handleSelectMonth}>
//     {this.months.map(month => <option>{month}</option>)}
// </select>