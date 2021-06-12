import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import { Grid, Container } from "@material-ui/core";
import * as productStore from '../../store/product'
import ProductCard from './ProductCard'
// import * as lovesStore from '../../store/loves'
import * as session from '../../store/session'
import './grid.css'


export default function Products() {
    const allProducts = useSelector(state => state.product.products)
    const dispatch = useDispatch()
    const {id}= useParams()




    // useEffect(() => {
    //     dispatch(productStore.getAllProducts())
    // }, [dispatch])


    useEffect(() => {
        dispatch(productStore.getAllProductsByCategory(id))
    }, [dispatch, id])

    useEffect(() =>{
        dispatch(session.getLoves())
    }, [dispatch])



    return (
        <Container id="container" style={{paddingTop: '11em', marginBottom: '10em'}}>
            <Grid container spacing={3} className="grid-elements-container">
                {allProducts.map(product => (
                    <Grid key={product.id}  item xs={12} sm={8} md={4}>
                    <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
