import React from 'react';
import Form from './Form'
import Title from './Title'
import Weather from './Weather'
import {connect} from 'react-redux'
import axios from 'axios'
import '../App.css'
const API_KEY = "7de94c6922cde97de8792f71077d0d4e"

class App extends React.Component {
    // getweather = async (e) => {
    //     e.preventDefault();
    //     const city2 = this.props.city
    //     const country = this.props.country
    //     console.log(city2)
    //     console.log(country)
    //     // const Country = e.targrt.elements.Country.value
    //     const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city2},${
    //         country}&appid=${API_KEY}`)
    //     const data = await api_call.json()
    //     console.log(data)
    state = {
        Temprature: '',
        Humidity: '',
        city:'',
        country:'',
        condition:'',
        err:''
    }
    getweather = (e) => {
        e.preventDefault();
        const city2 = this.props.city
        const country = this.props.country
        if (city2 && country) {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city2},${
                            country}&lang=fa&appid=${API_KEY}`)
                .then(res => {
                    console.log(res.data)
                    
                        this.setState({
                            Temprature: (parseFloat(res.data.main.temp) -273.15).toFixed(2),
                            Humidity:res.data.main.humidity,
                            city:res.data.name,
                            country:res.data.sys.country,
                            condition:res.data.weather[0].description,
                            err:''
                        })
                })
                .catch(err => console.log(err))
             } else {
                    this.setState({
                        Temprature: '',
                        Humidity:'',
                        city:'',
                        country:'',
                        condition:'',
                        err:'Please Enter city and country Names'
                    })
                }
            
    }
    render () {
        return (
            <div className='App'>
                <Title />
                <Form getit = {this.getweather}/>
                <div className='creator'>
                    <h3><strong style={{color:'red'}}>Creator:</strong>Alireza Mohammadi</h3>
                    <p>alireza691111@gmail.com</p>
                </div>
                <Weather 
                    Temprature = {this.state.Temprature}
                    Humidity = {this.state.Humidity}
                    city = {this.state.city}
                    country ={this.state.country}
                    condition = {this.state.condition}
                    error = {this.state.err}/>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    city: state.name1,
    country: state.name2
})
export default connect(mapStateToProps)(App)
