import { Guard } from '../../../../shared/core/guards/Guard';

interface TransactionAmountProps {
	value: number;
}

export default class TransactionAmount {
	private props: TransactionAmountProps;

	private constructor(props: TransactionAmountProps) {
		this.props = props;
	}

	get value(): number {
		return this.value;
	}

	public static init(props: TransactionAmountProps): TransactionAmount {
		Guard.isNotNullOrUndefined(props.value, 'TransactionAmount');

		return new TransactionAmount(props);
	}
}
