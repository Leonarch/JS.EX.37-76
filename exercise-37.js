class BankAccount{
    start = 0;

constructor(params) {
    this.start = params;
    
}

    deposit(depo){
this.start += depo;
    }
    withdraw(riti){
        this.start -= riti;
    }
   view(){
        console.log(this.start);
    }
}


const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);bankAccount.view();