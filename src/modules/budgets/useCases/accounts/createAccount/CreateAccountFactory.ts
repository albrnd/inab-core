import { CreateAccount } from './CreateAccount';

import { accountRepository, budgetRepository } from 'modules/budgets/repos';

export default () => {
	return new CreateAccount(accountRepository, budgetRepository);
};
