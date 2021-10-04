import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import "./App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [total, setTotal] = useState();
  const [pages, setPages] = useState(1);
  const [keyword, setKeyword] = useState('pirate');
  const [errorMessage, setErrorMessage] = useState(null);

  const getMovies = (term='', page= 1) => {
    fetch(`https://www.omdbapi.com/?s=${term}&page=${page}&plot=full&apikey=d4f7bffb`)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setTotal(Math.ceil(jsonResponse.totalResults/10));
        setPages(page);
        setIsLoaded(true);
        setErrorMessage(errorMessage);
      })
  }
   
  const getMovie = (movieId) => {
    fetch(`http://www.omdbapi.com/?i=${movieId}&plot=full&apikey=d4f7bffb`)
      .then(response => response.json())
      .then(jsonResponse => {
          setMovie(jsonResponse);
          console.log("this is " + jsonResponse)
      })
  }

  const handlePageClick = e => {
    console.log("selected" + e.selected); //start from 0 wehre as pages starts from 1
    getMovies(keyword, (e.selected + 1));
   console.log("current page" + pages ) // OFF!!!!
  }

  const handleCardClicked = movieId => {
    console.log(movieId);
    getMovie(movieId);  
  }

  useEffect(() => {
    getMovies(keyword)
  }, [keyword]);

  const genCards = () => {
    const allCards = [];
    if(movies){
      movies.map(movie => {
        allCards.push(<Movie {...movie} cardClicked={handleCardClicked} />);
      });
    }
    return allCards;
  }
  
  const allCards = genCards();


    return (
     <div className="App">
      <Header text="Movie Database" />
      <div className="container-fluid">
      <div className="row">
          <Search 
            getInputValue={val => setKeyword(val)} 
            getSubmit={() => getMovies(keyword)
            }
          />
        </div>
        <div className="row">
          <div className="accordion accordion-flush" id="accordion" >
            {/* {loading && !errorMessage ? (
            <span>loading...</span>
            ) : errorMessage ? (
              <div className="errorMessage">{errorMessage}</div>
            ) : (
              movies.map((movie, index) => (
                <Movie key={`${index}-${movie.Title}`} movie={movie}/>
                
              ))
            )} */}
      
            { !isLoaded ? (
            <span>loading...</span>
            ): 
            (allCards.length === 0 ? 
            <div className='error'>
              No movie found...
              <i className="far fa-grin-beam-sweat"></i>
            </div> : allCards) }
        
          </div>
        </div>
        <div className="row">
          <ReactPaginate 
            previousLabel={"<"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLabel={">"}
            nextLinkClassName={"page-link"}
            nextClassName={"page-item"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={total}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            forcePage={pages - 1}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </div>
  );
};

export default App;