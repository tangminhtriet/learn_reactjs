import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';


const AlbumList = ({ albumlist }) => {
    return (
        <div>
            <ul className="album-list">
                {albumlist.map(album => (
                    <li key={album.id}>
                        <Album album={album} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

AlbumList.propTypes = {
    albumlist: PropTypes.array.isRequired
};

export default AlbumList;