import Budget from 'modules/budgets/domain/entities/budget';
import Accounts from 'modules/budgets/domain/valueObjects/accounts';
import { Result } from 'shared/core/Result';
import { UseCase } from 'shared/domain';

interface ICreateBudgetDTO {
	name: string;
}

export class CreateBudget implements UseCase<ICreateBudgetDTO, Result<Budget>> {
	async execute(request: ICreateBudgetDTO): Promise<Result<Budget>> {
		const newBudgetResult = Budget.init({
			name: request.name,
			accounts: new Accounts([]),
		});

		if (!newBudgetResult.isSuccess) {
			return Result.fail(
				new Error(`Invalid budget: ${newBudgetResult.error?.message}`)
			);
		}

		return newBudgetResult;
	}
}
