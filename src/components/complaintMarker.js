import React from "react";


const ComplaintMarker = ({ image, selected, onComplaintClick, complaint  }) => (
  <img
    alt=""
    src={image}
    width='10'
    height='10'
    onClick={onComplaintClick}
  />
);

export default ComplaintMarker;

