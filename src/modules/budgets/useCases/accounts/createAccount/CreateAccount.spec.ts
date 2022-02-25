import { CreateAccount, ICreateAccountDTO } from './CreateAccount';

import { BudgetRepository } from 'modules/budgets/repos/implementations/budgetRepository';
import { Guid } from 'shared/domain';

import faker from '@faker-js/faker';

jest.mock('modules/budgets/repos/implementations/budgetRepository');

describe('Create Account', () => {
	const createAccountUseCase = (
		budgetRepository?: BudgetRepository,
		request?: Partial<ICreateAccountDTO>
	) => {
		const defaultRequest = {
			name: faker.finance.accountName(),
			balance: faker.datatype.number({ precision: 0.01 }),
			budgetId: new Guid(faker.datatype.uuid()),
		};

		const _request = { ...defaultRequest, ...request };

		const _budgetRepository = budgetRepository || new BudgetRepository();

		const createAccount = new CreateAccount(_budgetRepository);

		return {
			budgetRepository: _budgetRepository,
			createAccount,
			request: _request,
		};
	};

	describe('execute', () => {
		beforeEach(() => {
			jest.clearAllMocks();
		});

		it('should create an account', async () => {
			const { createAccount, request } = createAccountUseCase();

			const accountResult = await createAccount.execute(request);

			expect(accountResult.isSuccess).toBeTruthy();
			expect(accountResult.value).toBeDefined();
		});

		it('should return failed result when budgetId does not exist', async () => {
			const { createAccount, budgetRepository, request } =
				createAccountUseCase();

			jest.spyOn(budgetRepository, 'exists').mockResolvedValueOnce(false);

			const accountResult = await createAccount.execute(request);

			expect(accountResult.isSuccess).toBeFalsy();
			expect(accountResult.error).toBeDefined();
		});
	});
});
