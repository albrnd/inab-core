import { BudgetRepository } from 'modules/budgets/repos/implementations/budgetRepository';
import { Guid } from 'shared/domain';

import { CreateAccount, ICreateAccountDTO } from './CreateAccount';

jest.mock('modules/budgets/repos/implementations/budgetRepository');

describe('Create Account', () => {
	const createAccountUseCase = (
		budgetRepository?: BudgetRepository,
		request?: Partial<ICreateAccountDTO>
	) => {
		const defaultRequest = {
			name: 'Savings Account',
			balance: 1,
			budgetId: new Guid('704c13bc-5080-4978-af69-7ebc7301fa69'),
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
