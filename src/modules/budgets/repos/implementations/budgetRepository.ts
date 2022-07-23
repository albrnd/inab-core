import { Guid } from 'shared/domain';

import Budget from 'modules/budgets/domain/entities/budget';
import { IBudgetRepository } from 'modules/budgets/repos/interfaces/budgetRepository';
import { BudgetModel } from 'infra/database/models/budget.model';
import { BudgetMapper } from 'modules/budgets/mappers/budgetMapper';

export class BudgetRepository implements IBudgetRepository {
	async exists(budgetId: Guid): Promise<boolean> {
		const budget = await BudgetModel.exists({ _id: budgetId.value });

		return !!budget;
	}

	async getBudgetById(budgetId: Guid): Promise<Budget> {
		const budget = await BudgetModel.findById(budgetId.value).populate(
			'accounts'
		);

		if (!budget) {
			throw new Error('Budget not found');
		}

		return BudgetMapper.toDomain(budget);
	}

	async save(budget: Budget): Promise<void> {
		const budgetEntity = new BudgetModel(BudgetMapper.toModel(budget));

		await budgetEntity.save();
	}
}
