import React from 'react'

const ComplaintInfo = (complaint) => {
    return (
        <div id='complaintinfo'>
            <p id='p1'>Complaint type: {complaint.complaint_type} </p>
            <p>Agency Name: {complaint.agency_name}</p>
            <p> Location: {complaint.incident_address.slice(1)},{complaint.park_borough}, NY{" "}{complaint.incident_zip}</p>
            <p>Description: {complaint.descriptor} </p>
            <p> Date Issued: {complaint.created_date.slice(0,10)} </p>
            </div>
    )
}





export default ComplaintInfo
