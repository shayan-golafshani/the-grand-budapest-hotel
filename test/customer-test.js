import chai from 'chai';
const expect = chai.expect;

import Customer from '../src/classes/Customer';
import { allCustomers } from '../src/test-data/customer-data';
import { allRooms } from '../src/test-data/room-data';
import { bookings } from '../src/test-data/booking-data';
import { Booking } from '../src/classes/Booking';

describe.only('Customer', () => {
  let booking1, customer1;
  beforeEach(() => {
    let booking1 = new Booking(bookings[0]);
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
    let roomDetails  = customer1.getAvailableRoomDetails(allRooms)
    expect(roomDetails).to.deep.equal(roomDeets);
  });

  it("Should filter a list of available rooms by roomType", () => {
    const roomDeets = [allRooms[1], allRooms[2]];
    customer1.filterRoomAvailabilityByDate("2020/04/22", bookings);
    let roomDetails  = customer1.getAvailableRoomDetails(allRooms)
    expect(roomDetails).to.deep.equal(roomDeets);

    let filteredByType = customer1.filterRoomsByRoomType(allRooms, "suite");

    expect(filteredByType).to.deep.equal([allRooms[1]]);
    expect(customer1.availableRoomNumsByType).to.deep.equal([allRooms[1].number]);
  });

  it("Should be able to return an array of all the customer's bookings", () => {
    //booking1
    let total = customer1.viewCustomerTotalSpending();

    expect(total).to.equal(booking1.cost)
  });

  it('Should be able to return the total amount a specific customer has spent', () => {

  });
});
