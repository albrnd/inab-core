import TransactionAmount from 'modules/budgets/domain/valueObjects/transactionAmount';
import { Guid } from 'shared/domain';
import Transaction, { TransactionProps } from './transaction';

describe('Transaction', () => {
	const createTransaction = (_props?: Partial<TransactionProps>) => {
		const defaultProps = {
			budgetId: Guid.init(),
			accountId: Guid.init(),
			accountName: 'Savings Account',
			amount: TransactionAmount.init({ value: -123 }),
		};

		const props = { ...defaultProps, ..._props };
		const transaction = Transaction.init(props);

		return {
			transaction,
			props,
		};
	};

	describe('init', () => {
		it('should accept transaction props', () => {
			const { transaction } = createTransaction();

			expect(transaction).toBeDefined();
		});
	});

	describe('budgetId', () => {
		it('should return the correct budgetId', () => {
			const budgetId = new Guid('c05ebeda-d066-4a81-b3bd-f5e9533504c5');

			const { transaction } = createTransaction({ budgetId });

			expect(transaction.budgetId).toEqual(budgetId);
		});
	});

	describe('accountId', () => {
		it('should return the correct accountId', () => {
			const accountId = new Guid('78de88ae-5e81-4038-9d38-7d4f7e6caf3d');

			const { transaction } = createTransaction({ accountId });

			expect(transaction.accountId).toEqual(accountId);
		});
	});

	describe('amount', () => {
		it('should return the correct amount', () => {
			const amount = TransactionAmount.init({ value: 444 });

			const { transaction } = createTransaction({ amount });

			expect(transaction.amount).toEqual(amount);
		});
	});
});
