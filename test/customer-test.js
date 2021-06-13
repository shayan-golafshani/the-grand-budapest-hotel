import chai from 'chai';
const expect = chai.expect;

import Customer from '../src/classes/Customer';
import { allCustomers } from '../src/test-data/customer-data';
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
    const roomNums = customer1.filterRoomAvailabilityByDate("2020/02/05", bookings)
    //room number 12 should be excluded from the list
    const expectedRoomNums = [15, 24, 7, 14, 9, 5, 13, 20, 8, 2, 17]; 
    expect(roomNums).to.equal(expectedRoomNums);
  });
});
