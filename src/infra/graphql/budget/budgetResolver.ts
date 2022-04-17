import BudgetType from './budgetType';

import { GetBudget } from 'modules/budgets/useCases/budget/getBudget/GetBudget';
import { BudgetMapper } from 'modules/budgets/mappers/budgetMapper';

import { Guid } from 'shared/domain';

import { Arg, Resolver, Query } from 'type-graphql';
import { Service } from 'typedi';

@Service()
@Resolver(BudgetType)
export default class BudgetResolver {
	constructor(private readonly getBudget: GetBudget) {}

	@Query(() => BudgetType)
	async budget(@Arg('budgetId') budgetId: string) {
		const budget = await this.getBudget.execute({
			budgetId: new Guid(budgetId),
		});

		if (budget.isFailure) {
			throw budget.error;
		}

		return BudgetMapper.toDTO(budget.value);
	}
}
