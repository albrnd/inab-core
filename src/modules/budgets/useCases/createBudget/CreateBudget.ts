import Budget from 'modules/budgets/domain/entities/budget';
import Accounts from 'modules/budgets/domain/valueObjects/accounts';
import { UseCase } from 'shared/domain';

interface ICreateBudgetDTO {
	name: string;
}

export class CreateBudget implements UseCase<ICreateBudgetDTO, Budget> {
	async execute(request?: ICreateBudgetDTO): Promise<Budget> {
		try {
			const newBudget = Budget.init({
				name: request.name,
				accounts: new Accounts([]),
			});

			return newBudget;
		} catch (err) {
			throw new Error(`Invalid budget: ${err}`);
		}
	}
}
