import { IAccountRepository } from '../interfaces/accountRepository';

import { AccountModel } from 'infra/database/models/account.model';

import Account from 'modules/budgets/domain/entities/account';
import Accounts from 'modules/budgets/domain/valueObjects/accounts';

import { Guid } from 'shared/domain';
import { AccountMapper } from 'modules/budgets/mappers/accountMapper';
import { BudgetModel } from 'infra/database/models/budget.model';

export class AccountRepository implements IAccountRepository {
	async getAccountById(accountId: Guid): Promise<Account> {
		const account = await AccountModel.findById(accountId.value);

		if (!account) {
			throw new Error('Account not found');
		}

		return AccountMapper.toDomain(account);
	}

	async getAccountsByBudgetId(budgetId: Guid): Promise<Accounts> {
		const budget = await BudgetModel.findById(budgetId).populate('accounts');

		if (!budget) {
			throw new Error('Budget not found');
		}

		const accounts = Accounts.init(
			budget.accounts.map((account) => AccountMapper.toDomain(account))
		);

		return accounts;
	}

	async save(account: Account): Promise<void> {
		const budget = await BudgetModel.findById(account.budgetId);

		if (!budget) {
			throw new Error('Budget not found');
		}

		const newAccount = new AccountModel(AccountMapper.toModel(account));
		await newAccount.save();

		budget.accounts.push(newAccount.toObject());

		await budget.save();
	}
}
