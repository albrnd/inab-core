import Category, { CategoryProps } from './category';
import { Result } from 'shared/core/Result';

describe('Category', () => {
	type CreateCategory = {
		categoryResult: Result<Category>;
		props: Partial<CategoryProps>;
	};

	const createCategory = (props?: Partial<CategoryProps>): CreateCategory => {
		const defaultProps = { name: 'Test Category', budgetAmount: 5000 };
		const _props = { ...defaultProps, ...props };

		const categoryResult = Category.init(_props);

		return {
			categoryResult,
			props: _props,
		};
	};

	describe('init', () => {
		it('should accept category props', () => {
			const { categoryResult } = createCategory();

			expect(categoryResult.isSuccess).toBeTruthy();
			expect(categoryResult.value).toBeDefined();
		});

		it('should not accept an empty name', () => {
			const categoryName = '';

			const { categoryResult } = createCategory({ name: categoryName });

			expect(() => categoryResult.value).toThrowError();
		});
	});

	describe('name', () => {
		it('should return the correct name', () => {
			const categoryName = 'My First Category';

			const { categoryResult } = createCategory({ name: categoryName });

			expect(categoryResult.value.name).toEqual(categoryName);
		});
	});

	describe('budgetAmount', () => {
		it('should return the correct budget amount', () => {
			const budgetAmount = 10000;

			const { categoryResult } = createCategory({ budgetAmount });

			expect(categoryResult.value.budgetAmount).toEqual(budgetAmount);
		});
	});
});
