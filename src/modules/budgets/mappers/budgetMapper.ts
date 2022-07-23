import Budget from 'modules/budgets/domain/entities/budget';

export class BudgetMapper {
	public static toDTO(budget: Budget) {
		return {
			id: budget.id.value,
			name: budget.name,
			ownerId: budget.ownerId?.value || Guid.init(),
		};
	}

	public static toModel(budget: Budget): unknown {
		return {
			_id: budget.id.value,

			name: budget.name,

			ownerId: budget.ownerId.value,

			accounts: budget.accounts.items.map((item) => item.id),
		};
	}

	public static toDomain(budget: any) {
		const budgetResult = Budget.init(
			{
				name: budget.name,
				accounts: budget.accounts,
				ownerId: budget.owner,
			},
			budget._id
		);

		return budgetResult.isSuccess ? budgetResult.value : null;
	}
}
