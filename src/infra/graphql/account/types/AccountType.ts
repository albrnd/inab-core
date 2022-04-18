import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export default class AccountType {
	@Field(() => ID)
	id: string;

	@Field(() => ID)
	budgetId: string;

	@Field()
	name: string;
}
