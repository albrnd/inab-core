import Account from 'modules/budgets/domain/entities/account';
import Accounts from './accounts';

describe('Accounts', () => {
	it('should accept an array of accounts', () => {
		const accounts = new Accounts([]);

		expect(accounts).toBeDefined();
	});

	it('should set the initial value of accounts', () => {
		const account = Account.init({ name: 'Account', balance: 1000 }).value;

		const accounts = new Accounts([account]);

		expect(accounts.items).toHaveLength(1);
		expect(accounts.items[0]).toEqual(account);
	});
});
