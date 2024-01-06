import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {






  constructor(private http : HttpClient) { }


  getweather(cname : string , units : string) {
   return  this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + cname + '&appid=869bac5c2e776568e33aff351a00b231&units=' + units)
  }
}
