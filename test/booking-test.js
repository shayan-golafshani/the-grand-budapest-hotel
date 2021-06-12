import chai from 'chai';
import { Booking } from '../src/classes/Booking';
import { allBookings } from '../src/test-data/booking-data';
const expect = chai.expect;


describe.only('Booking', () => {
  let booking1;
  beforeEach(() => { 
    booking1 = new Booking(allBookings[0]);
  });

  it('Should be a function', () => {
    expect(Booking).to.be.a('function');
  });

  it('Should store the values of the booking object that\'s passed in', () => {    
    expect(booking1.id).to.equal(allBookings[0].id);
    expect(booking1.userID).to.equal(allBookings[0].userID);
    expect(booking1.date).to.equal(allBookings[0].date);
    expect(booking1.roomNumber).to.equal(allBookings[0].roomNumber);
    expect(booking1.roomServiceCharges).to.equal(allBookings[0].roomServiceCharges);
  });
});
