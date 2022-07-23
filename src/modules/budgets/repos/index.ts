import { AccountRepository } from './implementations/accountRepository';
import { BudgetRepository } from './implementations/budgetRepository';

const accountRepository = new AccountRepository();
const budgetRepository = new BudgetRepository();

export { accountRepository, budgetRepository };
