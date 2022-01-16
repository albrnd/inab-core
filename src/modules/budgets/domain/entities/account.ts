import { StringGuard } from '../../../../shared/core/guards/StringGuard';

export interface AccountProps {
	name: string;
	balance: number;
}

export default class Account {
	private readonly props: AccountProps;

	private constructor(props: AccountProps) {
		this.props = props;
		
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