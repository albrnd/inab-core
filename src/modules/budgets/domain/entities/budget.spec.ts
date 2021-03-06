import Budget, { BudgetProps } from './budget';
import Account from './account';

import Accounts from 'modules/budgets/domain/valueObjects/accounts';

import { Guid } from 'shared/domain';
import { Result } from 'shared/core/Result';

import faker from '@faker-js/faker';

describe('Budget', () => {
	type CreateBudget = {
		budgetResult: Result<Budget>;
		props: Partial<BudgetProps>;
	};

	const createBudget = (props?: Partial<BudgetProps>): CreateBudget => {
		const defaultProps = {
			name: faker.random.words(),
			accounts: Accounts.init([]),
			ownerId: new Guid(faker.datatype.uuid()),
		};

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
		const account = Account.init({
			budgetId: new Guid(faker.datatype.uuid()),
			name: faker.finance.accountName(),
			balance: faker.datatype.number({ precision: 0.01 }),
		}).value;

		const {
			budgetResult: { value },
		} = createBudget({ accounts: Accounts.init([account]) });

		expect(value.accounts.items).toHaveLength(1);
		expect(value.accounts.items[0]).toEqual(account);
	});
});
