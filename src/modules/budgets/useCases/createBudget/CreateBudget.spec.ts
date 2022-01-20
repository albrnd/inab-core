import { CreateBudget } from './CreateBudget';

describe('Create Budget', () => {
	it('should create a budget', async () => {
		const createBudget = new CreateBudget();
		const newBudgetResult = await createBudget.execute({ name: 'My Budget ' });

		expect(newBudgetResult.isSuccess).toBeTruthy();
		expect(newBudgetResult.value).toBeDefined();
	});

	it('should throw an error if request is invalid', async () => {
		const request = { name: '' };
		const createBudget = new CreateBudget();
		const newBudgetResult = await createBudget.execute(request);

		expect(() => newBudgetResult.value).toThrowError();
	});
});
