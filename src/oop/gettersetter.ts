class BankAccount {
    readonly userId: number;
    username: string;
    private userBalance: number;
    constructor(userId: number, username: string, userBalance: number) {
        this.userId = userId;
        this.username = username;
        this.userBalance = userBalance;

    }

    // used setter to set amount
    set addBalance(amount: number) {
        this.userBalance = this.userBalance + amount;
    }

    get getBalance(){
        return this.userBalance;
    }

}


const myAccount = new BankAccount(111, 'saikat', 120);

myAccount.addBalance = 100
myAccount.addBalance = 60
// console.log(myAccount)
console.log(myAccount.getBalance)