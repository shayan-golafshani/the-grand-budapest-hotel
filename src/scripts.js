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
let totalSpent = document.getElementById('totalSpent');
let guestName = document.getElementById('guestName');
let roomSelectionForm = document.getElementById('roomSelectionForm');
let calendar = document.getElementById('calendar');
let displayRoomDetails = document.getElementById('displayRoomDetails');
let roomDropDown = document.getElementById('roomDropDown');
//put event listeners on here. 

window.onload = startUp;
let startUpArr = [];

function startUp() {
  retrieveData(1)
    .then(promise => {
      let customers = promise[0];
      let currCustomer = promise[1];
      let rooms = promise[2];
      let bookings = promise[3];
      startUpArr = [customers, currCustomer, rooms, bookings];
      console.log(promise);
      currCustomer = new Customer(currCustomer);
      guestName.innerText = currCustomer.name;
      totalSpent.innerText = currCustomer.viewCustomerTotalSpending(bookings.bookings, rooms.rooms);
      currCustomer.bookings.forEach(booking => {
        roomSelectionForm.innerHTML += `
        <p> Room number ${booking.roomNumber}</p>
        <p>Booked on ${booking.date}</p>
        <hr>
        `    
      });
      currCustomer.filterRoomAvailabilityByDate(calendar.value, bookings.bookings);
      //SO here I invoke the function to get back the rooms by room type however, I 
      //realized that my get Available Room Details function only returns the 
      // rooms that are available filtered, by date, so I made a second version that
      //filters based on the this.availableRoomNumsByType

      //The next step would be to try and update the room details based on the the new
      //function

      //after that, I can add eventListeners on change, for the calendar
      //add event listener on change for the room type drop-down menu.
      // Then I could re-update the dom based on those
      
      
      //currCustomer.getAvailableRoomDetails(rooms.rooms)

      console.log(roomDropDown.value, "DA DROP DOWN DUH DUH DUH")

      //currCustomer.filterRoomsByRoomType(rooms.rooms, roomDropDown.value)
      currCustomer.getAvailableRoomDetails(rooms.rooms)
        .forEach((roomDetail, index) => {
          displayRoomDetails.innerHTML += `
        <div class="grid-item grid-item-${index}">
        <p class="room-number"> Room number: ${roomDetail.number}</p>
        <img class=room-image" src="./images/${roomDetail.roomType}.png" alt="This is a ${roomDetail.roomType}">
        <p class="room-type">Room type: ${roomDetail.roomType}</p>
        <p class="bidet-status"> It is ${roomDetail.bidet} that this room includes life-changing bidet. </p>
        <p class="bed-size">There are ${roomDetail.numBeds} ${roomDetail.bedSize}-sized bed. </p>
        <p class="room-cost">Total: ${roomDetail.costPerNight * 100} Forints</p>
        <button id="booking-button">Book Now!</button>
    </div>
        `
        });
    })//.catch(err => //console.error("Error is happening scripts", err));
  //totalSpent.innerText = "Bobby and Shauna rock" + ;
  return true;
}