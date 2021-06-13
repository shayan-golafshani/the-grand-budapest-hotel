const { allBookings } = require("../test-data/booking-data");
const { allRooms } = require("../test-data/room-data");

class Customer {
  constructor(customerInfo) {
    //properties
    //customer id
    this.id = customerInfo.id;
    //customer's name
    this.name = customerInfo.name;
    //this is the the total amount that a customer has spent in their lifetime at the GBH
    this.totalSpent = 0;
    //this is an array of booking objects with all the customer's past info
    this.bookings = [];  
  }
    //methods
    filterRoomAvailabilityByDate(date, bookings1) {
      let availableRoomNums = bookings1.filter(booking => {
        return booking.date !== date
      });
      console.log("These are all the available bookings", availableRoomNums);

      let roomNumsOnly = availableRoomNums.map(booking => booking.roomNumber);

      console.log("These are ROOM NUMS #### ONLY", roomNumsOnly);
      //return roomNumsOnly;
    }

    getAvailableRoomDetails() {
        //should be shown a list of room details for only rooms that are available on that date

        //need to check the boolean status of whether or not the room in question is available.

        //return an array of room details....for rooms available on that date
    }

    filter

/*
I should be able to select a date for which I’d like to book a room for myself
Upon selecting a date, I should be shown a list of room details for only rooms that are available on that date
I should be able to filter the list of available rooms by their roomType property
I should be able to select a room for booking
In the event that no rooms are available for the date/roomType selected, display a message fiercely apologizing to the user and asking them to adjust their room search



*/




}

module.exports = Customer; 