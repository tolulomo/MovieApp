import React, { Component } from 'react';
import { Loader, Content } from '../util';


class MainPage extends Component {


    render() {
        return (
            <main>
                <div className="main">
                    <div className="wrapper">
                        <div className="main__container">
                            <Loader state={this.props.state} />
                            <Content state={this.props.state} data={this.props.data} err={this.props.err} />
                        </div>
                    </div>
                </div>
            </main>
        )
    }

}

export default MainPage;




