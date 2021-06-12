export class Booking {
  constructor(bookingInfo) {
    this.id = bookingInfo.id;
    this.userID = bookingInfo.userID;
    this.date = bookingInfo.date;
    this.roomNumber = bookingInfo.roomNumber;
    this.roomServiceCharges = bookingInfo.roomServiceCharges || [];
  }

  //May want to use a spread operator here later, so I can post multiple charges
  //w/out iterating
  addCharges(chargeAmount) {
    this.roomServiceCharges.push(chargeAmount);
  }

  tallyCharges() {
    return this.roomServiceCharges.reduce((tally, charge) => {
      tally += charge
      return tally;
    }, 0);
  }
}