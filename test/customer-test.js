import chai from 'chai';
const expect = chai.expect;

import Customer from '../src/classes/Customer';
import { allCustomers } from '../src/test-data/customer-data';
import { allRooms } from '../s'
import { bookings } from '../src/test-data/booking-data';

describe.only('Customer', () => {
  let customer1;
  beforeEach(() => {

    customer1 = new Customer(allCustomers[0]);
  });

  it('Should be a function ', () => {
    expect(Customer).to.be.a('function');
  });

  it('Should have an id and a name', () => {
    expect(customer1.id).to.equal(allCustomers[0].id);
    expect(customer1.name).to.equal(allCustomers[0].name);
  });

  it('Should have a default totalSpent of 0, until tallied', () => {
    expect(customer1.totalSpent).to.equal(0);
  });

  it('Should have an empty list of bookings by default', () => {
    expect(customer1.bookings.length).to.equal(0);
    expect(customer1.bookings).to.deep.equal([]);
  });

  it('Should return a list of room numbers for rooms that are available on only the booking date', () => {
    const roomNums = customer1.filterRoomAvailabilityByDate("2020/04/22", bookings)
   
    const expectedRoomNums = [2, 3]; 
    expect(roomNums).to.deep.equal(expectedRoomNums);
  });

  it('Should show a list of all room details for the rooms available on the booking date', () => {
    const roomDeets = [allRooms[1], allRooms[2]];
    customer1.filterRoomAvailabilityByDate("2020/04/22", bookings);
    customer1.getAvailableRoomDetails()
    expect()
  });
});
