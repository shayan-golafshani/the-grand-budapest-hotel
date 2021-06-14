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

let testingBtn = document.querySelector('#testButton');
let searchForRoom = document.getElementById('sendIt');
//put event listeners on here. 

window.onload = startUp();
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

testingBtn.addEventListener('click', () => consoleLoggy());

// searchForRoom.addEventListener('click', () => consoleLoggy());

let consoleLoggy = () => {
    debugger;
    // e.preventDefault();
  console.log("LOGGY");
}


