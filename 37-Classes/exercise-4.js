class BankAccount {

    #value = 0;

    constructor(initialValue) {
        this.#value = initialValue;
    };

    deposit(value) {
        this.#value += value;
    }
    withdraw(value) {
        this.#value -= value;
    }
    view(value) {
        console.log(this.#value);
    }

}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();