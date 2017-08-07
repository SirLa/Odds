import React, {Component} from 'react';
import {connect } from 'react-redux';
import axios from 'axios';
import {getSports} from '../actions';
import '../css/sport.css'

class Sport extends Component{

    componentDidMount(){
        this.props.getSports();
    }

    render(){
        if(this.props.sports){
            console.log(this.props.sports)
            this.sportBar = this.props.sports.map((item,index) => {
                return (
                    <li key={index} className="sport">{item[1]}</li>
                )
            });
        }

            return (
                <div>

                       {this.props.sports? <ul className="sportBar">{this.sportBar}</ul>:null}


                </div>
            )
        }
}
const mapStateToProps = (state) => {
    console.log(state.sports.sportData.sports)
    return {
        sports: state.sports.sportData.sports,
    }
}
const mapDispatchToProps = (dispatch)  => {
    return {
        getSports: () => {
            axios.get("http://www.mocky.io/v2/598846cc2700008d00afee66").then(res => {dispatch(getSports(res.data))})
        }

    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Sport);
