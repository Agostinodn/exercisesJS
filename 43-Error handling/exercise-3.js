class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new NegativeAmountError(); // Use custom Error class
    }
    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new WithdrawNotPermittedError(); // Use custom Error class
    }
    if (this.#amount < amount) {
      throw new WithdrawNotPermittedError(); // Use custom Error class
    }
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

class NegativeAmountError extends BankAccount {
  constructor() {
    super();
    this.name = 'Importo negativo';
    this.message = "L'importo non può essere negativo"
  }
}

class WithdrawNotPermittedError extends BankAccount {
  constructor() {
    super();
    this.name = 'Saldo insufficiente';
    this.message = `La cifra inserita non può essere prelevata`;
  }
}


const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000);
bankAccount.view();