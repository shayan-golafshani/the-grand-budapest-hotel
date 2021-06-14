// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/hungary.png'
import './images/the-grand-budapest-hotel.png'
import './images/junior suite.png'
import './images/suite.png'
import './images/residential suite.png'
import './images/single room.png'

import { retrieveData } from './apiCalls';
import Customer from './classes/Customer';

console.log('This is the JavaScript entry file - your code begins here.');

//Put query-selectors here
import { 
  totalSpent,
  guestName,
  roomSelectionForm,
  displayRoomDetails,
  calendar,
  roomDropDown,
  renderUserInfo,
} from './domUpdates';

//put event listeners on here. 

window.onload = startUp;
let startUpData = [];

function startUp() {
  retrieveData(1)
    .then(promise => {
      let customers = promise[0];
      let currCustomer = promise[1];
      let rooms = promise[2];
      let bookings = promise[3];
      startUpData = [customers, currCustomer, rooms, bookings];
      //console.log(promise);
      currCustomer = new Customer(currCustomer);

      //import render info here...>>>>
      renderUserInfo(currCustomer, bookings, rooms);
    }).catch(err => console.error("Error is happening scripts", err));
}
// calendar.addEventListener('change', () => {
// //   e.preventDefault();
//   //startUpData = [customers, currCustomer, rooms, bookings];
//   console.log("YOU CHANGED THE BOOKING DATE MATE!");
//   //   let currCustomer = new Customer(startUpData[1]);
//   //   let bookings = startUpData[3];
//   //   let rooms = startUpData[2];

//   //   displayRoomDetails.innerHTML = "";


// //   currCustomer.filterRoomAvailabilityByDate(calendar.value, bookings.bookings);
// //   currCustomer.getAvailableRoomDetails(rooms.rooms)
// //     .forEach((roomDetail, index) => {
// //       displayRoomDetails.innerHTML += `
// //         <div class="grid-item grid-item-${index}">
// //         <p class="room-number"> Room number: ${roomDetail.number}</p>
// //         <img class=room-image" src="./images/${roomDetail.roomType}.png" alt="This is a ${roomDetail.roomType}">
// //         <p class="room-type">Room type: ${roomDetail.roomType}</p>
// //         <p class="bidet-status"> It is ${roomDetail.bidet} that this room includes life-changing bidet. </p>
// //         <p class="bed-size">There are ${roomDetail.numBeds} ${roomDetail.bedSize}-sized bed. </p>
// //         <p class="room-cost">Total: ${roomDetail.costPerNight * 100} Forints</p>
// //         <button id="booking-button">Book Now!</button>
// //     </div>
// //         `
// //     });
// });

// roomDropDown.addEventListener('change', (event) => {

//   let currCustomer = new Customer(startUpData[1]);
//   let bookings = startUpData[3];
//   let rooms = startUpData[2];

//   displayRoomDetails.innerHTML = "";


//   currCustomer.filterRoomAvailabilityByDate(calendar.value, bookings.bookings);
//   currCustomer.filterRoomsByRoomType(rooms.rooms, roomDropDown.value)
//     .forEach((roomDetail, index) => {
//       displayRoomDetails.innerHTML += `
//       <div class="grid-item grid-item-${index}">
//       <p class="room-number"> Room number: ${roomDetail.number}</p>
//       <img class=room-image" src="./images/${roomDetail.roomType}.png" alt="This is a ${roomDetail.roomType}">
//       <p class="room-type">Room type: ${roomDetail.roomType}</p>
//       <p class="bidet-status"> It is ${roomDetail.bidet} that this room includes life-changing bidet. </p>
//       <p class="bed-size">There are ${roomDetail.numBeds} ${roomDetail.bedSize}-sized bed. </p>
//       <p class="room-cost">Total: ${roomDetail.costPerNight * 100} Forints</p>
//       <button id="booking-button">Book Now!</button>
//   </div>
//       `
//     });
