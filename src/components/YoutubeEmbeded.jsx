
// colocar videos de youtube 
import React from 'react';
import PropTypes from 'prop-types';

const YoutubeEmbed = ({ embedId}) => (
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

YoutubeEmbed.propTypes = {
     embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;