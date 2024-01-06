import { Component, Renderer2 } from '@angular/core';
import { WeatherService } from '../services/weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  myweather: any;
  temperature : number=0;
  humidity : number=0;
  feels : number =0 ;
  pressure : number = 0;
  summary : string = '';
  iurl : string = '';
  cname : string = 'Chennai';
  units : string = 'imperial';





  constructor( private weatherservice : WeatherService,private renderer: Renderer2) {}

  onclick(user){
    this.cname= user.value;
    this.ngOnInit();
  }
  ngOnInit(): void {


    this.weatherservice.getweather( this.cname, this.units ).subscribe({


      next : (res) => {
        console.log(res)
        this.myweather = res;
        console.log(this.myweather);
        this.temperature = this.myweather.main.temp;
        this.feels = this.myweather.main.feels_like;
        this.humidity = this.myweather.main.humidity;
        this.pressure = this.myweather.main.pressure;
        this.summary = this.myweather.weather[0].main;
        this.cname = this.myweather.name;
        this.iurl = 'https://openweathermap.org/img/wn/' + this.myweather.weather[0].icon + '@2x.png';





      // if(this.myweather && this.myweather.main.temp <= 30){
      //   this.PlaySound();
      // }
 
      },


      error: (error) => console.log(error.message),


      complete: () => console.info('API call completed')
    }
     
  )


  }
  PlaySound(){
    const rainsound = new Audio('../../assets/rain.mp3');
    rainsound.play();
  }


}
