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

    this.availableRoomNums = [];

    this.availableRoomNumsByType = [];
  }
  filterRoomAvailabilityByDate(date, bookings) {
    this.availableRoomNums = bookings.filter(booking => booking.date !== date)
      .map(booking => booking.roomNumber)
    return this.availableRoomNums;
  }

  getAvailableRoomDetails(rooms) {
    return rooms.filter(
      room => this.availableRoomNums.includes(room.number));
  }

  filterRoomsByRoomType(rooms, roomType) {
    let availableRooms = this.getAvailableRoomDetails(rooms);
    let filteredByType = availableRooms.filter(roomObject => roomObject.roomType === roomType);
    this.availableRoomNumsByType  = filteredByType.map(room => room.number);
    return filteredByType; 
  }
  
  viewCustomerTotalSpending() {

  }

  viewMyBookings() {

  }

  checkRoomAvailability() {
    return (!this.availableRoomNums.length) ? false : true; 
  }

  /*


I should be able to filter the list of available rooms by their roomType property
I should be able to select a room for booking
In the event that no rooms are available for the date/roomType selected, display a message fiercely apologizing to the user and asking them to adjust their room search



*/




}

module.exports = Customer; 