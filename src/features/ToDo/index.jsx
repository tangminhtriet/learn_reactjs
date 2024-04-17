import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

const TodoFeature = (props) => {
    return (
        <div>
            <Routes>
                <Route path='/' Component={ListPage} exact />
                <Route path='/todo/detail' Component={DetailPage} />
            </Routes>
        </div>
    );
};
TodoFeature.propTypes = {};
export default TodoFeature;