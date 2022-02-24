import { Result } from 'shared/core/Result';
import { Guid, UseCase } from 'shared/domain';

import Account from 'modules/budgets/domain/entities/account';
import { IBudgetRepository } from 'modules/budgets/repos/interfaces/budgetRepository';
import { Guard } from 'shared/core/guards/Guard';

export interface ICreateAccountDTO {
	name: string;
	budgetId: Guid;
	balance: number;
}

type CreateAccountResponse = Result<Account | undefined>;

export class CreateAccount
	implements UseCase<ICreateAccountDTO, CreateAccountResponse>
{
	private budgetRepository: IBudgetRepository;

	constructor(budgetRepository: IBudgetRepository) {
		this.budgetRepository = budgetRepository;
	}

	async execute(request: ICreateAccountDTO): Promise<CreateAccountResponse> {
		try {
			const budget = await this.budgetRepository.exists(request.budgetId);

			Guard.isFalsy(budget, 'Budget');
		} catch (err) {
			return Result.fail(err as Error);
		}

		const accountResult = Account.init({
			name: request.name,
			balance: request.balance,
		});

		// TODO: Implement accountRepository.save()
		// Return the accountResult directly for now...

		return accountResult;
	}
}
