import TransactionAmount from 'modules/budgets/domain/valueObjects/transactionAmount';
import { Result } from 'shared/core/Result';
import { Guid } from 'shared/domain';
import Transaction, { TransactionProps } from './transaction';

describe('Transaction', () => {
	type CreateTransaction = {
		transactionResult: Result<Transaction>;
		props: Partial<TransactionProps>;
	};

	const createTransaction = (
		_props?: Partial<TransactionProps>
	): CreateTransaction => {
		const defaultProps = {
			budgetId: Guid.init(),
			accountId: Guid.init(),
			accountName: 'Savings Account',
			amount: TransactionAmount.init({ value: -123 }).value,
		};

		const props = { ...defaultProps, ..._props };
		const transactionResult = Transaction.init(props);

		return {
			transactionResult,
			props,
		};
	};

	describe('init', () => {
		it('should accept transaction props', () => {
			const { transactionResult } = createTransaction();

			expect(transactionResult.isSuccess).toBeTruthy();
			expect(transactionResult.value).toBeDefined();
		});
	});

	describe('budgetId', () => {
		it('should return the correct budgetId', () => {
			const budgetId = new Guid('c05ebeda-d066-4a81-b3bd-f5e9533504c5');

			const { transactionResult } = createTransaction({ budgetId });

			expect(transactionResult.value.budgetId).toEqual(budgetId);
		});
	});

	describe('accountId', () => {
		it('should return the correct accountId', () => {
			const accountId = new Guid('78de88ae-5e81-4038-9d38-7d4f7e6caf3d');

			const { transactionResult } = createTransaction({ accountId });

			expect(transactionResult.value.accountId).toEqual(accountId);
		});
	});

	describe('amount', () => {
		it('should return the correct amount', () => {
			const amount = TransactionAmount.init({ value: 444 }).value;

			const { transactionResult } = createTransaction({ amount });

			expect(transactionResult.value.amount).toEqual(amount);
		});
	});
});
