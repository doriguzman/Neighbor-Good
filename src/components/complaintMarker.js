import React from "react";


const ComplaintMarker = ({ image, selected, onComplaintClick, complaint  }) => (
  <img 
    className={selected ? "complaint selected" : "complaint"}
    alt=""
    src={image}
    width='10'
    height='10'
    onClick={onComplaintClick}
  />
);

export default ComplaintMarker;

