import React, {Component} from 'react';
import {connect } from 'react-redux';
import {getData,handleClick} from '../actions';
import '../css/sport.css'

class Region extends Component{

    render(){
        if(this.props.regions && this.props.clickedSportIndex!==null){
            console.log(this.props.clickedSportIndex)
            this.regionBar = this.props.regions.map((item,index) => {
                if(item!==null){
                    return (
                        <li key={index} className="region" id={index}><div>{item["RegionName"]}</div></li>
                    )
                }
            });
        }
        return (
            <div>
                {this.props.regions?<ul className="sportBar">{this.regionBar}</ul>:null}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    if(state.sports.data.Sports && state.sports.index!==null){

        let ind = state.sports.index;
        {console.log(state.sports.data.Sports[ind].Regions)}
        return {
            clickedSportIndex: state.sports.index,
            regions: state.sports.data.Sports[ind].Regions
        }
    }
       return{}
}
const mapDispatchToProps = (dispatch)  => {
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Region);
