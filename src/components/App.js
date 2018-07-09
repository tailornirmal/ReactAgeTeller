import React , { Component } from 'react';
import { Form,FormControl,Button } from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            newDate : '',
            birthday : '',
            showStats : false
        }
    }

    changeBirthday =()=>{
        this.setState({
            birthday : this.state.newDate,
            showStats : true
        });
    }
    render(){
        return (
            <div className="cotainer-fluid">
            <div class="jumbotron">
                <h1><center>Age Calculator<small></small></center></h1>
                <h4><center><small>Designed By : Nirmal Kumar</small></center></h4>
            </div>
            <center>
                <Form inline>
                    <h2>Input Your Birthday !</h2>
                    <br/>
                    <FormControl 
                        type="date"
                        onChange={ event => this.setState({newDate : event.target.value}) }
                    >
                    </FormControl>
                    {' '}
                    <Button disabled={!this.state.newDate} bsStyle="info" onClick = {this.changeBirthday}>
                        Submit
                    </Button>
                    {
                        this.state.showStats ?
                        <AgeStats date = {this.state.birthday} />
                        :
                        <div></div>
                    }                    
                </Form>
            </center>

            </div>
        )
    }
}

export default App;