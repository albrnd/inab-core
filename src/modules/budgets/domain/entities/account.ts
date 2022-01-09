export interface AccountProps {
	name: string;
	balance: number;
}

export default class Account {
	private readonly props: AccountProps;

	constructor(props: AccountProps) {
		this.props = props;
	}

	get name(): string {
		return this.props.name;
	}

	get balance(): number {
		return this.props.balance;
	}
}
