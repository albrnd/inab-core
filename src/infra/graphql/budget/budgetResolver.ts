import BudgetType from './types/BudgetType';

import { GetBudget } from 'modules/budgets/useCases/budget/getBudget/GetBudget';
import { CreateBudget } from 'modules/budgets/useCases/budget/createBudget/CreateBudget';
import { BudgetMapper } from 'modules/budgets/mappers/BudgetMapper';

import { Guid } from 'shared/domain';

import { Arg, Resolver, Query, Mutation } from 'type-graphql';
import { Service } from 'typedi';

@Service()
@Resolver(BudgetType)
export default class BudgetResolver {
	constructor(
		private readonly getBudgetUseCase: GetBudget,
		private readonly createBudgetUseCase: CreateBudget
	) {}

	@Query(() => BudgetType)
	async budget(@Arg('budgetId') budgetId: string) {
		const budget = await this.getBudgetUseCase.execute({
			budgetId: new Guid(budgetId),
		});

		if (budget.isFailure) {
			throw budget.error;
		}

		return BudgetMapper.toDTO(budget.value);
	}

	@Mutation(() => BudgetType)
	async createBudget(@Arg('name') name: string) {
		const budget = await this.createBudgetUseCase.execute({ name });

		if (budget.isFailure) {
			throw budget.error;
		}

		return BudgetMapper.toDTO(budget.value);
	}
}
