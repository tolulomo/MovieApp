import React from 'react';

const Loader = (props) => {
    if(props.state) {
        return(
            <div className="loader">
                <svg>
                    <use href="./assets/images/loader.svg#icon-cw"></use>
                </svg>
            </div>
        )
    }

    return null
}

export default Loader;