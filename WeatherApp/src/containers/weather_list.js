import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googlemap';
class WeatherList extends Component {

    renderWeather(a) {
        console.log(a)
        if(a) {
        const temp = a.list.map(a=> a.main.temp)
        const pressure = a.list.map(a=> a.main.pressure)
        const humidity = a.list.map(a=> a.main.humidity)
        const {lon,lat} = a.city.coord;

        // console.log(temp)
        return (
            <tr key = {a.city.name}>
                <td>
                    <GoogleMap lon = {lon} lat = {lat}>
                    </GoogleMap>
                </td>
                <Chart temp = {temp} color = "orange"></Chart>
                <Chart temp = {pressure} color = "red"></Chart>
                <Chart temp = {humidity} color = "green"></Chart>
            </tr>
        )
        }
        return null;
    }
    render() {
        // console.log(this.props.weather)
        return (
        <div style = {{backgroundColor:"lightgrey"}}>
            <table className = "table table-hover">     
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(a=> this.renderWeather(a))}
                </tbody>
                <br></br>
            </table>
        </div>
        )
    }
}
function mapStateToProps({weather})
{
    // console.log(weather)
    return {
        weather
    }
}
export default connect(mapStateToProps)(WeatherList);