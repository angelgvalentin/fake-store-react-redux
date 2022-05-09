import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";

function App() {
    return (
        <div className="App">
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<ProductListing></ProductListing>}></Route>
                    <Route path="/product/:productId" element={<ProductDetails></ProductDetails>}></Route>
                    <Route>404 Not Found</Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
