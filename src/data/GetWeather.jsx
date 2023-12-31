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
        if (response.status === 200) {
            const data = await response.json().then(data => {
                // return data
                return {
                    current: parseCurrentWeather(data),
                    daily: parseDailyWeather(data),
                    hourly: parseHourlyWeather(data),
                }
            })
        }
        else {
            console.error("Server Error:", data.error.message)
        }
    }
    catch (error) {
        console.error("Fetch Error:", error)
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
        // to round to the nearest 100th
        precip: Math.round(precip * 100) / 100,
        iconCode,
    }
}

function parseDailyWeather({ daily }) {
    return daily.time.map((time, index) => {
        return {
            // convert to milliseconds from seconds
            timestamp: time * 1000,
            iconCode: daily.weather_code[index],
            maxTemp: Math.round(daily.temperature_2m_max[index]),
        }
    })
}

function parseHourlyWeather({ hourly, current }) {
    return hourly.time.map((time, index) => {
        return {
            timestamp: time * 1000,
            iconCode: hourly.weather_code[index],
            temp: Math.round(hourly.temperature_2m[index]),
            feelsLike: Math.round(hourly.apparent_temperature[index]),
            windSpeed: Math.round(hourly.wind_speed_10m[index]),
            // to round to the nearest 100th
            precip: Math.round(hourly.precipitation[index] * 100) / 100,
        }
    }).filter(({timestamp}) => timestamp >= current.time * 1000)
}
