import Category from 'modules/budgets/domain/entities/category';
import Categories from './categories';

describe('Categories', () => {
	it('should accept an array of accounts', () => {
		const category = Category.init({
			name: 'This Category',
			budgetAmount: 4000,
		}).value;

		const categories = new Categories([category]);

		expect(categories.items).toHaveLength(1);
		expect(categories.items[0]).toEqual(category);
	});
});
