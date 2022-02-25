import MainCategory, { MainCategoryProps } from './mainCategory';

import Categories from 'modules/budgets/domain/valueObjects/categories';
import Category from 'modules/budgets/domain/entities/category';

import { Result } from 'shared/core/Result';

import faker from '@faker-js/faker';

describe('Main Category', () => {
	type CreateMainCategory = {
		mainCategoryResult: Result<MainCategory>;
		props: Partial<MainCategoryProps>;
	};

	const createMainCategory = (
		props?: Partial<MainCategoryProps>
	): CreateMainCategory => {
		const defaultProps = {
			name: faker.random.words(),
			categories: new Categories([]),
		};
		const _props = { ...defaultProps, ...props };

		const mainCategoryResult = MainCategory.init(_props);

		return {
			mainCategoryResult,
			props: _props,
		};
	};

	describe('init', () => {
		it('should accept main category props', () => {
			const { mainCategoryResult } = createMainCategory();

			expect(mainCategoryResult.isSuccess).toBeTruthy();
			expect(mainCategoryResult.value).toBeDefined();
		});

		it('should not accept an empty name', () => {
			const mainCategoryName = '';

			const { mainCategoryResult } = createMainCategory({
				name: mainCategoryName,
			});

			expect(() => mainCategoryResult.value).toThrowError();
		});
	});

	describe('name', () => {
		it('should return the correct name', () => {
			const mainCategoryName = faker.random.words();

			const { mainCategoryResult } = createMainCategory({
				name: mainCategoryName,
			});

			expect(mainCategoryResult.value.name).toEqual(mainCategoryName);
		});
	});

	describe('categories', () => {
		it('should return the correct accounts', () => {
			const category = Category.init({
				name: faker.random.words(),
				budgetAmount: faker.datatype.number(),
			}).value;

			const {
				mainCategoryResult: { value },
			} = createMainCategory({ categories: new Categories([category]) });

			expect(value.categories.items).toHaveLength(1);
			expect(value.categories.items[0]).toEqual(category);
		});
	});
});
