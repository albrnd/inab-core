import AccountType from 'infra/graphql/account/types/AccountType';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export default class BudgetType {
	@Field(() => ID)
	id: string;

	@Field()
	name: string;

	@Field(() => [AccountType])
	accounts: [AccountType];

	@Field(() => ID)
	ownerId: string;
}
