import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./weather.css"
export default function WeatherInfo({info}) {
  const RainUrl = "https://media.istockphoto.com/id/1322717990/photo/thick-dark-black-heavy-storm-clouds-covered-summer-sunset-sky-horizon-gale-speed-wind-blowing.webp?a=1&b=1&s=612x612&w=0&k=20&c=W2-dXNrzqf1Lgo-xL5UYWsvM3q9EzqqpOCWhgC_cklk=";
  const SunnyUrl = "https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN1bm55fGVufDB8fDB8fHww";
  const WinterUrl = "https://images.unsplash.com/photo-1457269449834-928af64c684d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyfGVufDB8fDB8fHww";

  return (
    <div className="webappInfo">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={info.temp_max<20 ? RainUrl: info.temp>30 ? SunnyUrl : WinterUrl } title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.name} {info.temp_max<20 ? <ThunderstormIcon/>: info.temp>30 ? <WbSunnyIcon/>: <AcUnitIcon/>}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <p>
              <b>Tempreture :</b> {info.temp} <span>&#8451;</span>
            </p>
            <p>
              <b>Maximum Tempreture :</b> {info.temp_max} <span>&#8451;</span>
            </p>
            <p>
              <b>Minimun Tempreture :</b> {info.temp_min} <span>&#8451;</span>
            </p>
            <p>
              <b>Weather Conditoin : </b>
              {info.weather}
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
