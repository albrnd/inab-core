import mongoose from 'mongoose';

const { DB_URI } = process.env;

export const initDatabase = async (): Promise<void> => {
	const options: Partial<mongoose.CallbackWithoutResult> = {
		useUnifiedTopology: true,
	};

	mongoose.connect(DB_URI, options);
};
