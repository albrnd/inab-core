import 'reflect-metadata';
import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server';
import { createSchema } from './utils/createSchema';

dotenv.config();

const { PORT = 4000 } = process.env;

async function initServer(): Promise<ApolloServer> {
	return new ApolloServer({
		schema: await createSchema(),
	});
}

initServer()
	.then((app) => app.listen(PORT))
	.then(({ url }) => {
		// eslint-disable-next-line no-console
		console.log(`🚀 Server ready at ${url}`);
	});
