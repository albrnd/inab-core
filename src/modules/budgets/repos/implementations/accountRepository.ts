import Account from 'modules/budgets/domain/entities/account';
import Accounts from 'modules/budgets/domain/valueObjects/accounts';
import { Guid } from 'shared/domain';
import { IAccountRepository } from '../interfaces/accountRepository';

export class AccountRepository implements IAccountRepository {
	getAccountById(accountId: Guid): Promise<Account> {
		throw new Error('Method not implemented.');
	}

	getAccountsByBudgetId(budgetId: Guid): Promise<Accounts> {
		throw new Error('Method not implemented.');
	}

	save(account: Account): Promise<void> {
		throw new Error('Method not implemented.');
	}
}
