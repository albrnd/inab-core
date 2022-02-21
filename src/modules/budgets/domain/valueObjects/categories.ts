import Category from 'modules/budgets/domain/entities/category';

export default class Categories {
	private _items: Category[];

	constructor(categories: Category[]) {
		this._items = categories;
	}

	get items(): Category[] {
		return this._items;
	}
}
