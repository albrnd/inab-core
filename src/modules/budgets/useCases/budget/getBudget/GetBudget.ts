import GetBudgetFactory from './GetBudgetFactory';

import Budget from 'modules/budgets/domain/entities/budget';
import { IBudgetRepository } from 'modules/budgets/repos/interfaces/budgetRepository';

import { Guid, UseCase } from 'shared/domain';
import { Result } from 'shared/core/Result';

import { Service } from 'typedi';

interface IGetBudgetDTO {
	budgetId: Guid;
}

type GetBudgetResponse = Result<Budget | undefined>;

@Service({
	factory: GetBudgetFactory,
})
export class GetBudget implements UseCase<IGetBudgetDTO, GetBudgetResponse> {
	private budgetRepository: IBudgetRepository;

	constructor(budgetRepository: IBudgetRepository) {
		this.budgetRepository = budgetRepository;
	}

	async execute(request: IGetBudgetDTO): Promise<GetBudgetResponse> {
		try {
			const budget = await this.budgetRepository.getBudgetById(
				request.budgetId
			);

			return Result.ok(budget);
		} catch (err) {
			return Result.fail(err as Error);
		}
	}
}
