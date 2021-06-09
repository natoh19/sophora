import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Grid, Container } from "@material-ui/core";
import * as productStore from '../../store/product'
import ProductCard from './ProductCard'
// import * as lovesStore from '../../store/loves'
import * as session from '../../store/session'


export default function Products() {
    const allProducts = useSelector(state => state.product.products)
    const dispatch = useDispatch()




    useEffect(() => {
        dispatch(productStore.getAllProducts())
    }, [dispatch])

    useEffect(() =>{
        dispatch(session.getLoves())
    }, [])



    return (
        <Container id="container">
            <Grid container spacing={3}>
                {allProducts.map(product => (
                    <Grid key={product.id}  item xs={12} sm={8} md={4}>
                    <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
