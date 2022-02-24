import { Result } from 'shared/core/Result';

import Accounts from 'modules/budgets/domain/valueObjects/accounts';

import Account from './account';
import Budget, { BudgetProps } from './budget';

describe('Budget', () => {
	type CreateBudget = {
		budgetResult: Result<Budget>;
		props: Partial<BudgetProps>;
	};

	const createBudget = (props?: Partial<BudgetProps>): CreateBudget => {
		const defaultProps = { name: 'Test Budget', accounts: Accounts.init([]) };
		const _props = { ...defaultProps, ...props };

		const budgetResult = Budget.init(_props);

		return {
			budgetResult,
			props: _props,
		};
	};

	describe('init', () => {
		it('should accept budget props', () => {
			const { budgetResult } = createBudget();

			expect(budgetResult.isSuccess).toBeTruthy();
			expect(budgetResult.value).toBeDefined();
		});

		it('should not accept an empty name', () => {
			const budgetName = '';

			const { budgetResult } = createBudget({ name: budgetName });

			expect(() => budgetResult.value).toThrowError();
		});
	});

	it('should return the correct name', () => {
		const budgetName = 'Test Budget';

		const { budgetResult } = createBudget({ name: budgetName });

		expect(budgetResult.value.name).toEqual(budgetName);
	});

	it('should return the correct accounts', () => {
		const account = Account.init({ name: 'My Account', balance: 20000 }).value;

		const {
			budgetResult: { value },
		} = createBudget({ accounts: Accounts.init([account]) });

		expect(value.accounts.items).toHaveLength(1);
		expect(value.accounts.items[0]).toEqual(account);
	});
});
