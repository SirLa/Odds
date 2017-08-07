
import React, { Component } from 'react';
import '../css/header.css';
import Menu from './Menu';
class Header extends Component{
    constructor(){
        super();
        this.state={
            menuStatus:false
        };
        this.changeMenuStatus = this.changeMenuStatus.bind(this);
    }
    changeMenuStatus() {
        this.setState({menuStatus:!this.state.menuStatus});
    }
    render(){
        return(
            <div className="header_container flex">
                <div className="row flex">
                    <div className="menu_icon" id="menu_icon" onClick={this.changeMenuStatus}>
                        <div className="icon_item"></div>
                        <div className="icon_item"></div>
                        <div className="icon_item"></div>
                    </div>
                    <div className="header flex">
                        <div className="logo">
                            {/*<img className="logo-img" src="https://vignette4.wikia.nocookie.net/farcry/images/1/19/FC3_cutout_snake.png/revision/latest?cb=20130904101511" alt="BetConstruct"/>*/}
                            <img className="logo-img" src="http://icons.iconarchive.com/icons/martin-berube/animal/256/snake-icon.png" alt="BetConstruct"/>
                        </div>
                    </div>
                </div>
                <Menu openStatus={this.state.menuStatus} />
            </div>
        );
    }
}
export default Header;