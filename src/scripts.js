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
  renderRoomCards,
  mainCardsArea,
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
      console.log(startUpData, "HEY your data on startup");
      currCustomer = new Customer(currCustomer);

      //import render info here...>>>>
      renderUserInfo(currCustomer, bookings, rooms);
    }).catch(err => console.error("Error is happening scripts", err));
}

calendar.addEventListener('change', () => updateByDate());
roomDropDown.addEventListener('change', () => updateByRoomType());



let updateByDate = () => {
  let currCustomer = new Customer(startUpData[1]);
  let bookings = startUpData[3];
  let rooms =  startUpData[2];

  let date = calendar.value.split("-").join('/')
  
  currCustomer.filterRoomAvailabilityByDate(date, bookings.bookings);
        
  let availableRoomDetails = currCustomer.getAvailableRoomDetails(rooms.rooms)
  renderRoomCards(availableRoomDetails);  

  //Filter based on the drop-down value
  if (roomDropDown.value) {
    let filteredRoomsByType = currCustomer.filterRoomsByRoomType(
      rooms.rooms, roomDropDown.value)
    renderRoomCards(filteredRoomsByType);
  }
}

let updateByRoomType = () => {
  let currCustomer = new Customer(startUpData[1]);
  let rooms =  startUpData[2];
  let bookings = startUpData[3];


  let date = calendar.value.split("-").join('/');
  

  currCustomer.filterRoomAvailabilityByDate(date, bookings.bookings);
  //Filter based on the drop-down value
  if (roomDropDown.value) {
    let filteredRoomsByType = currCustomer.filterRoomsByRoomType(
      rooms.rooms, roomDropDown.value)
    renderRoomCards(filteredRoomsByType);
  } else {
    //otherwise show all rooms;
    let availableRoomDetails = currCustomer.getAvailableRoomDetails(rooms.rooms)
    renderRoomCards(availableRoomDetails);    
  }
}

mainCardsArea.addEventListener('click', (e) => bookRoom(e));

let bookRoom = (e) => {
  if (e.target.closest('button')) {
    console.log(e.target.closest('button').id)
  }

  //customer id is startUpArr[1].id
  //roomNumber is e.target.closest('button')
  //date calendar.value.split("-").join('/')
  //
  /*
    { "userID": 48, "date": "2019/09/23", "roomNumber": 4 }

     */
}
