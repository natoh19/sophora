import React, {useEffect, useState} from 'react'
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
    const user = useSelector(state => state.session.user);
    const likes = useSelector(state => state.session.liked)
    const [exists, setExists] = useState(false)
    const {id}= useParams()


    useEffect(() => {
        dispatch(productStore.getAllProductsByCategory(id))
    }, [dispatch, id])

    useEffect(() =>{
        dispatch(session.getLoves())
    }, [dispatch])




    return (
        <Container id="grid-container">
            <Grid container spacing={4} className="grid-elements-container">
                {allProducts.map(product => (
                    <Grid key={product.id}  item xs={12} sm={6} md={4}>
                    <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
