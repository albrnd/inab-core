import Accounts from '../valueTypes/accounts';

export interface BudgetProps {
	name: string;
	accounts: Accounts;
}

export default class Budget {
	private readonly props: BudgetProps;

	constructor(props: BudgetProps) {
		this.props = props;
	}

	get name(): string {
		return this.props.name;
	}

	get accounts(): Accounts {
		return this.props.accounts;
	}
}
