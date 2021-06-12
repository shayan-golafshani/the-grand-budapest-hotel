class Customer {
  constructor(bookingInfo, lifeTimeSpending, id, name) {
    //properties
    ///this is an array of booking objects with all the info needed
    this.bookings = bookingInfo || [];

    this.nextBooking = new Date () || "Jan. 1st, 2100";
    
    //this is the the total amount that a customer has spent in their lifetime at the GBH
    this.totalSpent = lifeTimeSpending || 0;

    //customer id
    this.id = id;
    //customer's name
    this.name = name;
  }

    //methods
    selectNextBookableData() {
        //should update this.nextBooking

    }

    getAvailableRoomDetails() {
        //should be shown a list of room details for only rooms that are available on that date

        //need to check the boolean status of whether or not the room in question is available.

        //return an array of room details....for rooms available on that date
    }






}

module.exports = Customer; 