import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export default class BudgetType {
	@Field(() => ID)
	id: string;

	@Field()
	name: string;
}
