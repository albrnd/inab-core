import Accounts from '../valueTypes/accounts';
import Account from './account';
import Budget, { BudgetProps } from './budget';

describe('Budget', () => {
	const createBudget = (props?: Partial<BudgetProps>) => {
		const defaultProps = { name: 'Test Budget', accounts: new Accounts([]) };

		const _props = { ...defaultProps, ...props };

		const budget = Budget.init(_props);

		return {
			budget,
			props: _props,
		};
	};

	describe('init', () => {
		it('should accept budget props', () => {
			const { budget } = createBudget();

			expect(budget).toBeDefined();
		});

		it('should not accept an empty name', () => {
			const budgetName = '';

			expect(() => createBudget({ name: budgetName })).toThrowError();
		});
	});

	it('should return the correct name', () => {
		const budgetName = 'Test Budget';

		const { budget } = createBudget({ name: budgetName });

		expect(budget.name).toEqual(budgetName);
	});

	it('should return the correct accounts', () => {
		const account = Account.init({ name: 'My Account', balance: 20000 });

		const { budget } = createBudget({ accounts: new Accounts([account]) });

		expect(budget.accounts.items).toHaveLength(1);
		expect(budget.accounts.items[0]).toEqual(account);
	});
});
