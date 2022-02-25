import { Result } from 'shared/core/Result';
import Account, { AccountProps } from './account';

import faker from '@faker-js/faker';

describe('Account', () => {
	type CreateAccount = {
		accountResult: Result<Account>;
		props: Partial<AccountProps>;
	};

	const createAccount = (props?: Partial<AccountProps>): CreateAccount => {
		const defaultProps = {
			name: faker.finance.accountName(),
			balance: faker.datatype.number(),
		};

		const _props = { ...defaultProps, ...props };

		const accountResult = Account.init(_props);

		return {
			accountResult,
			props: _props,
		};
	};

	describe('init', () => {
		it('should accept account props', () => {
			const { accountResult } = createAccount();

			expect(accountResult.isSuccess).toBeTruthy();
			expect(accountResult.value).toBeDefined();
		});

		it('should not accept an empty name', () => {
			const accountName = '';

			const { accountResult } = createAccount({ name: accountName });

			expect(() => accountResult.value).toThrowError();
		});
	});

	describe('name', () => {
		it('should return the correct name', () => {
			const accountName = 'My Second Account';

			const { accountResult } = createAccount({ name: accountName });

			expect(accountResult.value.name).toEqual(accountName);
		});
	});

	describe('balance', () => {
		it('should return the correct balance', () => {
			const balance = faker.datatype.number();

			const { accountResult } = createAccount({ balance });

			expect(accountResult.value.balance).toEqual(balance);
		});
	});
});
