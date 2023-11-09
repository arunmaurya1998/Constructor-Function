function Bankccount(accountNumber, name, type, blance, isActive){

    this.accountNumber = accountNumber;
    this.name = name;
    this.blance = blance;
    this.isActive = isActive;
    this.type = type;


    this.deposite = function(amount){
        this.blance += amount;
        console.log('Your avaliable blance is: ${this.blance}')
    }

    this.withdrawl = function(amount){
        if(this.blance >= amount){
            this.blance -= amount
            console.log('Your avaliable blance is: ${this.blance}')
        }
        else{
            console.log("insifficent blance")
        }
       

    }

}


let account1 = new Bankccount(7276782373,"tarun","saving",2000,true);
let account2 = new Bankccount(7276782334,"arun","saving",4000,false);

account1.deposite(3000)
account2.withdrawl(100)
