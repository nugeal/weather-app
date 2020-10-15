import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment';

function DayForcast(props){
    let imgSrc = `http://openweathermap.org/img/w/${props.current.weather[0].icon}.png`;
    return (
        <div className='dayForecast'>
            <h4>{ props.currentDay ? moment().format("dddd, MMMM Do YYYY, h:mm:ss a") : moment.unix(props.current.dt).format("dddd, MMMM Do YYYY") }</h4>
            <img src={imgSrc} alt="weather-icon" height="60px" width="60px"></img>
            <p>{props.current.weather[0].description}</p>
            <p>Temperature: {props.currentDay ? props.current.temp : props.current.temp.day} {props.convertTempAndSpeed(props.units).temp}</p>
            <p>Humidity: {props.current.humidity}%</p>
            <p>Wind: {props.current.wind_speed} {props.convertTempAndSpeed(props.units).wind}</p>
        </div>
    );
}

DayForcast.propTypes = {
    current: PropTypes.object,
    units: PropTypes.string,
    convertTempAndSpeed: PropTypes.func,
    currentDay: PropTypes.bool
}

export default DayForcast;