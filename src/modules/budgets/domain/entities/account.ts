import { Guard } from 'shared/core/guards/Guard';
import { StringGuard } from 'shared/core/guards/StringGuard';
import { Result } from 'shared/core/Result';
import { Entity, Guid } from 'shared/domain';

export interface AccountProps {
	budgetId: Guid;
	name: string;
	balance: number;
}

export default class Account extends Entity<AccountProps> {
	private constructor(props: AccountProps, id?: Guid) {
		super(props, id);
	}

	static init(props: AccountProps, id?: Guid): Result<Account> {
		const error =
			Guard.isNotNullOrUndefined(props.name, 'Name') ||
			StringGuard.isNotEmpty(props.name);

		if (error) {
			return Result.fail(error);
		}

		return Result.ok(new Account(props, id));
	}

	get budgetId(): Guid {
		return this.props.budgetId;
	}

	get name(): string {
		return this.props.name;
	}

	get balance(): number {
		return this.props.balance;
	}
}
