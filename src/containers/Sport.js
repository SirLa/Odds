import React, {Component} from 'react';
import {connect } from 'react-redux';
import axios from 'axios';
import {getData,handleClick} from '../actions';
import '../css/sport.css'
import Region from './Region'
class Sport extends Component{
    componentDidMount(){
        this.props.getData();
    }


    render(){
        if(this.props.sports){
            //console.log(this.props.sports)
            this.sportBar = this.props.sports.map((item,index) => {
                if(item!==null){
                    return (
                        <li key={index} className="sport" id={index} onClick={
                            (event) => {
                                this.props.handleClick(index)
                            }
                        }><div>{item["SportName"]}</div></li>

                    )

                }

            });
        }
        return (
            <div className="sport-nav">
                {this.props.sports? <ul className="sportBar">{this.sportBar}</ul>:null}
                <Region/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
   //console.log(state)
    return {
        sports: state.sports.data.Sports
    }
}
const mapDispatchToProps = (dispatch)  => {
    return {
        handleClick: (index) => {
            dispatch(handleClick(index))
        },
        getData: () => {
            axios.get("http://www.mocky.io/v2/598997ae4100009504820f36").then(res => {dispatch(getData(res.data))})
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Sport);
