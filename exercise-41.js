class BankAccount {
    total = 0;
    constructor (total){
      this.total = total;
    }
  
    deposit(amount) {
      if(amount<=0){
        throw new Error("operation not allowed");
      }
      else this.total += amount;
    }
  
    withdraw(amount) {
        if(amount<=0 || amount >= this.total){
           throw new Error("operation not allowed");  
        }
     else  this.total -= amount;
    }
  
    view() {
      console.log(this.total);
    }
  }
  
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
  bankAccount.view();