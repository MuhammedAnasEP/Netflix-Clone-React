import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import axios from '../../Axios'
import { imageUrl, API_KEY } from '../../Constants/constants'
import './RowPost.css'

function RowPost(props) {

  const [movies, setMovies] = useState([])
  const [UrlId, setUrlId] = useState('')



  useEffect(() => {
    axios.get(props.url).then(response => {
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err => {
      alert('Network error')
    })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  function handleTrailer(id) {
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((respone) => {
      if(respone.data.results.length !==0){
        setUrlId(respone.data.results[0])
      }else{
        console.log('Array empty')
      }
    })
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {
          movies.map((obj) => {
            return (

              <img onClick={() => {handleTrailer(obj.id)}
              } className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="" />

            )
          })
        }
      </div>
      {UrlId && <YouTube videoId={UrlId.key} opts={opts} />}
    </div>
  )
}

export default RowPost
