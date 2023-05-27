import React from 'react';
import UseTitle from '../../Hooks/UseTitle';

const Blog = () => {
    UseTitle("Blog");
    return (
        <div>
            <h1 className='text-primary'>This is Blog Page</h1>
        </div>
    );
};

export default Blog;