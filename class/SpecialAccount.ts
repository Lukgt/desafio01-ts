import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      const bonus = 10;
      this.addToBalance(amount + bonus);
      console.log(`Você depositou ${amount}. Com o bônus, o novo saldo é: ${this.getBalanceAmount()}`);
    } else {
      console.log('Conta inválida para realizar depósito.');
    }
  }
}