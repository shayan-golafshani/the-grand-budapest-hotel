// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/hungary.png'
import './images/the-grand-budapest-hotel.png'
import { retrieveData } from './apiCalls';
import Customer from './classes/Customer';

console.log('This is the JavaScript entry file - your code begins here.');

//Put query-selectors here
let totalSpent = document.getElementById('totalSpent');
let guestName = document.getElementById('guestName');
let roomSelectionForm = document.getElementById('roomSelectionForm');
let calendar = document.getElementById('calendar');
let displayRoomDetails = document.getElementById('displayRoomDetails');
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
      currCustomer.getAvailableRoomDetails(rooms.rooms).forEach((roomDetail, index) => {
        displayRoomDetails.innerHTML += `
        <div class="grid-item grid-item-${index}">
        <p class="room-number">Number: ${roomDetail.number}</p>
        <p class="room-type">Room Type: ${roomDetail.roomType}</p>
        <p class="bidet-status"> room includes life-changing bidet: ${roomDetail.bidet} </p>
        <p class="bed-size">Comes equipped with ${roomDetail.numBeds} ${roomDetail.bedSize}-sized bed. </p>
        <p class="room-cost">Total: ${roomDetail.costPerNight}</p>
        <button id="booking-button">Book Now!</button>
    </div>
        `
      });
    })//.catch(err => //console.error("Error is happening scripts", err));
//totalSpent.innerText = "Bobby and Shauna rock" + ;
return true;
}