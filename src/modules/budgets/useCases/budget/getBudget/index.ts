import { GetBudget } from './GetBudget';

import { budgetRepository } from 'modules/budgets/repos';

export const getBudgetFactory = () => {
	return new GetBudget(budgetRepository);
};
