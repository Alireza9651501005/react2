import React from 'react';
import {connect} from 'react-redux'
import {addvalue} from './action'
class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            item1:'',
            item2:''
        }
    }
    changeHandler = (e) => {
        let varset = e.target.name
        this.setState({[varset]:e.target.value},() => this.props.dispatch(addvalue(this.state.item1, this.state.item2)))
    }
    render () {
        return (
            <form className='form'>
                    <p>City:</p>
                    <input type="text" name = 'item1' onChange={this.changeHandler}  placeholder = 'tehran...'/>
                    <p>Country:</p>
                    <input type="text" name = 'item2' onChange={this.changeHandler} placeholder = 'IR...'/>
                <button onClick ={this.props.getit}>Get State</button>
            </form>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    dispatch:dispatch
})
export default connect(mapDispatchToProps)(Form)
