import {React, useState} from "react"
import './app.css'

import ProductList from "../ProductList/ProductList";
import Main from "../Main/Main";
const App = () => {
    console.log("Starting");
    const [productsState,setProductsState] = useState({
        products:[
            {
                title: "شما نسخه برتر هستید !",
                price: "2,500,000",
                id: 0
            },
            {
                title: "جادوی فکر بزرگ",
                price: "1,500,000",
                id: 1
            },
            {
                title: "چهار اثر فلورانس",
                price: "1,200,000",
                id: 2
            },
            {
                title: "اثر مرکب",
                price: "980,000",
                id: 3
            },
            {
                title: "قدرت نامحدود",
                price: "1,100,000",
                id: 4
            },
            {
                title: "365 گام موفقیت",
                price: "1,750,000",
                id: 5
            },
        ],
        ShowProducts : true
    });

    const ChangeTitle = (e,index) => {
        let data = productsState.products;
        data[index].title = e.target.value;
        setProductsState({products: data,ShowProducts : true});
        // setProductsState(data);
    };

    const ChangePrice = (e,index) => {
        let data = productsState.products;
        data[index].price = e.target.value;
        setProductsState({products: data,ShowProducts : true});
    };

    const ShowHandler = () => {
        let flag = productsState.ShowProducts ? false : true;
        setProductsState({products: productsState.products,ShowProducts : flag});
    };

    const DeleteProduct = (index) =>{
        const data = [...productsState.products]
        // let data = productsState.products;
        // data = data.filter(item => {
        //     return item.index !== index ? item : null;
        // });
        data.splice(index,1);
        setProductsState({products: data,ShowProducts :true});
    }
    let productsDiv = null;
    if (productsState.ShowProducts){
        productsDiv = (
            <div className="app-product-list-div">
                <ProductList 
                    products= {productsState.products}
                    Delete= {DeleteProduct}
                    ChangeTitle = {ChangeTitle}
                    ChangePrice = {ChangePrice}
                />
            </div> 
        );
    }
    

    return (
        <div>
            <Main ShowHandler={ShowHandler}/>
            {
                productsDiv
            }
        </div>
    );
}

export default App;