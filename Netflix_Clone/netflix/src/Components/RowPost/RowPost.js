import React ,{useState,useEffect} from 'react'
import './RowPost.css'
import axios from '../axios'
import { imageUrl,API_KEY} from '../Constants/Constants'
import Youtube from 'react-youtube'

function RowPost(props) {
    const[movies,setMovies]=useState([]);
    const[urlId,setUrlId]=useState('')
    useEffect(()=>{
        axios.get(props.url).then(response=>{
           // console.log(response.data)
            setMovies(response.data.results)
        }).catch(err=>{
            //alert('network error);
        })
    },[])
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const handleMovie=(id)=>{
     console.log(id);
     axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        if(response.data.results.length!==0){
            setUrlId(response.data.results[0])
            console.log(response.data)
        }else{
            console.log("Trailer not available")
            alert("Trailer not availabe")
        }
     })
    }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
        <div className='posters'>
        {movies.map((obj)=>{
            return(        
                <img onClick={()=>handleMovie(obj.id)} alt='card' className={props.isSmall? "smallposter":"poster"} src={`${imageUrl +obj.backdrop_path}`}></img>
)
        })}
        

        </div>
     { urlId &&<Youtube  opts={opts}  videoId={urlId.key} /> }
    </div>
  )
}

export default RowPost
