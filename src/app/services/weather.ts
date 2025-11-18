import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../model/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Weather {

 baseURL='https://open-weather13.p.rapidapi.com/city?city=kolkata&lang=EN'
  host=	'x-rapidapi-host'
  hostValue='open-weather13.p.rapidapi.com'
  
  api='x-rapidapi-key'
  apiValue='210c974a82mshb5a798b10f195cdp196b20jsnb8f557ac219f'
	
  constructor(private http:HttpClient)
  {}
  getWeatherData(city:string): Observable<WeatherData>{
    this.baseURL='https://open-weather13.p.rapidapi.com/city?city='+city+'&lang=EN'
    //console.log(this.baseURL);
    return this.http.get<WeatherData>(this.baseURL,{
      headers:new HttpHeaders()
      .set(this.host,this.hostValue)
      .set(this.api,this.apiValue),
      params:new HttpParams().set('q',city)
      .set('units','metric')
    .set('mode','json')
    })
  }
  
}
