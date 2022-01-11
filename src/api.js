import axios from "axios";
import React from "react";


function Apitest() {
    const [data, setData] = React.useState(null);

    const API = "https://cosmatherapy.co.uk/wp-json/wl/v1/homeheroslider";

    React.useEffect(() => {
        axios.get(API).then((response) => {
          setData(response.data);
        });
      }, []);
    
      if (!data) return null;


      console.log(data);

    return (
        
        <div className="mdc-card__primary-action">
            <div>
                {/* <h1>Cloud over: {data.current.cloudcover}</h1>
                <h1>Feels Like: {data.current.feelslike}</h1>
                <h1>Humidity: {data.current.humidity}</h1>
                <h1>Is this Day?: {data.current.is_day}</h1>
                <h1>Observation time: {data.current.observation_time}</h1>
                <h1>What is the temperature: {data.current.temperature}°c</h1>
                <h1><span><img src={data.current.weather_icons[0]} alt="dnsd"/></span> {data.current.weather_descriptions}</h1> */}
                <h1>Yes its workiing</h1>
            </div>
        </div>
    )
}

export default Apitest;