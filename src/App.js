import React from 'react'
import Moto from './components/moto/moto'
import Form from './components/form/form'
import Display from './components/display/display'

const API_KEY = '437c07ac95ad7963ecc99ec7057a6b4e';
class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    wind: undefined,
    humidity: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);//tacking function, making API call
    const data = await api_call.json();
    if (city) {
      console.log(data)
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        description: data.weather[0].description,
        error: ''
      })
    }
    else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        wind: undefined,
        humidity: undefined,
        error: 'Please enter the a city'
      })
    }


  }
  render() {
    return (
      <div>
        <div className='wrapper'>
          <div className='main'>
            <div className='container'>
              <div className='row xxxx'>
                <div className='col-md-5  col-xs-5 title-container'>
                  <Moto />
                </div>
                <div className='col-md-7  col-xs-7 form-container'><Form getWeather={this.getWeather} />
                  <Display
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    wind={this.state.wind}
                    description={this.state.description}
                    error={this.state.error} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}




export default App;
