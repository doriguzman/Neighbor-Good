import React from 'react'



const Key = ({ }) => {
    const pictures = [
        {
            description: "Illegal Parking",
            image: "https://marketplace.canva.com/MACFv2ngAV8/1/thumbnail_large/canva-no-parking-signal-MACFv2ngAV8.png"
        },
        {
            description: "Street Condition",
            image: "https://www.clker.com/cliparts/1/c/2/a/11970890841431512955Milkman666_Cone.svg.svg"
        },
        {
            description: "Request Large Bulky Item Collection",
            image: "http://moziru.com/images/trash-clipart-cartoon-20.png"

        },
        {
            description: "Graffiti",
            image: "http://moziru.com/images/graffiti-clipart-graffiti-spray-can-clipart-2.png"
        },
        {
            description: "Taxi Complaint",
            image: "http://coloringhub.com/wp-content/uploads/2014/01/taxi-vector.png"
        },
        {
            description: "Rodent",
            image: "http://res.freestockphotos.biz/pictures/15/15482-illustration-of-a-cartoon-rat-pv.png"
        },
        {
            description: "Noise",
            image: "http://www.clker.com/cliparts/2/4/3/5/1216139647393803475qubodup_Cartoon_speaker_remix.svg.hi.png"
        },
        {
            description: "Damaged Tree",
            image: "http://www.clker.com/cliparts/1/3/b/6/12820716431370137436broken%20tree.svg.hi.png"
        },
        {
            description: "Other",
            image: "https://i.pinimg.com/originals/53/ec/92/53ec929800d1282c9ef59cd27c8c45d6.jpg"
        }

    ]
    return (
        <div>
            <ul id="key">
                {pictures.map(pic => <li>
                    <img
                        src={pic.image}
                        alt="key pictures"
                        width='10'
                        height='15'
                    />
                    {pic.description}
                </li>)}

            </ul>
        </div>
    )
}


export default Key