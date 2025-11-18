import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Weather } from './services/weather';
import { HttpClientModule } from '@angular/common/http';
import { WeatherData } from './model/model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HttpClientModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  weatherData?:WeatherData;

  inputValue:string=""

  
  location?=" "
  constructor(private weatherService:Weather){}

 displayName(){
  this.location=this.inputValue;
  this.getWeatherDetails(this.inputValue)
  this.inputValue=''
 }
  /*constructor(private weatherService: Weather){
    this.weatherService.getWeatherData(this.inputValue)
    .subscribe({
      next:(response)=>{
        this.weatherData=response;
        console.log(response);
      }

    })
  }*/
  private getWeatherDetails(city:string)
  {
     this.weatherService.getWeatherData(this.inputValue)
    .subscribe({
      next:(response: WeatherData | undefined)=>{
        this.weatherData=response;
        console.log(response);
      }

    })

  }

  ngOnInit(): void {
    this.getWeatherDetails(this.inputValue);
      
  }
}
