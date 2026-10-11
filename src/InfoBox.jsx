
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import { Box } from '@mui/material';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnySnowingIcon from '@mui/icons-material/SunnySnowing';

export default function InfoBox ({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  
    let HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    let COLD_URl = "https://plus.unsplash.com/premium_photo-1669990950563-8b31d8ed237b?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1620385019253-b051a26048ce?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

    return (
       
        <div className="InfoBox">
          <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.humidity > 80 ? (
            <ThunderstormIcon sx={{ fontSize: 25, verticalAlign: "middle", mr: 1 }} />
          ) : info.temp > 15 ? (
            <SunnySnowingIcon sx={{ fontSize: 25, verticalAlign: "middle", mr: 1 }} />
          ) : (
            <AcUnitIcon sx={{ fontSize: 25, verticalAlign: "middle", mr: 1 }} />
          )}
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity= {info.humidity}</p>
         <p>Min Temp {info.tempMin}&deg;C</p>
         <p>Max Temp {info.tempMax}&deg;C</p>
         <p>The weather can be described as <i>{info.weather}</i> feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
   </div>
    )
}

