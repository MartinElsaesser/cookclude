import {createHTTPServer} from "@trpc/server/adapters/standalone";
import {z} from "zod";
import { publicProcedure, router } from "./trpc";
import cors from "cors";
import {db} from "./db"


const userRouter = router({
	findAll: publicProcedure.query(async () => {
		return await db.User.findAll();
	}),
	findById: publicProcedure.input(z.string()).query(async (opts) => {
		const {input} = opts;
		return await db.User.findById(input);
	})
});

const recipeRouter = router({
	findAll: publicProcedure.query(async () => {
		return await db.Recipe.findAll();
	}),
	findById: publicProcedure.input(z.string()).query(async (opts) => {
		const {input} = opts;
		return await db.Recipe.findById(input);
	})
});

const appRouter = router({
	user: userRouter,
	recipe: recipeRouter
});


export type AppRouter = typeof appRouter;

const server = createHTTPServer({
	router: appRouter,
	middleware: cors(),
});
server.listen(3000);