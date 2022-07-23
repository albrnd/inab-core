import { GetBudget } from './GetBudget';

import { budgetRepository } from 'modules/budgets/repos';
import { Guid } from 'shared/domain';

import faker from '@faker-js/faker';

describe('GetBudget', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should return the correct budget given the id', async () => {
		const randomBudgetId = new Guid(faker.datatype.uuid());
		const getBudget = new GetBudget(budgetRepository);

		const budgetResult = await getBudget.execute({ budgetId: randomBudgetId });

		expect(budgetResult.isSuccess).toBeTruthy();
		expect(budgetResult.value?.id).toEqual(randomBudgetId);
	});

	it('should return an error if budget is not found', async () => {
		jest.spyOn(budgetRepository, 'getBudgetById').mockImplementation(() => {
			throw new Error('Budget not found');
		});

		const randomBudgetId = new Guid(faker.datatype.uuid());
		const getBudget = new GetBudget(budgetRepository);

		const budgetResult = await getBudget.execute({ budgetId: randomBudgetId });

		expect(budgetResult.isFailure).toBeTruthy();
	});
});
