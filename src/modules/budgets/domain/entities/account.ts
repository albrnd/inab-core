import { StringGuard } from 'shared/core/guards/StringGuard';
import { Result } from 'shared/core/Result';
import { Entity, Guid } from 'shared/domain';

export interface AccountProps {
	name: string;
	balance: number;
}

export default class Account extends Entity<AccountProps> {
	private constructor(props: AccountProps, id?: Guid) {
		super(props, id);
	}

	static init(props: AccountProps): Result<Account> {
		const error = StringGuard.isNotEmpty(props.name);

		if (error) {
			return Result.fail(error);
		}

		return Result.ok(new Account(props));
	}

	get name(): string {
		return this.props.name;
	}

	get balance(): number {
		return this.props.balance;
	}
}
