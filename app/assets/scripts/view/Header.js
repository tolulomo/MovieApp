import React, { Component } from 'react';

class Header extends Component {
    showSearchBox = () => {
        this.props.dsf();
        document.querySelector(".header__searchbox").classList.toggle("hide");
        const searchExist = document.querySelector(".hide");
        if(searchExist === null) {
            return alert("Click on logo when done to cancel search");
        }
        return;
    }

    render() {
        return (
            <header>
                <div className="header">
                    <div className="wrapper wrapper--header">
                        <div className="header__title" onClick={this.showSearchBox}>
                            <div className="header__title--main">KM Movie</div>
                            <div className="header__title--sub">...a code challenge</div>
                        </div>
                        <button onClick={this.showSearchBox} className="header__search"><span>&#9740;</span></button>
                    </div>
                    <div className="header__searchbox hide">
                        <input type="text" className="input--textbox" placeholder="Search Movies" id="searchbox" onKeyUp={(e) => this.props.searchMovies(e)} />
                        <label htmlFor="searchbox" className="input--label">Search Movies</label>
                    </div>
                </div>
            </header>
        )
    }

}

export default Header;