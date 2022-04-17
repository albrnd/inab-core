import { CreateBudget } from './CreateBudget';
import CreateBudgetFactory from './CreateBudgetFactory';

describe('GetBudgetFactory', () => {
	it('should return the correct instance', () => {
		const getBudget = CreateBudgetFactory();
		expect(getBudget).toBeInstanceOf(CreateBudget);
	});
});
