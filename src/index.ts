// Ticket ເປັນຄາສ ທີ່ບໍ່ສາມາດສ້າງ object ໄດ້ໂດຍຕົງ
// ປະກອບດ້ວຍຄຸນສົມບັດ 
// Abstraction ເປັນສ່ວນທີ່ຊ່ອນລາຍລະອຽດທີ່ບໍ່ຈຳເປັນ ແລະ ສະແດງສະເພາະທີ່ສຳຄັນ ໂດຍຈະໃຊ້ ຄາສ abtractຫຼື ອິນເຕີເຟສ ເພື່ອກຳນົດແມ່ແບບສຳລັບຄາສອື່່ນ
abstract class Ticket {
   // encapsulation ຄືການຊ່ອນຂໍ້ມູນພາຍໃນຄາສ ໂດຍໃຊ້ access modifiers ເຊັ່ນ private , public and protected ເພື່ອຄວບຄຸມການເຂົ້າເຖິງຂໍ້ມູນ
    private id: number;
    private holderName: string;
    private seatNumber: string;
    private price: number;
  
    constructor(id: number, holderName: string, seatNumber: string, price: number) {
      this.id = id;
      this.holderName = holderName;
      this.seatNumber = seatNumber;
      this.price = price;
    }
    // ໃຊ່້ getters ໃນການເຂົ້າເຖິງຂໍ້ມູນ
    public getId(): number {
      return this.id;
    }
  
    public getHolderName(): string {
      return this.holderName;
    }
  
    public getSeatNumber(): string {
      return this.seatNumber;
    }
  
    public getPrice(): number {
      return this.price;
    }
    // abtraction ແມ່ນເປັນຕົວດຳເນີນການ ທີ່ຈະຖືກ override ໃນຄາສທີ່ຈະສືບທອດ
    abstract getTicketInfo(): string;
  }
  
  // Inheritance vipticket ທີ່ສອບທອດມາຈາກ ຄາສ ຕົ່ວ
  class VIPTicket extends Ticket {
    private perks: string[];
   // Polymorphism ແມ່ນຄວາມສາມາດຂອງວັດຖຸທີ່ສາມາດມີຫຼາຍຮູບແບບ ຂຶ້ນຢູ່ດກັບການເອື້ນໃຊ້ເມັດຕອດ ທີ່ຖືກ override ໃນຄາສທິ່ສືບທອດ
   // Override ແທນທີ່
   // ເມັດຕອດ getTicketInfo ຖືກ override ໃນຄາສ VIPTicket ແລະ RegularTicket
    constructor(id: number, holderName: string, seatNumber: string, price: number, perks: string[]) {
      super(id, holderName, seatNumber, price);
      this.perks = perks;
    }
  
    public getTicketInfo(): string {
      return `VIP Ticket - ID: ${this.getId()}, Holder: ${this.getHolderName()}, Seat: ${this.getSeatNumber()}, Price: ${this.getPrice().toFixed(2)}, Perks: ${this.perks.join(', ')}`;
    }
  }

  // Inheritance ຂອງ regularticket ທີ່ສອບທອດມາຈາກ ຄາສ ຕົ່ວ
  class RegularTicket extends Ticket {
    constructor(id: number, holderName: string, seatNumber: string, price: number) {
      super(id, holderName, seatNumber, price);
    }
  
    public getTicketInfo(): string {
      return `Regular Ticket - ID: ${this.getId()}, Holder: ${this.getHolderName()}, Seat: ${this.getSeatNumber()}, Price: ${this.getPrice().toFixed(2)}`;
    }
  }
  
  const vipTicket = new VIPTicket(1, 'John Doe', 'A1', 100.00, ['Free Drinks', 'Backstage Access']);
  const regularTicket = new RegularTicket(2, 'Jane Smith', 'B1', 50.00);
  
  console.log(vipTicket.getTicketInfo());
  console.log(regularTicket.getTicketInfo());
  