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
    //probably don't actually need the room nums, but I could map over
    //filteredByType and then actually try and return just the room.number

    console.log('This is your filteredRooms*****', filteredByType)
    return filteredByType; 
  }
  

  /*


I should be able to filter the list of available rooms by their roomType property
I should be able to select a room for booking
In the event that no rooms are available for the date/roomType selected, display a message fiercely apologizing to the user and asking them to adjust their room search



*/




}

module.exports = Customer; 