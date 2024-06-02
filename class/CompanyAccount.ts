import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (amount: number): void => {
    if (this.validateStatus()) {
      this.addToBalance(amount);
      console.log(`Você pegou um empréstimo de ${amount}. Novo saldo: ${this.getBalanceAmount()}`);
    } else {
      console.log('Conta inválida para realizar empréstimo.');
    }
  }
}