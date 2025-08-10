import { useEffect, useState } from 'react'

function App() {

  const [search, setSearch] = useState(null);
  // const [result, setResult] = useState('')
  const [weather, setWeather] = useState(null)

  const wetherconfig = {
    key: 'b88e858edff3e11416b5b1db84c32a68'
  }

  const getweather = () => {
    if (!search) return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${wetherconfig.key}&units=metric`)
      .then((data) => data.json())
      .then((data) => {
        setWeather(data);
        console.log(data);
      })
      .catch((e) => console.log(e))
  };

  // if ( weather  && weather.cod =='404'){
  //   <div>Wrong Entery</div>
  // }

  return (
    <div className="bg-info container">
      <h1 className='text-center'>Weather Details</h1>
      <div className='weather-page vh-100'>
        <div className="mb-4 cards p-5 bg-primary">
    
          <input type="email" className="form-control" placeholder='Enter City/Country etc..' onChange={(e) => setSearch(e.target.value)} id="Search" aria-describedby="" />

          <div className="fetch my-4 d-flex justify-content-center ">
            <button className='btn btn-danger' onClick={() => getweather()}>Fetch</button>
          </div>
          {weather ?
            <div className='text-center '>
              <h3>{weather.name}, {weather.sys.country}</h3>
              <h4>{weather.main.temp}°C</h4>
              <p>{weather.weather[0].main}</p>
              <p>{weather.weather[0].description}</p>
            </div>
            : <p>Wating</p>
          }
        </div>
      </div>
    </div>

  )
}

export default App
