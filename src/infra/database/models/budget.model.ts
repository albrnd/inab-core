import mongoose, { Schema } from 'mongoose';

const budgetSchema = new Schema({
	name: { type: String, required: true },

	accounts: [{ type: Schema.Types.ObjectId, ref: 'account' }],

	ownerId: { type: Schema.Types.ObjectId, ref: 'user' },
});

export const BudgetModel = mongoose.model('budget', budgetSchema);
