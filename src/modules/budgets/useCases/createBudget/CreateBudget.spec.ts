import { CreateBudget } from './CreateBudget';

describe('Create Budget', () => {
	it('should create a budget', async () => {
		const createBudget = new CreateBudget();
		const newBudget = await createBudget.execute({ name: 'My Budget ' });

		expect(newBudget).toBeDefined();
	});

	it('should throw an error if request is invalid', async () => {
		const request = { name: '' };
		const createBudget = new CreateBudget();

		await expect(createBudget.execute(request)).rejects.toThrowError();
	});
});
