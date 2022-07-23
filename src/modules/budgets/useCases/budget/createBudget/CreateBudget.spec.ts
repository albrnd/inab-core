import { CreateBudget } from './CreateBudget';

import { budgetRepository } from 'modules/budgets/repos';

import faker from '@faker-js/faker';

describe('Create Budget', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should create a budget', async () => {
		const createBudget = new CreateBudget(budgetRepository);
		const newBudgetResult = await createBudget.execute({
			name: faker.random.words(),
			ownerId: faker.datatype.uuid(),
		});

		expect(newBudgetResult.isSuccess).toBeTruthy();
		expect(newBudgetResult.value).toBeDefined();
	});

	it('should return a failed result if request is invalid', async () => {
		const invalidBudgetName = '';
		const request = { name: invalidBudgetName, ownerId: faker.datatype.uuid() };
		const createBudget = new CreateBudget(budgetRepository);

		const newBudgetResult = await createBudget.execute(request);

		expect(newBudgetResult.isSuccess).toBeFalsy();
		expect(newBudgetResult.error).toBeDefined();
	});
});
