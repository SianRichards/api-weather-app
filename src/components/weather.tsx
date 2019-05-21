import * as React from 'react';
import styles from "./weather.module.scss";

export interface IProps {
}

export interface IState {
    datapoints: IWeatherInfo;
    temperature: number;
    tempHot: boolean;
}

export interface IWeatherInfo {
    main: IWeatherStats;
    name: string;
    id: number;
}
 
export interface IWeatherStats {
    temp: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  }

class Weather extends React.Component<IProps, IState> {
    public state = {
        datapoints: {
          main: {
            temp: 0,
            humidity: 0,
            temp_min: 0,
            temp_max: 0
          },
          name: "Select a city!",
          id: 0,
      },
    temperature: 0,
    tempHot: false};

      async componentDidUpdate(prevProps: IProps, prevState: IState) {
        if (prevState.datapoints.id !== this.state.datapoints.id) {
        const cityId = this.state.datapoints.id;
        const apiKey = "18a1956e966d4bd595627791b0689884";
        const uri =
        "https://api.openweathermap.org/data/2.5/weather?id=" + 
          cityId +
          "&APPID=" +
          apiKey;
        const response = await fetch(uri);
        const datapoints = await response.json();
        this.setState({datapoints})
        const celsius = (this.state.datapoints.main.temp - 273.15).toFixed(1);
        this.setState({...datapoints, temperature: celsius});
        if (this.state.temperature > 15 ) {this.setState({...datapoints, temperature: celsius, tempHot: true})}
        else {this.setState({...datapoints, temperature: celsius, tempHot: false})}
        console.log(this.state.tempHot);
      }}

      public handleClick0 = (event: React.MouseEvent<HTMLElement>) => {
          this.setState({
            datapoints: {
              main: {
                temp: 0,
                humidity: 0,
                temp_min: 0,
                temp_max: 0
              },
              name: "",
              id: 2643741
          }})
      }
      public handleClick1 = (event: React.MouseEvent<HTMLElement>) => {
        this.setState({
            datapoints: {
              main: {
                temp: 0,
                humidity: 0,
                temp_min: 0,
                temp_max: 0
              },
              name: "",
              id: 5128638
          }})
    }
    public handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
        this.setState({
            datapoints: {
              main: {
                temp: 0,
                humidity: 0,
                temp_min: 0,
                temp_max: 0
              },
              name: "",
              id: 2038349
          }})
    }
    public handleClick3 = (event: React.MouseEvent<HTMLElement>) => {
        this.setState({
            datapoints: {
              main: {
                temp: 0,
                humidity: 0,
                temp_min: 0,
                temp_max: 0
              },
              name: "",
              id: 2950159
          }})
    }
    public handleClick4 = (event: React.MouseEvent<HTMLElement>) => {
        this.setState({
            datapoints: {
              main: {
                temp: 0,
                humidity: 0,
                temp_min: 0,
                temp_max: 0
              },
              name: "",
              id: 1138958
          }})
    }
    public handleClick5 = (event: React.MouseEvent<HTMLElement>) => {
        this.setState({
            datapoints: {
              main: {
                temp: 0,
                humidity: 0,
                temp_min: 0,
                temp_max: 0
              },
              name: "",
              id: 2172517
          }})
    }
    public handleClick6 = (event: React.MouseEvent<HTMLElement>) => {
        this.setState({
            datapoints: {
              main: {
                temp: 0,
                humidity: 0,
                temp_min: 0,
                temp_max: 0
              },
              name: "",
              id: 6559994
          }})
    }
    public handleClick7 = (event: React.MouseEvent<HTMLElement>) => {
        this.setState({
            datapoints: {
              main: {
                temp: 0,
                humidity: 0,
                temp_min: 0,
                temp_max: 0
              },
              name: "",
              id: 184745
          }})
    }

    render() { 
        return ( 
        <React.Fragment>
          <article className={styles.main}>
            <div className={styles.buttons}>
            <button onClick={this.handleClick0}>London</button>
            <button onClick={this.handleClick1}>New York</button>
            <button onClick={this.handleClick2}>Beijing</button>
            <button onClick={this.handleClick3}>Berlin</button>
            <button onClick={this.handleClick4}>Kabul</button>
            <button onClick={this.handleClick5}>Canberra</button>
            <button onClick={this.handleClick6}>Buenes Aires</button>
            <button onClick={this.handleClick7}>Nairobi</button>
            </div>
        <div className={
         this.state.tempHot ? styles.hotWeather : styles.coldWeather}>
         <h1>City: {this.state.datapoints.name}</h1>
            <h2>Temperature: {this.state.temperature}°C</h2>
            <h3>Humidity: {this.state.datapoints.main.humidity}%</h3>
            </div>
        </article>
        </React.Fragment>);
    }
}
 
export default Weather;