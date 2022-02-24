import Account from 'modules/budgets/domain/entities/account';

export default class Accounts {
	private _items: Account[];

	private constructor(accounts: Account[]) {
		this._items = accounts;
	}

	get items(): Account[] {
		return this._items;
	}

	static init(accounts: Account[]): Accounts {
		return new Accounts(accounts);
	}
}
