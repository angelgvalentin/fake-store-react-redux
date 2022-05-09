import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_PRODUCTS } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    // console.log(products);

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("Err", err);
        });
        dispatch(SET_PRODUCTS(response.data)); //set_products is an action coming from our actions folder
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log("Products: ", products);

    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    );
};

export default ProductListing;
