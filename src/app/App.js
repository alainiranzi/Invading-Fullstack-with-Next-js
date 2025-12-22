import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/products", element: <ProductsPage /> },
]);
        
        function App() {
            return <routerProvider router={router} />;
        }

export default App;