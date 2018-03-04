import React from 'react'

const ComplaintInfo = (complaint) => {
    return (
        <div>
            Complaint type: {complaint.complaint_type}
            <br />
            Agency Name: {complaint.agency_name}, 
            <br />
            Location: {complaint.incident_address},{complaint.park_borough}, NY{" "}{complaint.incident_zip}
            <br />
            Description: {complaint.descriptor}
            </div>
    )
}
export default ComplaintInfo