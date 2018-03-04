import React from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import ComplaintMarker from './complaintMarker';
import RecentComplaints from './recentcomplaints';

const defaultOptions = {
    defaultCenter: { lat: 40.7128, lng: -73.9 },
    defaultZoom: 10
};

class Map extends React.Component {
    constructor() {
        super();
        this.state = {
            mapOptions: defaultOptions,
            complaints: [],
            image: '',
            filtered: [],
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
            }
        
        }
        this.agencies = ['', 'Department of Housing Preservation and Development', 'New York City Police Department', 'Department of Transportation',
            'Department of Environmental Protection',
            'Department of Parks and Recreation', 'Department of Buildings', 'Department of Health and Mental Hygiene', 'Department of Sanitation']
        this.boroughs = ['BRONX', 'BROOKLYN', 'QUEENS', 'MANHATTAN', 'STATEN_ISLAND']
        this.months = ['', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
        this.incidents = ["Illegal_Parking", "Street_Condition", "Request_Large_Bulky_Item_Collection", "Graffiti", "Noise"]
    };


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

    onMapChange = options => {
        console.log(options)
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
            Boroughs: {...Boroughs, [e.target.name]: e.target.checked },
        })
    }
    
    handleComplaintSelect = (e) => {
        const { ComplaintsObj } = this.state
        this.setState({
            ComplaintsObj: {...ComplaintsObj, [e.target.name]: e.target.checked },
        })
    }


    filteredBoroughs = (complaint) => {
        const { Boroughs } = this.state
        // if every value is false
            if(Object.values(Boroughs).every(x => !x)) {
                return true
            } else {
                return Boroughs[complaint.borough.replace(/\s/g, '_')]
                
            }
    }

    
    filterSelectedComplaint = (complaint) => {
        const { ComplaintsObj } = this.state
        // if every value equals false
        if(Object.values(ComplaintsObj).every(x => !x)) {
            return true
        } else {
            return ComplaintsObj[complaint.complaint_type.replace(/\s/g, '_')]            
        }
    }
     
    filteredComplaints = (complaint) => {
          return this.filteredBoroughs(complaint) && this.filterSelectedComplaint(complaint)
    }


    render() {
        const { complaints, mapOptions, filtered, selectAgency, selectBorough, selectMonth, BRONX } = this.state;
        console.log(`complaints`, this.state.ComplaintsObj)

        return (
            <div id="map-container">
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
                            complaint={complaint}
                            image={`https://i.pinimg.com/originals/53/ec/92/53ec929800d1282c9ef59cd27c8c45d6.jpg`}
                            lat={complaint.location.coordinates[1]}
                            lng={complaint.location.coordinates[0]}
                            onComplaintClick={() => this.handleComplaintClick(complaint)}
                        />
                    ))}
                </GoogleMapReact>
                <ul>
                    SELECT A BOROUGH: {" "}
                    {this.boroughs.map(borough => (
                        <li>
                            {borough}
                            <input
                                name={borough}
                                type="checkbox"
                                checked={this.state.Boroughs[borough]}
                                onChange={this.handleBoroughSelect}
                            />
                        </li>
                    ))}
                </ul>
                <ul>
                    SELECT A COMPLAINT: {" "}
                    {this.incidents.map(incident => (
                        <li>
                            {incident}
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