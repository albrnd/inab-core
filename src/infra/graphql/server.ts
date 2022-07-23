import 'reflect-metadata';
import dotenv from 'dotenv';

dotenv.config();

import { ApolloServer } from 'apollo-server';
import { createSchema } from './utils/createSchema';
import { initDatabase } from 'infra/database';

const { PORT = 4000 } = process.env;

async function initServer(): Promise<ApolloServer> {
	return new ApolloServer({
		schema: await createSchema(),
	});
}

const runServer = async (): Promise<void> => {
	await initDatabase();

	initServer()
		.then((app) => app.listen(PORT))
		.then(({ url }) => {
			// eslint-disable-next-line no-console
			console.log(`🚀 Server ready at ${url}`);
		});
};

runServer();
