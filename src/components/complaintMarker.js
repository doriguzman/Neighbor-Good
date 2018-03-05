import React from "react";
import ComplaintPicture from './complaintPicture'




const ComplaintMarker = ({ image, selected, onComplaintClick, complaint  }) => (
  <img 
    className={selected ? "complaint selected" : "complaint"}
    alt=""
    src={image}
    width="15"
    height='20'
    onClick={onComplaintClick}
  />
);

export default ComplaintMarker;

