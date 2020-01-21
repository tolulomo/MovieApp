import React, { Component } from 'react';

class Footer extends Component {
    render() {
        if(this.props.state && this.props.total === null){
            return (
                <footer>
                    <div className="wrapper insert-tm centralize">
                        <div className="pagination"><span>...loading</span></div>
                    </div>
                </footer>
            )    
        }
        const totalPages = this.props.total.total_pages;
        return (
            <footer>
                <div className="wrapper insert-tm centralize">
                    <div className="pagination pagination__prev"><button onClick={() =>this.props.paging('prev')}>Previous</button></div>
                    <div className="pagination">
                        <span>{`Currently Showing ${this.props.currPage} of ${
                            totalPages
                        }`}</span>
                    </div>
                    <div className="pagination pagination__next"><button onClick={() => this.props.paging('next',totalPages)}>Next</button></div>
                </div>
           </footer>
        )
    }

}

export default Footer;




