"use strict";
class Ticket {
    constructor(id, holderName, seatNumber, price) {
        this.id = id;
        this.holderName = holderName;
        this.seatNumber = seatNumber;
        this.price = price;
    }
    getId() {
        return this.id;
    }
    getHolderName() {
        return this.holderName;
    }
    getSeatNumber() {
        return this.seatNumber;
    }
    getPrice() {
        return this.price;
    }
}
class VIPTicket extends Ticket {
    constructor(id, holderName, seatNumber, price, perks) {
        super(id, holderName, seatNumber, price);
        this.perks = perks;
    }
    getTicketInfo() {
        return `VIP Ticket - ID: ${this.getId()}, Holder: ${this.getHolderName()}, Seat: ${this.getSeatNumber()}, Price: ${this.getPrice().toFixed(2)}, Perks: ${this.perks.join(', ')}`;
    }
}
class RegularTicket extends Ticket {
    constructor(id, holderName, seatNumber, price) {
        super(id, holderName, seatNumber, price);
    }
    getTicketInfo() {
        return `Regular Ticket - ID: ${this.getId()}, Holder: ${this.getHolderName()}, Seat: ${this.getSeatNumber()}, Price: ${this.getPrice().toFixed(2)}`;
    }
}
const vipTicket = new VIPTicket(1, 'John Doe', 'A1', 100.00, ['Free Drinks', 'Backstage Access']);
const regularTicket = new RegularTicket(2, 'Jane Smith', 'B1', 50.00);
console.log(vipTicket.getTicketInfo());
console.log(regularTicket.getTicketInfo());
