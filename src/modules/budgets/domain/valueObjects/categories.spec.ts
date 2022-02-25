import Categories from './categories';

import Category from 'modules/budgets/domain/entities/category';

import faker from '@faker-js/faker';

describe('Categories', () => {
	it('should accept an array of accounts', () => {
		const category = Category.init({
			name: faker.random.words(),
			budgetAmount: faker.datatype.number({ precision: 0.01 }),
		}).value;

		const categories = new Categories([category]);

		expect(categories.items).toHaveLength(1);
		expect(categories.items[0]).toEqual(category);
	});
});
