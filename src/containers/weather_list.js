import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart.js'
import GoogleMap from '../components/google_map.js'

export class WeatherList extends Component{

	renderWeather(cityData){
		const temps = cityData.list.map(weather => weather.main.temp)
		const pressures = cityData.list.map(weather => weather.main.pressure)
		const humidities = cityData.list.map(weather => weather.main.humidity)
		//destructing below because properties named 
		const {lon, lat} = cityData.city.coord;

		return(
			<tr key={cityData.city.id}>
				
				<td><GoogleMap lat={lat} lon={lon}/></td>
				<td>
					<Chart data={temps} color='red' units="K"/>
				</td>
				<td>
					<Chart data={pressures} color='green' units="hPa"/>
				</td>
				<td>
					<Chart data={humidities} color='blue'units="%" />
				</td>
			</tr>
		)
	}

	render(){
		return(
				<table className="table table-hover">
					<thead>
						<tr>
							<th>City</th>
							<th>Temperature (K)</th>
							<th>Pressure (hPa)</th>
							<th>Humidity(%)</th>
						</tr>
					</thead>
					<tbody>
						{this.props.weather.map(this.renderWeather)}
					</tbody>
				</table>
			);
	}
}

function mapStateToProps({weather}){
	return{weather};
}


export default connect(mapStateToProps)(WeatherList);
