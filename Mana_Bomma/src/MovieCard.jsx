import React from 'react';

const MovieCard=({movie})=>{
    return(
        
        <div className="movie">
            <div>
              <p>{movie.Year}</p>
            </div>
            <div>
              <img 
                src={movie.Poster !== 'N/A'?
                  movie.Poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs9gUXKwt2KErC_jWWlkZkGabxpeGchT-fyw&s' }
                   alt={movie.Title}
              />
            </div>
            <div>
              <span>{movie.Type}</span>
              <h3>{movie.Title}</h3>
            </div>
          </div>
        
    );
}

export default MovieCard;