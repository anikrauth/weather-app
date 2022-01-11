import axios from "axios";
import React from "react";


function Apitest() {
    const [data, setData] = React.useState(null);

    const API = "https://cdn.contentful.com/spaces/qsduscv6vvpa/entries?access_token=DsJD8qK-ahPpEQCOdlmDxExStCuhNeaKre3y38Ew9GE&sys.contentType.sys.id[in]=homePageWork1";

    React.useEffect(() => {
        axios.get(API).then((response) => {
          setData(response.data);
        });
      }, []);
    
      if (!data) return null;


      let workData = data.items;
      console.log(workData)

    return (
        <div className="mdc-card__primary-action">
        
            {workData.map((item) => (
              <div key={item.sys.id}>
                <h1>{item.fields.title1}</h1>
              </div>
            ))}
            
        </div>
    )
}

export default Apitest;