import TransactionAmount from 'modules/budgets/domain/valueObjects/transactionAmount';
import { Entity, Guid } from 'shared/domain';

export interface TransactionProps {
	budgetId: Guid;
	accountId: Guid;
	amount: TransactionAmount;
}

export default class Transaction extends Entity<TransactionProps> {
	private constructor(props: TransactionProps, id?: Guid) {
		super(props, id);
	}

	static init(props: TransactionProps, id?: Guid) {
		return new Transaction(props, id);
	}

	get budgetId(): Guid {
		return this.props.budgetId;
	}

	get accountId(): Guid {
		return this.props.accountId;
	}

	get amount(): TransactionAmount {
		return this.props.amount;
	}
}
