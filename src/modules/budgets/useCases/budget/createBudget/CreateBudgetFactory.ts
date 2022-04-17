import { CreateBudget } from './CreateBudget';

import { budgetRepository } from 'modules/budgets/repos';

export default () => {
	return new CreateBudget(budgetRepository);
};
