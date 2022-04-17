import { GetBudget } from './GetBudget';

import { budgetRepository } from 'modules/budgets/repos';

export default () => {
	return new GetBudget(budgetRepository);
};
