import Sun from "assets/weather/sun.svg"
import CloudSun from "assets/weather/cloud-sun.svg"
import Cloudy from "assets/weather/cloudy.svg"
import HeavyShowers from "assets/weather/stormy.svg"
import Snow from "assets/weather/snowy.svg"

const ICON_MAP = new Map()

addMapping([0, 1], Sun)
addMapping([2], CloudSun)
addMapping([3], Cloudy)
addMapping([45, 48], "smog")
addMapping([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82], HeavyShowers)
addMapping([71, 73, 75, 77, 85, 86], Snow)
addMapping([95, 96, 99], "cloud-bolt")

function addMapping(values, icon) {
    values.forEach(value => {
        ICON_MAP.set(value, icon)
    })
}

export default ICON_MAP
