import { CompanyAccount } from './class/CompanyAccount';
import { SpecialAccount } from './class/SpecialAccount';

const companyAccount = new CompanyAccount('Dio', 2000);
console.log(`Conta Empresa - Nome: ${companyAccount.getName()}, Número da Conta: ${companyAccount.getAccountNumber()}`);
companyAccount.deposit(500);
companyAccount.getBalance();
companyAccount.getLoan(1000);
companyAccount.getBalance();
companyAccount.withdraw(300);
companyAccount.getBalance();

const specialAccount = new SpecialAccount('Lucas', 1290);
console.log(`Conta Especial - Nome: ${specialAccount.getName()}, Número da Conta: ${specialAccount.getAccountNumber()}`);
specialAccount.deposit(100);
specialAccount.getBalance();
specialAccount.deposit(200);
specialAccount.getBalance();
specialAccount.withdraw(50);
specialAccount.getBalance();