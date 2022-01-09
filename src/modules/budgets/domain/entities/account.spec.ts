import Account, { AccountProps } from './account';

describe('Account', () => {
	const createAccount = (props?: Partial<AccountProps>) => {
		const defaultProps = { name: 'My Account', balance: 0 };

		const _props = { ...defaultProps, ...props };

		const account = new Account(_props);

		return {
			account,
			props: _props,
		};
	};

	it('should accept account props', () => {
		const { account } = createAccount();

		expect(account).toBeDefined();
	});

	it('should return the correct name', () => {
		const accountName = 'My Second Account';

		const { account } = createAccount({ name: accountName });

		expect(account.name).toEqual(accountName);
	});

	it('should return the correct balance', () => {
		const balance = 150000;

		const { account } = createAccount({ balance });

		expect(account.balance).toEqual(balance);
	});
});
