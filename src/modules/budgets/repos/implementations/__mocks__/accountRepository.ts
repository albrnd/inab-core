import Account from 'modules/budgets/domain/entities/account';
import Accounts from 'modules/budgets/domain/valueObjects/accounts';
import { IAccountRepository } from 'modules/budgets/repos/interfaces/accountRepository';

import { Guid } from 'shared/domain';

import faker from '@faker-js/faker';

export class AccountRepository implements IAccountRepository {
	async getAccountById(accountId: Guid): Promise<Account> {
		return this.createAccount(accountId);
	}

	async getAccountsByBudgetId(budgetId: Guid): Promise<Accounts> {
		const account = this.createAccount();
		const accounts = Accounts.init([account]);

		return accounts;
	}

	async save(account: Account): Promise<void> {}

	private createAccount(accountId?: Guid): Account {
		const accountResult = Account.init(
			{
				name: faker.finance.accountName(),
				balance: faker.datatype.number(),
			},
			accountId
		);

		return accountResult.value;
	}
}
