import { createTRPCClient, createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@/../../server/index.ts";

export const trpc = createTRPCProxyClient<AppRouter>({
	links: [
		httpBatchLink({
			url: "http://localhost:3000",
		})
	]

});
