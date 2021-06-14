import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// import {useParams} from 'react-router-dom'
import { Grid, Container } from "@material-ui/core";
import * as productStore from '../../store/product'
import ProductCard from './ProductCard'
import * as session from '../../store/session'
import './grid.css'


export default function HomePageProducts() {
    const allProducts = useSelector(state => state.product.products)
    const dispatch = useDispatch()
    // const {id}= useParams()


    useEffect(() => {
        dispatch(productStore.getAllProducts())
    }, [dispatch])

    useEffect(() =>{
        dispatch(session.getLoves())
    }, [dispatch])



    return (
        <Container id="grid-container" >
            <Grid container spacing={4} className="grid-elements-container">
                {allProducts.map(product => (
                    <Grid key={product.id}  item xs={12} sm={6} md={4} style={{margin: '0 auto'}} >
                    <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
