import React from 'react';
import UseTitle from '../../Hooks/UseTitle';

const News = () => {
    UseTitle("News");
    return (
        <div>
            <h1 className='text-warning'>this is news page</h1>
        </div>
    );
};

export default News;