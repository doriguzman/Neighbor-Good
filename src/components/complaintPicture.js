import React from 'react'


const ComplaintPicture = (complaint) => {
    console.log(`complaint`, complaint.complaint_type)
    switch (complaint.complaint_type) {
        case "Noise - Residential":
        case "Noise - Commercial":
        case "Noise - Vehicle":
            return "http://www.clker.com/cliparts/2/4/3/5/1216139647393803475qubodup_Cartoon_speaker_remix.svg.hi.png"
        case "Rodent":
            return "http://res.freestockphotos.biz/pictures/15/15482-illustration-of-a-cartoon-rat-pv.png"
        case "Taxi Complaint":
            return "http://coloringhub.com/wp-content/uploads/2014/01/taxi-vector.png"
        case "Graffiti":
            return "https://cdn.pixabay.com/photo/2016/12/28/07/46/graffiti-1935630_1280.png"
        case "Request Large Bulky Item Collection":
            return "http://moziru.com/images/trash-clipart-cartoon-20.png"
        case "Street Condition":
            return "https://www.clker.com/cliparts/1/c/2/a/1197089I0841431512955Milkman666_Cone.svg.svg.med.png"
        case "Illegal Parking":
            return "https://marketplace.canva.com/MACFv2ngAV8/1/thumbnail_large/canva-no-parking-signal-MACFv2ngAV8.png"
        case "Damaged Tree":
            return "http://www.clker.com/cliparts/1/3/b/6/12820716431370137436broken%20tree.svg.hi.png"
        default:
            return "https://i.pinimg.com/originals/53/ec/92/53ec929800d1282c9ef59cd27c8c45d6.jpg"
    }
}

export default ComplaintPicture