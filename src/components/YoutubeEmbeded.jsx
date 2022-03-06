
// colocar videos de youtube, prop types se coloca para qasegurar que se entrege el atributo y el video funcione y cargue como tal// 
import React from 'react';
import PropTypes from 'prop-types';

//
export default function YoutubeEmbed({ embedId}) {
     return (
          <div className="video-responsive">
             <iframe
             width="1479"
             height="546"
             src={`https://www.youtube.com/embed/${embedId}`}
             frameBorder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowFullScreen
             title="YouTube video player"
             />
     
     
          </div>
     ); 
} 

YoutubeEmbed.propTypes = {
     embedId: PropTypes.string.isRequired,
};
