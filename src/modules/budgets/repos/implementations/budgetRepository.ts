import { Guid } from 'shared/domain';

import Budget from 'modules/budgets/domain/entities/budget';
import { IBudgetRepository } from 'modules/budgets/repos/interfaces/budgetRepository';

export class BudgetRepository implements IBudgetRepository {
	async exists(budgetId: Guid): Promise<boolean> {
		throw new Error('Method not implemented.');
	}

	async getBudgetById(budgetId: Guid): Promise<Budget> {
		throw new Error('Method not implemented.');
	}

	async save(budget: Budget): Promise<void> {
		throw new Error('Method not implemented.');
	}
}
