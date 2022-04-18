import BudgetType from './types/BudgetType';

import { GetBudget } from 'modules/budgets/useCases/budget/getBudget/GetBudget';
import { CreateBudget } from 'modules/budgets/useCases/budget/createBudget/CreateBudget';
import { BudgetMapper } from 'modules/budgets/mappers/budgetMapper';

import { Guid } from 'shared/domain';

import {
	Arg,
	Resolver,
	Query,
	Mutation,
	FieldResolver,
	Root,
} from 'type-graphql';
import { Service } from 'typedi';
import Budget from 'modules/budgets/domain/entities/budget';
import { GetAccountsByBudgetId } from 'modules/budgets/useCases/accounts/getAccountsByBudgetId/GetAccountsByBudgetId';
import { AccountMapper } from 'modules/budgets/mappers/accountMapper';

@Service()
@Resolver(BudgetType)
export default class BudgetResolver {
	constructor(
		private readonly getBudgetUseCase: GetBudget,
		private readonly createBudgetUseCase: CreateBudget,
		private readonly getAccountsByBudgetIdUseCase: GetAccountsByBudgetId
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

	@FieldResolver()
	async accounts(@Root() budget: BudgetType) {
		const accounts = await this.getAccountsByBudgetIdUseCase.execute({
			budgetId: budget.id,
		});

		return accounts.value.items.map((acc) => AccountMapper.toDTO(acc));
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
