import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import ComicBookPage from "./pages/comic-book/index.tsx";
import FaqPage from "./pages/faq/index.tsx";
import GamingStorePage from "./pages/gaming-store/index.tsx";
import MainNewsPage from "./pages/main-news/index.tsx";
import MerchandisePage from "./pages/merchandise/index.tsx";
import SupportPage from "./pages/support/index.tsx";
import TestPage from "./pages/test/index.tsx";
import WhatIsEscomPage from "./pages/what-is-escom/index.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/test",
		element: <TestPage />,
	},
	{
		path: "/what-is-escom",
		element: <WhatIsEscomPage />,
	},
	{
		path: "/main-news",
		element: <MainNewsPage />,
	},
	{
		path: "/faq",
		element: <FaqPage />,
	},
	{
		path: "/comic-book",
		element: <ComicBookPage />,
	},
	{
		path: "/merchandise",
		element: <MerchandisePage />,
	},
	{
		path: "/support",
		element: <SupportPage />,
	},
	{
		path: "/gaming-store",
		element: <GamingStorePage />,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
