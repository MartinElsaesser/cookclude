import {createTRPCProxyClient, httpBatchLink} from "@trpc/client";
import type {AppRouter} from "../cookclude-server";

const trpc = createTRPCProxyClient<AppRouter>({
	links: [
		httpBatchLink({
			url: "http://localhost:3000",
		})
	]

});

async function main() {


const data = await trpc.all.query();
console.log(data);
}

main();




