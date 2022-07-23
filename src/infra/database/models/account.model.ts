import mongoose, { Schema } from 'mongoose';

const accountSchema = new Schema({
	name: { type: String, required: true },

	budgetId: { type: Schema.Types.ObjectId, ref: 'budget' },
});

export const AccountModel = mongoose.model('account', accountSchema);
