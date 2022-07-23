import faker from '@faker-js/faker';
import { AccountRepository } from 'modules/budgets/repos/implementations/accountRepository';
import {
	GetAccountsByBudgetId,
	IGetAccountsByBudgetIdDTO,
} from './GetAccountsByBudgetId';

describe('GetAccountsByBudgetId', () => {
	const getAccountsByBudgetIdUseCase = (
		accountRepository?: AccountRepository,
		request?: Partial<IGetAccountsByBudgetIdDTO>
	) => {
		const defaultRequest = {
			budgetId: faker.datatype.uuid(),
		};

		const _request = { ...defaultRequest, ...request };

		const _accountRepository = accountRepository || new AccountRepository();

		const getAccountsByBudgetId = new GetAccountsByBudgetId(_accountRepository);

		return {
			accountRepository: _accountRepository,
			getAccountsByBudgetId,
			request: _request,
		};
	};

	describe('execute', () => {
		it('should get all accounts by budgetId', async () => {
			const budgetId = faker.datatype.uuid();

			const { getAccountsByBudgetId, request } = getAccountsByBudgetIdUseCase(
				undefined,
				{ budgetId }
			);

			await getAccountsByBudgetId.execute(request);
		});
	});
});
