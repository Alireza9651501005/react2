import React from 'react';

class Weather extends React.Component {
    render () {
        return (
            <div className= 'weather'>
                {this.props.city && this.props.country && <p>Location:{this.props.city},
                {this.props.country}</p> }
                {this.props.Temprature && <p>Temprature: {this.props.Temprature} درجه سلسیوس</p>}
                {this.props.Humidity && <p>Humidity: {this.props.Humidity}</p>}
                {this.props.condition && <p>condition: {this.props.condition}</p>}
                {this.props.error && <p>{this.props.error}</p>}  
            </div>
        )
    }
}
export default Weather

