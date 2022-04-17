import { GetBudget } from './GetBudget';
import GetBudgetFactory from './GetBudgetFactory';

describe('GetBudgetFactory', () => {
	it('should return the correct instance', () => {
		const getBudget = GetBudgetFactory();
		expect(getBudget).toBeInstanceOf(GetBudget);
	});
});
