import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';
const AlbumFeature = (props) => {
    const AlbumList1 = [
        {
            id: 1,
            name: 'Nhac Hoa Thinh Hanh',
            thumbnailURL: 'https://picsum.photos/seed/picsum/200/200'
        },
        {
            id: 2,
            name: 'USUK',
            thumbnailURL: 'https://picsum.photos/seed/picsum/200/200'
        },
        {
            id: 3,
            name: 'Nhac Viet',
            thumbnailURL: 'https://picsum.photos/seed/picsum/200/200'
        },
    ]
    return (
        <div>
            <h4>Co the ban se thich day</h4>
            <AlbumList albumlist={AlbumList1} />
        </div>
    );
};

AlbumFeature.propTypes = {

};

export default AlbumFeature;