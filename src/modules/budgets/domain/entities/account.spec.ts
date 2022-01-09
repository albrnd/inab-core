import Account, { AccountProps } from './account';

describe('Account', () => {
	const createAccount = (props?: Partial<AccountProps>) => {
		const defaultProps = { name: 'My Account', balance: 0 };

		const _props = { ...defaultProps, ...props };

		const account = Account.init(_props);


		return {
			account,
			props: _props,
		};
	};

	describe('init', () => {
		it('should accept account props', () => {
			const { account } = createAccount();
	
			expect(account).toBeDefined();
		});


		it('should not accept an empty name', () => {
			const accountName = '';

			expect(() => createAccount({ name: accountName })).toThrowError();
		});
	});

	describe('name', () => {
		it('should return the correct name', () => {
			const accountName = 'My Second Account';
			
			const { account } = createAccount({ name: accountName });
			
			expect(account.name).toEqual(accountName);
		});
	});

	describe('balance', () => {
		it('should return the correct balance', () => {
			const balance = 150000;
			
			const { account } = createAccount({ balance });
			
			expect(account.balance).toEqual(balance);
		});
	});
});
