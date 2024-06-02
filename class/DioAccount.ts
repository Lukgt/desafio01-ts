export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  }

  getAccountNumber = (): number => {
    return this.accountNumber;
  }

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance += amount;
      console.log(`Você depositou ${amount}. Novo saldo: ${this.balance}`);
    }
  }

  withdraw = (amount: number): void => {
    if (this.validateStatus() && this.balance >= amount) {
      this.balance -= amount;
      console.log(`Você sacou ${amount}. Novo saldo: ${this.balance}`);
    } else if (this.validateStatus() && this.balance < amount) {
      console.log('Saldo insuficiente para o saque.');
    }
  }

  getBalance = (): void => {
    console.log(this.balance);
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }
    throw new Error('Conta inválida');
  }

  protected addToBalance(amount: number): void {
    this.balance += amount;
  }

  protected getBalanceAmount(): number {
    return this.balance;
  }
}