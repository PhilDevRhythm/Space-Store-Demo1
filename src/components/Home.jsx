import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const Home = () => {

    
     const [homePics, sethomePics] = useState([]);
     const { homePicsId } = useParams()

     useEffect(() => {
        setTimeout(()=> {getPics()}, 500);
     }, [homePicsId]);

    



    // API CALL
    // ORIGINAL FETCH "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2022-07-08&end_date=2022-07-10"

    const getPics = async () => {
        
        let date = new Date()
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let fullDateStart = `${year}-${month}-${day}`;
        let fullDateEnd = `${year}-${month}-${day}`;
        let fullDateURL = "https://api.nasa.gov/planetary/apod?api_key=1OOGNWyCBThAjvCHudwYUGfMifwx4jPeC4l18YLZ&start_date=" + fullDateStart + "&end_date=" + fullDateEnd + "";

        const response = await fetch (fullDateURL)
        const data = await response.json()
        sethomePics(data)
    }
    
    return (
        <>
        <h1>CharDetail: {homePicsId}</h1>
        <div>{ JSON.stringify( homePics ) }</div>
        </>

        /* { homePics.map (observation => observation.id)}
        </>
        <div>
            <div class="text-center text-bg-dark">
                <h1 class="display-4"> Hola{observation.title}</h1>

            </div>
            <div class="mb-3 text-center" style="display: flex;justify-content: center; max-width:80%;align-items: center">
                <div class="row text-bg-dark">
                    <div class="col-md-2"></div>
                    <div class="col-md-5">
                        <div class="img-fluid rounded-start">
                            <br></br>
                            <img src={observation.hdurl} class="imageOfTheDay"></img>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="card-body text-center">
                            <h5 class="card-title"></h5>
                            <div class="card-text" id="showData1"><h5 class="lead"> ${observation.date}</h5></div>
                            <br></br>
                            <div class="card-text" id="showData2"><h4 class="lead"> ${observation.explanation}</h4></div>
                            <br></br>
                            <h5 class="lead"> Credits to : ${observation.copyright}</h5><div>
                                <br></br>
                                <div class="card-text" id="showData3"></div>
                                <div class="card-text" id="showData4"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div></div>
    ) */)}

export default Home