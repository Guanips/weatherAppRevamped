import './WeatherPhrase.css'

const weatherReaction = {
    temp: [
        "it's freezing cold",
        "it's really cold",
        "it's a little cold",
        "the temperature really pleasant",
        "the temperature is perfect",
        "it's warm",
        "it's somewhat hot",
        "it's hot",
        "it's really hot",
    ],

    wind: [
         "there's no wind",
         "there's a very light breeze",
         "there's a light breeze",
         "there's a nice breeze",
         "there's a strong breeze",
         "the wind is strong",
         "the wind is really strong",
    ],

    clouds: [
        "the sky is clear",
        "there are very little clouds",
        "it's mostly sunny",
        "it's partlially cloudy",
        "it's partially sunny",
        "it's mostly cloudy",
        "it's cloudy"
    ],
}

const WeatherPhrase = (props, phrase_id) =>{
    const temp = props.feels_like
    const wind = props.wind_speed
    const clouds = props.cloud_pct
    var tempAnswer = ""
    var windAnswer = ""
    var cloudAnswer = ""

    switch (true) {
        case temp<=0:
            tempAnswer = weatherReaction.temp[0]
        break;

        case temp>0 && temp<=10:
            tempAnswer = weatherReaction.temp[1]
        break;

        case temp>10 && temp<=18:
            tempAnswer = weatherReaction.temp[2]
        break;

        case temp>18 && temp<=21:
            tempAnswer = weatherReaction.temp[3]
        break;

        case temp>21 && temp<=25:
            tempAnswer = weatherReaction.temp[4]
        break;

        case temp>25 && temp<=27:
            tempAnswer = weatherReaction.temp[5]
        break;

        case temp>27 && temp<=29:
            tempAnswer = weatherReaction.temp[6]
        break;

        case temp>29 && temp<=33:
            tempAnswer = weatherReaction.temp[7]
        break;

        case temp>33:
            tempAnswer = weatherReaction.temp[8]
            break;
    
        default:
            tempAnswer = "we are loading the data..."
            break;
    }

    switch (true) {
        case wind<=1:
            windAnswer = weatherReaction.wind[0]
        break;

        case wind>1 && wind<=3:
            windAnswer = weatherReaction.wind[1]
        break;

        case wind>3 && wind<=10:
            windAnswer = weatherReaction.wind[2]
        break;

        case wind>10 && wind<=21:
            windAnswer = weatherReaction.wind[3]
        break;

        case wind>21 && wind<=27:
            windAnswer = weatherReaction.wind[4]
        break;

        case wind>27 && wind<=33:
            windAnswer = weatherReaction.wind[5]
        break;

        case wind>33:
            windAnswer = weatherReaction.wind[6]
        break;
    
        default:
            break;
    }

    switch (true) {
        case clouds<=10:
            cloudAnswer = weatherReaction.clouds[0]
        break;

        case clouds>10 && clouds<=20:
            cloudAnswer = weatherReaction.clouds[1]
        break;

        case clouds>20 && clouds<=30:
            cloudAnswer = weatherReaction.clouds[2]
        break;

        case clouds>30 && clouds<=60:
            cloudAnswer = weatherReaction.clouds[3]
        break;

        case clouds>60 && clouds<=70:
            cloudAnswer = weatherReaction.clouds[4]
        break;

        case clouds>70 && clouds<=90:
            cloudAnswer = weatherReaction.clouds[5]
        break;

        case clouds>90:
            cloudAnswer = weatherReaction.clouds[6]
        break;
    
        default:
            break;
    }

    return (
        <>
            <p className='weatherPhrase'>"Right now {tempAnswer}, {windAnswer} and {cloudAnswer}"</p>
        </>
    )
}

export default WeatherPhrase