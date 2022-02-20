class BankAccount {
    #amount = 0;
  
  constructor(start){
    this.#amount = start;
  }

    deposit(money) {
      this.#amount += money;
    }
  
    withdraw(money) {
      this.#amount -= money;
    }
  
    view() {
      console.log(this.#amount);
    }
  }

  class BankAccountVip extends BankAccount{
    minamount= 1000;
    interest= 1.03;
    constructor(start){
      super(start);
    }   

    deposit(money) {
      if(money >= this.minamount){
        money = money*this.interest;
      }
        super.deposit(money)}
  }
  
  const bankAccountVip = new BankAccountVip(1000);
  bankAccountVip.deposit(500);
  bankAccountVip.deposit(1200);
  bankAccountVip.withdraw(800);
  bankAccountVip.deposit(3500);
  bankAccountVip.view();