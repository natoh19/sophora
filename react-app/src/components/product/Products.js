import React from 'react'
import {useSelector} from 'react-redux'
import { Grid, Container } from "@material-ui/core";
import * as productStore from '../../store/product'

export default function Products() {
    const allProducts = useSelector(state => state.product.products)

    useEffect(() => {
        dispatch(productStore.getAllProducts())
    }, [dispatch])

    return (
        <Container id="container">
            <Grid container spacing={3}>
                {allProducts.map(product => (
                    <Grid key={product.id}  item xs={12} sm={8} md={4}>
                    <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
