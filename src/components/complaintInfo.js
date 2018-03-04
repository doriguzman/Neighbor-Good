import React from 'react'

const ComplaintInfo = (complaint) => {
    var timestamp = Date.parse(complaint.created_date);
    var date = new Date(timestamp);
    return (
        <div>
            <p>Complaint type: {complaint.complaint_type} </p>
            <p>Agency Name: {complaint.agency_name}</p>
            <p> Location: {complaint.incident_address.slice(1)},{complaint.park_borough}, NY{" "}{complaint.incident_zip}</p>
            <p>Description: {complaint.descriptor} </p>
            <p> Date Issued: {date} </p>
            </div>
    )
}
export default ComplaintInfo