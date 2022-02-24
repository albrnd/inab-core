import { Guid } from 'shared/domain';

import Budget from 'modules/budgets/domain/entities/budget';
import Accounts from 'modules/budgets/domain/valueObjects/accounts';
import { IBudgetRepository } from 'modules/budgets/repos/interfaces/budgetRepository';

export class BudgetRepository implements IBudgetRepository {
	async exists(): Promise<boolean> {
		return true;
	}

	async getBudgetById(budgetId: Guid): Promise<Budget> {
		const mockBudget = Budget.init(
			{ name: 'Sample Budget', accounts: Accounts.init([]) },
			budgetId
		);

		return mockBudget;
	}

	async save(): Promise<void> {}
}
