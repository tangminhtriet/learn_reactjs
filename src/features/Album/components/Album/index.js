import React from 'react';
import PropTypes from 'prop-types';

const Album = ({ album }) => {
    return (
        <div>
            <p className='album__name'>{album.name}</p>
            <div>
                <img src={album.thumbnailURL} alt={album.name} />
            </div>
        </div>
    );
};

Album.propTypes = {

};

export default Album;