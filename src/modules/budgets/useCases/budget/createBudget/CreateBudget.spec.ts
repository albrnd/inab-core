import { budgetRepository } from 'modules/budgets/repos';

import { CreateBudget } from './CreateBudget';

jest.mock('modules/budgets/repos/implementations/budgetRepository');

describe('Create Budget', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should create a budget', async () => {
		const createBudget = new CreateBudget(budgetRepository);
		const newBudgetResult = await createBudget.execute({ name: 'My Budget' });

		expect(newBudgetResult.isSuccess).toBeTruthy();
		expect(newBudgetResult.value).toBeDefined();
	});

	it('should return a failed result if request is invalid', async () => {
		const invalidBudgetName = '';
		const request = { name: invalidBudgetName };
		const createBudget = new CreateBudget(budgetRepository);

		const newBudgetResult = await createBudget.execute(request);

		expect(newBudgetResult.isSuccess).toBeFalsy();
		expect(newBudgetResult.error).toBeDefined();
	});
});
