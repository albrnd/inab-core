import mongoose, { Schema } from 'mongoose';

const categorySchema = new Schema({
	name: { type: String, required: true },
});

const mainCategorySchema = new Schema({
	name: { type: String, required: true },

	categories: [categorySchema],
});

export const MainCategoryModel = mongoose.model(
	'mainCategory',
	mainCategorySchema
);
