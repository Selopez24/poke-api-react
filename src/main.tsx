import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import { routesConfig } from "./routes/routesConfig";

const router = createBrowserRouter(routesConfig);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App>
				<RouterProvider router={router} />
			</App>
		</QueryClientProvider>
	</React.StrictMode>
);
