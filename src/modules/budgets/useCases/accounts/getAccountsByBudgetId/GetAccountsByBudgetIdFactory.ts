import { GetAccountsByBudgetId } from './GetAccountsByBudgetId';

import { accountRepository } from 'modules/budgets/repos';

export default () => {
	return new GetAccountsByBudgetId(accountRepository);
};
