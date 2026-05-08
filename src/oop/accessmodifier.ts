class BankAccount {
    readonly userId: number;
    username: string;
    private userBalance: number;
    constructor(userId: number, username: string, userBalance: number) {
        this.userId = userId;
        this.username = username;
        this.userBalance = userBalance;

    }

    addBalance(balance: number) {
        this.userBalance = this.userBalance + balance;
    }

}
class StudentBankAccount extends BankAccount {
    constructor(userId: number, username: string, userBalance: number) {
        super(userId, username, userBalance);
    }

}

const myAccount = new BankAccount(111, 'saikat', 120);

myAccount.addBalance(20);

console.log(myAccount)