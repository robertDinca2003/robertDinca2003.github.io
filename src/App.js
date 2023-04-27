import './App.css';
import { Day } from './Day';
import { useState} from 'react';
import axios from 'axios';
function App() {

  const keyApi = '68af680e5039aaa2b6f898b1d97ed835';

  const [city, setCity] = useState("London");
  const [geocode,setGeocode] = useState({});
  const [wether, setWether] = useState({});
  

  

  const callWether = (latid,longit) => {
    
    console.log(geocode[0]?.lat);  
    console.log(geocode[0]?.lon); 
    console.log(`https://api.openweathermap.org/data/2.5/forecast?lat=${latid}&lon=${longit}&appid=${keyApi}&units=metric`); 
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latid}&lon=${longit}&appid=${keyApi}&units=metric`).then(
      (res) => {setWether(res.data)}
    );
    console.log(wether);
   

  }

  const callGeocode = () =>{
      
      if(city.length === 0) return ;
      
      axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${keyApi}`).then(
        (res)=>{setGeocode(res.data);callWether(res.data[0].lat,res.data[0].lon)});
      console.log(geocode);
     
      

  }

  

  return (
    <div className=" min-h-screen App bg-[url('./Backgrounds/Blue-sunny-sky.jpeg')]">
    
      <div>
        <input  type = 'text' placeholder='Enter a City...' onChange={(e)=>{setCity(e.target.value);}}
        className=' mt-20 w-2/5 px-5 py-1 border-2 border-black rounded-l-3xl shadow-lg' />
        <button onClick = {()=>{callGeocode();}}
        className = 'pr-5 pl-5 py-1 bg-blue-200 border-2 border-black rounded-r-3xl shadow-lg'>Search</button>
      </div>
      
      <div>
        <div className='Today grid grid-rows-6 md:mt-[15vh] md:grid-rows-2 md:grid-cols-3  justify-items-center  gap-x-3 gap-y-6 h-1/2'>
          <Day         
            date = {wether.hasOwnProperty('list') ? wether?.list[0]?.dt_txt : '0-0-0000'}
            temp = {wether.hasOwnProperty('list') ? wether?.list[0]?.main?.temp : '-0'}
            code = {wether.hasOwnProperty('list') ?  wether?.list[0]?.weather[0]?.icon : '01d'}
            day = {new Date().getDay()-1}

          />
          <Day  
            date = {wether.hasOwnProperty('list') ? wether?.list[7]?.dt_txt : '0-0-0000'}
            temp = {wether.hasOwnProperty('list') ? wether?.list[7]?.main?.temp : '-0'}
            code = {wether.hasOwnProperty('list') ?  wether?.list[7]?.weather[0]?.icon : '01d'}
            day = {(new Date().getDay())%7}

          />
          <Day  
            date = {wether.hasOwnProperty('list') ? wether?.list[15]?.dt_txt : '0-0-0000'}
            temp = {wether.hasOwnProperty('list') ? wether?.list[15]?.main?.temp : '-0'}
            code = {wether.hasOwnProperty('list') ?  wether?.list[15]?.weather[0]?.icon : '01d'}
            day = {(new Date().getDay()+1)%7}

          />
          <Day  
            date = {wether.hasOwnProperty('list') ? wether?.list[23]?.dt_txt : '0-0-0000'}
            temp = {wether.hasOwnProperty('list') ? wether?.list[23]?.main?.temp : '-0'}
            code = {wether.hasOwnProperty('list') ?  wether?.list[23]?.weather[0]?.icon : '01d'}
            day = {(new Date().getDay()+2)%7}

          />
          <Day 
            date = {wether.hasOwnProperty('list') ? wether?.list[31]?.dt_txt : '0-0-0000'}
            temp = {wether.hasOwnProperty('list') ? wether?.list[31]?.main?.temp : '-0'}
            code = {wether.hasOwnProperty('list') ?  wether?.list[31]?.weather[0]?.icon : '01d'}
            day = {(new Date().getDay()+3)%7}

          />
          <Day 
            date = {wether.hasOwnProperty('list') ? wether?.list[39]?.dt_txt : '0-0-0000'}
            temp = {wether.hasOwnProperty('list') ? wether?.list[39]?.main?.temp : '-0'}
            code = {wether.hasOwnProperty('list') ?  wether?.list[39]?.weather[0]?.icon : '01d'}
            day = {(new Date().getDay()+4)%7}

          />
        </div>
        

      </div>

    </div>
  );
}

export default App;
