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
                        <div className="sportContainer">
                            <li key={index} className="sport" id={index} onClick={
                                (event) => {
                                    this.props.handleClick(index,!this.props.open)
                                }
                            }><div>{item["SportName"]}</div></li>
                            {index === this.props.clickedSportIndex && this.props.open?<Region/>:null}
                        </div>
                    )
                }

            });
        }
        return (
            <div className="sport-nav">
                {this.props.sports? <ul className="sportBar">{this.sportBar}</ul>:null}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
   console.log(state)
    return {
        clickedSportIndex: state.sports.index,
        sports: state.sports.data.Sports,
        open: state.sports.open
    }
}
const mapDispatchToProps = (dispatch)  => {
    return {
        handleClick: (index,boolean) => {
            dispatch(handleClick(index,boolean));

        },
        getData: () => {
            axios.get("http://www.mocky.io/v2/598997ae4100009504820f36").then(res => {dispatch(getData(res.data))})
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Sport);
