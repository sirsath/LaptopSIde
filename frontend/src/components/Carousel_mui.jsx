import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

const Carousel_mui = () => {

    var items = [
        {
            // name: "Random Name #1",
            // description: "Probably the most random thing you have ever seen!",
            img:"https://ocdn.eu/images/pulscms/ZjI7MDA_/bb6b0f53264a0ae1d90067153c065aeb.jpg"
        },
        {
            // name: "Random Name #2",
            // description: "Hello World!",
            img:"https://www.jwvdev.com/wp-content/uploads/2019/05/Digital-Marketing-Agency-Minneapolis.jpg"
        },
        {
            // name: "Random Name #2",
            // description: "Hello World!",
            img: "https://res.cloudinary.com/apptus/image/upload/v1633421691/whitepapers/covid19%20europe%20ecommerce%20effects/ecommerce-growth.jpg"
        }
    ]

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper>
            <img src={props.item.img} width={1600} height={500} alt="" />
        </Paper>
    )
}




export default Carousel_mui