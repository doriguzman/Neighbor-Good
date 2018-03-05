import React from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import ComplaintMarker from './complaintMarker'
import ComplaintPicture from './complaintPicture'
import '../CSS/Map.css'

import Key from './key'


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
        this.incidents = ["Illegal_Parking", "Street_Condition",  "Graffiti", "Taxi_Complaint", "Rodent", "Noise_-_Residential", "Noise_-_Vehicle", "Noise_-_Commercial", "Damaged_Tree", "Request_Large_Bulky_Item_Collection",]
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
            <div id='map-content'>
                <div id='map'>
                    <div id="googleMap">
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
                        <div id="key-component">
                            <Key />
                        </div>
                    </div>
                </div>
                <div id='checklist'>
                    <ul >
                        <strong class="selectHeader"> SELECT A BOROUGH: </strong> {" "}
                        {this.boroughs.map(borough => (
                            <li >
                                <input
                                    name={borough}
                                    type="checkbox"
                                    checked={this.state.Boroughs[borough]}
                                    onChange={this.handleBoroughSelect}
                                />
                                {borough.split('_').join(' ')}
                            </li>
                        ))}
                    </ul>

                    <ul>
                        <strong class="selectHeader"> SELECT A COMPLAINT: </strong> {" "}
                        {this.incidents.map(incident => (
                            <li>
                                <input
                                    name={incident}
                                    type="checkbox"
                                    checked={this.state.ComplaintsObj[incident]}
                                    onChange={this.handleComplaintSelect}
                                />
                                {incident.split('_').join(' ')}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Map;