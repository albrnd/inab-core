import Categories from 'modules/budgets/domain/valueObjects/categories';
import { StringGuard } from 'shared/core/guards/StringGuard';
import { Result } from 'shared/core/Result';
import { Entity, Guid } from 'shared/domain';

export interface MainCategoryProps {
	name: string;
	categories: Categories;
}

export default class MainCategory extends Entity<MainCategoryProps> {
	private constructor(props: MainCategoryProps, id?: Guid) {
		super(props, id);
	}

	static init(props: MainCategoryProps, id?: Guid): Result<MainCategory> {
		const error = StringGuard.isNotEmpty(props.name);

		if (error) {
			return Result.fail(error);
		}

		return Result.ok(new MainCategory(props, id));
	}

	get name(): string {
		return this.props.name;
	}

	get categories(): Categories {
		return this.props.categories;
	}
}
