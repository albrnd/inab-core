import { AccountRepository } from './implementations/__mocks__/accountRepository';
import { BudgetRepository } from './implementations/__mocks__/budgetRepository';

const accountRepository = new AccountRepository();
const budgetRepository = new BudgetRepository();

export { accountRepository, budgetRepository };
