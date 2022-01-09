export interface AccountProps {
	name: string;
	balance: number;
}

export default class Account {
	private readonly props: AccountProps;

	private constructor(props: AccountProps) {
		this.props = props;
		
	}

	static init(props: AccountProps): Account{
		// TODO: Guards
		AccountGuards.EmptyName(props.name);

		return new Account(props);
	}

	get name(): string {
		return this.props.name;
	}

	get balance(): number {
		return this.props.balance;
	}

}

// FIXME: refactor with more finesse
class AccountGuards {
	static EmptyName(name: string) {
		if (name.length === 0) {
			throw new Error('Invalid Name');
		}
	}
}