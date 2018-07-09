import React,{ Component } from 'react';
import partyPopper from '../assets/party_potter.gif';
import { ToastContainer, toast } from 'react-toastify';

class AgeStats extends Component {
    
    timeSince(date){
        let CurrentDate = new Date();
        let GivenDate = new Date(date);
        if(GivenDate > CurrentDate){
              return 'You have not selected previous date right ?';
        }else{
            let today = new Date().getTime();
            let other_date = new Date(date).getTime();
            let difference = Math.abs(today - other_date);
            console.log("difference is",difference);
            let days = Math.floor(difference / (1000*3600*24));
            let years = Math.floor(days/365);
            days-=years*365;
            let months = Math.floor(days/31);
            days -= months * 31;
            return `You are ${years} Years , ${months} Months , and ${days} Days Old `;
        }
    }
    render(){
        return (
            <div className="row">
            <ToastContainer/>
                <div className="col-md-6 col-md-offset-3">
                    <br/>
                    <div class="alert alert-info" role="alert">
                        <h4>{this.timeSince(this.props.date)}</h4>
                    </div>
                    <img src={partyPopper} alt="party popper" />
                </div>
            </div>
        )
    }
}

export default AgeStats;
