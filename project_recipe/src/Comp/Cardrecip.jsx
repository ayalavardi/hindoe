import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom'
import '../Style/style.css'

const ExpandMore = styled((props) => {
  // debuger
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  float: 'left',
  // margin: 'auto',//---------------------------------------Im
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
//props.data
export default function RecipeCard(props) {
  let image = `http://localhost:3001/${props.dataE}`
  let id = props.dataAA
  let nav = useNavigate()
  console.log("img--", image);

  const Look = () => {//בעת לחיצה  על הכרטיס יראה את כול הנתונים
    debugger
    nav(`/Sall/${id}`)
  }

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
  };

  return (
    <Card sx={{ maxWidth: 345, marginLeft: 10, marginRight: 10, marginTop: 5, marginBlock: 5 }} onClick={() => Look()} className="Cardit">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#FF0063' }} aria-label="recipe" className='Card'>
            {props.dataC}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.dataA}
        subheader={props.dataD}
        instrac={props.dataB}
      />
      <CardMedia
        component="img"
        height="194"
        image={image ? image : `${process.env.PUBLIC_URL}`}
        alt="Paelhdish"
      />
      <CardContent className='aa'>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      {/* {status=='personal' && <button className='btns'
      onClick={() => deleteApar(apartment._id)}
      >Delete Apartment</button>} */}
      {/* {status=='personal' && <button className='btns' 
      onClick={() => updata(apartment._id)}
      >Update Apartment</button>} */}
       <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton >
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className='aa'>
          <Typography paragraph >{props.dataB}</Typography>
          <Typography paragraph >
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}