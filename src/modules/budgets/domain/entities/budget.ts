import Accounts from 'modules/budgets/domain/valueObjects/accounts';
import { StringGuard } from 'shared/core/guards/StringGuard';
import { Result } from 'shared/core/Result';
import { Entity, Guid } from 'shared/domain';

export interface BudgetProps {
	name: string;
	accounts: Accounts;
}

export default class Budget extends Entity<BudgetProps> {
	private constructor(props: BudgetProps, id?: Guid) {
		super(props, id);
	}

	static init(props: BudgetProps, id?: Guid): Result<Budget> {
		const error = StringGuard.isNotEmpty(props.name);

		if (error) {
			return Result.fail(error);
		}

		return Result.ok(new Budget(props, id));
	}

	get name(): string {
		return this.props.name;
	}

	get accounts(): Accounts {
		return this.props.accounts;
	}
}
