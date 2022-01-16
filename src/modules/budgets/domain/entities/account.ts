import { StringGuard } from '../../../../shared/core/guards/StringGuard';
import { Entity, Guid } from '../../../../shared/domain';

export interface AccountProps {
	name: string;
	balance: number;
}

export default class Account extends Entity<AccountProps> {
	private constructor(props: AccountProps, id?: Guid) {
		super(props, id);
	}

	static init(props: AccountProps): Account {
		StringGuard.IsNotEmpty(props.name);

		return new Account(props);
	}

	get name(): string {
		return this.props.name;
	}

	get balance(): number {
		return this.props.balance;
	}
}
