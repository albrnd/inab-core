import { Result } from 'shared/core/Result';
import { UseCase } from 'shared/domain';

import Accounts from 'modules/budgets/domain/valueObjects/accounts';
import Budget from 'modules/budgets/domain/entities/budget';
import { IBudgetRepository } from 'modules/budgets/repos/interfaces/budgetRepository';

interface ICreateBudgetDTO {
	name: string;
}

type CreateBudgetResponse = Result<Budget | undefined>;

export class CreateBudget
	implements UseCase<ICreateBudgetDTO, CreateBudgetResponse>
{
	private budgetRepository: IBudgetRepository;

	constructor(budgetRepository: IBudgetRepository) {
		this.budgetRepository = budgetRepository;
	}

	async execute(request: ICreateBudgetDTO): Promise<CreateBudgetResponse> {
		const newBudgetResult = Budget.init({
			name: request.name,
			accounts: Accounts.init([]),
		});

		if (newBudgetResult.isFailure) {
			return newBudgetResult;
		}

		try {
			const newBudget = newBudgetResult.value;

			await this.budgetRepository.save(newBudget);

			return Result.ok(newBudget);
		} catch (err) {
			return Result.fail(new Error('Error creating budget'));
		}
	}
}
