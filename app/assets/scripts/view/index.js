import React, { Component, Fragment } from 'react';
import Header from './Header';
import MainPage from './Main'
import Footer from './Footer';
import Key from '../util/ApiKeys';

class MovieApp extends Component {
    state = {
        loading: true,
        data: null,
        error: false,
        page: 1,
        searchData: null,
        searchValue: null,
        search: false,
        searchPage: 1
    }

    async componentDidMount(){
        return await this.callApi();
    }

    paging = async(x,y) =>{
        if(x === 'prev'){
            if(this.state.search) {
                this.setState({loading:true, searchPage: this.state.searchPage-1 < 1 ? 1: this.state.searchPage--})
            } else {
                this.setState({loading:true, page: this.state.page-1 < 1 ? 1: this.state.page--})
            }
        } else {
            if(this.state.search) {
                this.setState({loading:true, searchPage: this.state.searchPage+1 > y ? this.state.searchPage: this.state.searchPage+1})
            } else {
                this.setState({loading:true, page: this.state.page+1 > y ? this.state.page: this.state.page+1})
            }
        }
        return await this.callApi();
    }

    dsf = () => {
        if(this.state.search) {
            return this.setState({search:false, searchValue:null, loading:false});
        } else {
            return this.setState({search:true });
        }
    }

    searchMovies = (event) => {
        const input = document.getElementById('searchbox');
        let timer = null;
        this.setState({loading:true});
        if(!input.value) {
            return this.setState({searchData:null, searchValue:null, loading:false})
        }
        clearTimeout(timer);
        return (
            timer = setTimeout(async() => {
                const movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${Key.apiKey}&query=${input.value}&page=${this.state.searchPage}`);
                if(movies.status === 200) {
                    const result = await movies.json();
                    return this.setState({ searchData:result, searchValue:input.value, loading: false })
                }
                return this.setState({error:true});
            }, 2000)
        )
    }

    callApi = async() => {
        let movies;
        if(this.state.search){
            movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${Key.apiKey}&query=${this.state.searchValue}&page=${this.state.searchPage}`);
        }else {
            movies = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${Key.apiKey}&language=en-US&page=${this.state.page}`);
        }
        if(movies.status === 200) {
            const result = await movies.json();
            return this.state.search ? this.setState({ searchData: result, loading: false }): this.setState({ data: result, loading: false });
        }
        return this.setState({error:true});
    }

    render() {
        console.log(this.state.page);
        const content = this.state.search && this.state.searchData !== null ? this.state.searchData : this.state.data;
        const currPage = this.state.search ? this.state.searchPage : this.state.page;
        return(
            <Fragment>
                <Header searchMovies={this.searchMovies} searchValue={this.state.searchValue} dsf={this.dsf}/>
                <MainPage state={this.state.loading} data={content} err={this.state.error} />
                <Footer state={this.state.loading} total={content} currPage={currPage} paging={this.paging} />
            </Fragment>
        )
    }

}

export default MovieApp