import React from 'react';

const Content = (props) => {
    const { state, data, err } = props;
    if(!state && !err && data !== null) {
        const content = data.results;
        return(
            <div className="row row--gutter row--gutter-large row--insert-top-padding row--spacing">
                {
                    content.map(el => {
                        return (
                            <div className="column-1-of-4" key={el.id}>
                                <div className="list-item">
                                    <div className="list-item--header"></div>
                                    <div className="list-item--container">
                                        <div className="list-item--container-header">
                                            <img className="lazyload" src={`https://image.tmdb.org/t/p/original/${el.poster_path}`} alt="movie-image" />
                                            <div className="list-item--container-header-title">
                                                <span className="list-item--container-header-text">
                                                    {el.title}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="list-item--container-inside">
                                            <div> {el.overview.substr(0,105)}... </div>
                                            <span className="list-item--divider"> </span>
                                            <div>
                                                <span>Release Date:</span>
                                                {el.release_date}
                                            </div>
                                            <span className="list-item--divider"> </span>
                                            <div>
                                                <span>Vote Average:</span>
                                                {el.vote_average}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        )
    }

    return null
}

export default Content;




