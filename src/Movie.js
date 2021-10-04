import React, { useState } from "react";

const Movie = (movie) => {
  const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

    //console.log(movie)
  const [detail, setDetail] = useState(false);
  const MovieDetail = ({Title, Poster, imdbRating, Rated, Runtime, Genre, Plot}) => {
    return (
       <div>
         {Plot}
       </div>
    )
  }
  
   
  const handleClick = (e) => {
    //console.log(e.target.dataset.id);
    // props.cardClicked(e.target.dataset.id);
    fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=d4f7bffb`)
      .then(resp => resp)
      .then(resp => resp.json())
      .then(response => {
          setDetail(response);
      })
      .catch(({message}) => {
        
      })
      console.log(detail)
    }

  
  return (
    <div className="accordion-item" >
      <div className="accordion-header" id={'heading'+movie.imdbID}>
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#collapse'+movie.imdbID} aria-expanded="false" aria-controls={'collapse'+movie.imdbID} onClick={handleClick} >
          <img src={movie.Poster !== 'N/A' ? movie.Poster : poster} alt={movie.Title} data-id={movie.imdbID} width = "70" height = "100"/>
          <div className="movie-title">{movie.Title}</div>
        </button>
      </div>
      <div id={'collapse'+movie.imdbID} className="accordion-collapse collapse" aria-labelledby={'heading'+movie.imdbID} data-bs-parent="#accordion" >
        <div className="accordion-body"><strong>Plot: </strong>{detail.Plot}</div>
      </div>
    </div>
  ) 
}

export default Movie;