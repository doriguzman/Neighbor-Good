import React from 'react'
import axios from 'axios'
import ComplaintInfo from './complaintInfo'
import { Link, Route, Switch } from 'react-router-dom'
import '../CSS/Feed.css'

class Feed extends React.Component {
    constructor() {
        super();
        this.state = {
            feed: [],
            userInput: '',
            message: '',
            clicked: false
        }
        this.filtered = []
        this.count = 0

    }

    componentDidMount() {
        axios
            .get(`https://data.cityofnewyork.us/resource/fhrw-4uyv.json?$$app_token=YCxIsYgQo0t4M310jwJdkoMpC`)
            .then(res => {
                this.setState({
                    feed: res.data.filter(complaint => complaint.incident_zip && complaint.incident_address && complaint.complaint_type),
                })
            })
            .catch(err => {
                console.log(`err fetching feed`, err)
            })
    }

    handleUserInput = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }


    //     removeDuplicatesObj = (arr) => {
    //         var newArr = []
    //         for(var i = 0; i <= arr.length; i++) {
    //           if(typeof arr[i] === 'object') {
    //               if(!newArr.includes(arr[i].complaint_type)){
    //                   c
    //               }
    //         }  
    //     }
    //     console.log(`newArr`, newArr)
    //     return newArr
    // }

    removeDuplicatesV2 = (arr) => {
        let output = {};
        for (let i = 0; i < arr.length; i++) {
            let ltr = arr[i].complaint_type;
            if (output[ltr]) {
                output[ltr] += 1;
            } else {
                output[ltr] = 1;
            }
        }
        return output
    }





    handleSubmit = (e) => {
        const { userInput } = this.state
        console.log(`userrrrr`, userInput)
        if (userInput.length !== 5 || isNaN(userInput)) {
            this.setState({
                message: 'Please enter 5 numbers',

            })
        } else {
            axios
                .get(`https://data.cityofnewyork.us/resource/fhrw-4uyv.json?$$app_token=YCxIsYgQo0t4M310jwJdkoMpC&$where=incident_zip='${userInput}'&$limit=200&$order=created_date DESC`)
                .then(res => {
                    console.log(`resawrgargwa`, res)
                    this.setState({
                        feed: res.data.filter(complaint => complaint.incident_zip && complaint.incident_address && complaint.complaint_type),
                        message: '',
                        clicked: true
                    })
                })
                .catch(err => {
                    console.log(`err in handle submit`, err)
                    this.setState({
                        message: 'Please enter a zip code'
                    })
                })
        }

    }

    render() {
        const { feed, userInput, message, clicked } = this.state
        var keys = Object.keys(this.removeDuplicatesV2(feed))
        var values = Object.values(this.removeDuplicatesV2(feed))

        console.log(`feedfiltereds`, this.removeDuplicatesV2(feed))
        return (
            <div id='totalFeed'>
                <div id='feedImage' > </div>
                <div id="feed">

                    <h1 id='feedTitle'> Most Recent Complaints</h1>
                    <div id='streetEasy'>
                        {clicked ? <a href={`https://streeteasy.com/for-sale/nyc/status:open%7Czip:${userInput}?refined_search=true`} target="_blank">Find apartments On StreetEasy!</a> : ''}
                    </div>
                    <br />
                    <br />
                    <div id='zip-code'>
                    Enter a Zip Code: {" "}
                    <input id='input'
                        type="text"
                        value={userInput}
                        onChange={this.handleUserInput}
                        id="inputBox"
                        placeholder=" eg. 10469"
                    />
                    
                    <button id='feedSubmit' onClick={this.handleSubmit}>Submit</button>
                    </div>
                    {message}

                    <br />
                    <br />
                    <ul id="feedList">
                        {keys.map((key, index) =>
                         <li>Complaint:{" "}{key} <br /> Number of Complaints:{" "}{values[index]}
                        
                             < hr />
                             </li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Feed





// import React from 'react'
// import axios from 'axios'
// import ComplaintInfo from './complaintInfo'
// import { Link, Route, Switch } from 'react-router-dom'
// import '../CSS/Feed.css'

// class Feed extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             feed: [],
//             userInput: '',
//             message: ''
//         }
//         this.filter = []
//         this.count = 0

//     }

//     componentDidMount() {
//         axios
//             .get(`https://data.cityofnewyork.us/resource/fhrw-4uyv.json?$$app_token=YCxIsYgQo0t4M310jwJdkoMpC`)
//             .then(res => {
//                 this.setState({
//                     feed: res.data.filter(complaint => complaint.incident_zip && complaint.incident_address),
//                     filtered: res.data.filter(complaint => complaint.incident_zip && complaint.incident_address)
//                 })
//             })
//             .catch(err => {
//                 console.log(`err fetching feed`, err)
//             })
//     }

//     handleUserInput = (e) => {
//         this.setState({
//             userInput: e.target.value
//         })
//     }

//     handleSubmit = (e) => {
//         const { userInput } = this.state
//         console.log(`userrrrr`,userInput)
//         if(userInput.length !== 5 || isNaN(userInput)) {
//             this.setState({
//                 message: 'Please enter 5 numbers'
//             })
//         } else {
//             axios
//             .get(`https://data.cityofnewyork.us/resource/fhrw-4uyv.json?$$app_token=YCxIsYgQo0t4M310jwJdkoMpC&$where=incident_zip='${userInput}'&$limit=200&$order=created_date DESC`)
//             .then(res => {
//                 this.setState({
//                     feed: res.data.filter(complaint => complaint.incident_zip && complaint.incident_address),
//                     message: ''
//                 })
//             })
//             .catch(err => {
//                 console.log(`err in handle submit`, err)
//                 this.setState({
//                     message: 'Please enter a zip code'
//                 })
//             })
//         }

//     }

//     render() {
//         const { feed, userInput, message } = this.state
//         console.log(`feed`, feed)
//         return (
//             <div id="feed">
//                 <h1>Most Recent Complaints</h1>
//                 <a href={`https://streeteasy.com/for-sale/nyc/status:open%7Czip:${userInput}?refined_search=true`} target="_blank">Find apartments On StreetEasy!</a>
//                 <br />
//                 Enter a Zip Code: {" "}
//             <input
//                     type="text"
//                     value={userInput}
//                     onChange={this.handleUserInput}
//                     id="inputBox"
//                     placeholder="eg. 10469"
//                 />
//             <button onClick={this.handleSubmit}>Submit</button>
//             {message}
//                 <ul id="feedList">

//                     {feed.map(comp => (
//                         <li>
//                             Type: {comp.complaint_type}
//                             <br />
//                              Date: {comp.created_date}
//                             < hr />
//                         </li>
//                     ))}
//                 </ul>

//             </div>
//         )
//     }
// }

// export default Feed
