import { Navigate, RouteObject } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home";
import List from "../pages/List/List";
import Favorites from "../pages/Favorites";
import Details from "../pages/Details";
import Header from "../components/Layout/Header";

export const routesConfig: RouteObject[] = [
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "home",
		element: (
			<>
				<Header />
				<Home />
			</>
		),
		children: [
			{
				path: "list",
				element: <List />,
			},
			{
				path: "favorites",
				element: <Favorites />,
			},

			{
				element: <Navigate to="list" replace />,
				index: true,
			},
		],
	},
	{
		path: "details/:id",
		element: (
			<>
				<Header />
				<Details />
			</>
		),
	},
];
