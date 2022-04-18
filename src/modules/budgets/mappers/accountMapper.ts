import Account from 'modules/budgets/domain/entities/account';

export class AccountMapper {
	public static toDTO(account: Account) {
		return {
			id: account.id.value,
			budgetId: account.budgetId.value,
			name: account.name,
		};
	}
}
