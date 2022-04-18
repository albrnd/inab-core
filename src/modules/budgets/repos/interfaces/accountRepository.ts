import Account from 'modules/budgets/domain/entities/account';
import Accounts from 'modules/budgets/domain/valueObjects/accounts';
import { Guid } from 'shared/domain';

export interface IAccountRepository {
	getAccountById(accountId: Guid): Promise<Account>;
	getAccountsByBudgetId(budgetId: Guid): Promise<Accounts>;

	save(account: Account): Promise<void>;
}
