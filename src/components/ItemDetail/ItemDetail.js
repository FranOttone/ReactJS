import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './ItemDetail.css'

function ItemDetail({items}) {
    
    return (
        <div>
            <Card className="carta">
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={items.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1" >
           {items.name}
          </Typography> 
          <Typography gutterBottom variant="h5" component="h2">
              {items.occupation}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              {items.status}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
        </div>
    )
}

export default ItemDetail
