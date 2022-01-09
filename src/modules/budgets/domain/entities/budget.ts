import { StringGuard } from '../../../../shared/core/guards/StringGuard';
import Accounts from '../valueTypes/accounts';

export interface BudgetProps {
	name: string;
	accounts: Accounts;
}

export default class Budget {
	private readonly props: BudgetProps;

	private constructor(props: BudgetProps) {
		this.props = props;
	}

	static init(props: BudgetProps): Budget {
		StringGuard.IsNotEmpty(props.name);

		return new Budget(props);
	}

	get name(): string {
		return this.props.name;
	}

	get accounts(): Accounts {
		return this.props.accounts;
	}
}
