import Budget from 'modules/budgets/domain/entities/budget';

export class BudgetMapper {
	public static toDTO(budget: Budget) {
		return {
			id: budget.id.value,
			name: budget.name,
			ownerId: budget.ownerId.value,
		};
	}
}
