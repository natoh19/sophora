import React, { useEffect} from "react";
import Container from '@material-ui/core/Container';
import Header from '../header/Header'
import { useDispatch, useSelector } from "react-redux";
import * as productStore from '../../store/product'
import './homePage.css'

export default function HomePage() {

    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.product.products)
    const allCatProducts = useSelector(state => state.product.products)


    // useEffect(() => {
    //     // console.log('hello')
    //     dispatch(productStore.getAllProductsByCategory())
    // }, [dispatch])

    useEffect(() => {
        dispatch(productStore.getAllProducts())
    }, [dispatch])

    return (



        <Header />



        //     {allProducts.map(product => (
        //          <div key={product.id}>{product.name}</div>
        //  ))}





    )
}
