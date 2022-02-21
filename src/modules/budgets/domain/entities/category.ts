import { StringGuard } from 'shared/core/guards/StringGuard';
import { Result } from 'shared/core/Result';
import { Entity, Guid } from 'shared/domain';

export interface CategoryProps {
	name: string;
	budgetAmount: number;
}

export default class Category extends Entity<CategoryProps> {
	private constructor(props: CategoryProps, id?: Guid) {
		super(props, id);
	}

	static init(props: CategoryProps, id?: Guid): Result<Category> {
		const error = StringGuard.isNotEmpty(props.name);

		if (error) {
			return Result.fail(error);
		}

		return Result.ok(new Category(props, id));
	}

	get name(): string {
		return this.props.name;
	}

	get budgetAmount(): number {
		return this.props.budgetAmount;
	}
}
