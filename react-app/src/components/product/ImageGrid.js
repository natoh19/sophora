import React from 'react';
import { Grid } from '@material-ui/core'

export default function ImageGrid({images, onSelect, selected}){
    return (
        <Grid container direction="column" spacing={3}>
            {images.map((image, idx) => (
                <div key={idx} id="img_contain">
                <img src={image} alt="beauty product" onClick ={()=> onSelect(idx)}
                style={{border: idx === selected ? 'solid 1px #FF0000' : 'solid 1px #c2bebb',
                 cursor: 'pointer', borderRadius: "50%",
                marginBottom: "10px"
                }}
                />
                </div>
            ))}

        </Grid>

    )

}
