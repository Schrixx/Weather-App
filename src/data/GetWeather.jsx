const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,weather_code,wind_speed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timeformat=unixtime"

export async function GetWeather(lat, lon, timezone) {
    try {
        const response = await fetch(url, {
            method: "GET",
            params: {
                latitude: lat,
                longitude: lon,
                timezone,
            }
        })
        const data = await response.json().then(data => {
            return {
                current: parseCurrentWeather(data)
            }
        })
        console.log(data)
    }
    catch (error) {
        console.log(error)
    }

}

function parseCurrentWeather({ current, daily }) {
    const { temperature_2m: currentTemp, wind_speed_10m: windSpeed, weather_code: iconCode } = current
    const { 
        temperature_2m_max: [maxTemp],
        temperature_2m_min: [minTemp],
        apparent_temperature_max: [maxFeelsLike],
        apparent_temperature_min: [minFeelsLike],
        precipitation_sum: [precip],
    } = daily

    return {
        currentTemp: Math.round(currentTemp),
        highTemp: Math.round(maxTemp),
        lowTemp: Math.round(minTemp),
        highFeelsLike: Math.round(maxFeelsLike),
        lowFeelsLike: Math.round(minFeelsLike),
        windSpeed: Math.round(windSpeed),
        precip: Math.round(precip * 100) / 100,
        iconCode,
    }
}
