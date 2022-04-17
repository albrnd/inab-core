import BudgetResolver from '../budget/budgetResolver';

import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';

export const createSchema = () =>
	buildSchema({
		resolvers: [BudgetResolver],
		container: Container,
	});
