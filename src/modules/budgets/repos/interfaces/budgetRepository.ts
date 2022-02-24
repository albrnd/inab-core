import { Guid } from 'shared/domain';
import Budget from 'modules/budgets/domain/entities/budget';

export interface IBudgetRepository {
	exists(budgetId: Guid): Promise<boolean>;
	getBudgetById(budgetId: Guid): Promise<Budget>;

	save(budget: Budget): Promise<void>;
}
