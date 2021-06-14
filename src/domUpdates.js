//Put your querySelectors here

export let totalSpent = document.getElementById('totalSpent');
export let guestName = document.getElementById('guestName');
export let roomSelectionForm = document.getElementById('roomSelectionForm');
export let displayRoomDetails = document.getElementById('displayRoomDetails');
export let calendar = document.getElementById('calendar');
export let roomDropDown = document.getElementById('roomDropDown');


export let renderUserInfo = (currCustomer, bookings, rooms) => {
  
  guestName.innerText = currCustomer.name;
  totalSpent.innerText = currCustomer.viewCustomerTotalSpending(bookings.bookings, rooms.rooms);
  currCustomer.bookings.forEach(booking => {
    roomSelectionForm.innerHTML += `
        <p> Room number ${booking.roomNumber}</p>
        <p>Booked on ${booking.date}</p>
        <hr>
        `    
  });

  //Filter based on calendar value
  currCustomer.filterRoomAvailabilityByDate(calendar.value, bookings.bookings);
        
  let availableRoomDetails = currCustomer.getAvailableRoomDetails(rooms.rooms)
  renderRoomCards(availableRoomDetails);  

  if (roomDropDown.value) {
    let filteredRoomsByType = currCustomer.filterRoomsByRoomType(
      rooms.rooms, roomDropDown.value)
    renderRoomCards(filteredRoomsByType);
  }
}

let renderRoomCards = (array) => {
  array.forEach((roomDetail, index) => {
    displayRoomDetails.innerHTML += `
        <div class="grid-item grid-item-${index}">
        <p class="room-number"> Room number: ${roomDetail.number}</p>
        <img class=room-image" src="./images/${roomDetail.roomType}.png" alt="This is a ${roomDetail.roomType}">
        <p class="room-type">Room type: ${roomDetail.roomType}</p>
        <p class="bidet-status"> It is ${roomDetail.bidet} that this room includes life-changing bidet. </p>
        <p class="bed-size">There are ${roomDetail.numBeds} ${roomDetail.bedSize}-sized bed. </p>
        <p class="room-cost">Total: ${roomDetail.costPerNight * 100} Forints</p>
        <button id="bookingButton">Book Now!</button>
    </div>
        `
  });
}

