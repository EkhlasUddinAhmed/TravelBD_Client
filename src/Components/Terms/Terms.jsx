import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='bg-white'>
            <h1 className="text-center text-danger text-decoration-underline">Travel Bangladesh Terms And Conditions Are Given Below</h1>
             <div className='px-5'>
             
            <h1>Iowa Data Privacy Law</h1>
            <p>The Iowa Data Privacy Law was signed into law on March 28, 2023. It will take effect on January 1, 2025. This article explains what the law aims to accomplish, who it applies to, what it requires, and offers strategies for compliance. What is the Iowa Data Privacy Law? The Iowa Data Privacy...</p>
             </div>
             <div className='px-5'>
             
            <h1>Customer Service Agreement Template</h1>
            <p>Any business that provides services to its customers should consider having a Customer Service Agreement (CSA) on its website. A Customer Service Agreement informs customers about what they can expect when they purchase your services, and their obligations when using your services. This article will take you through what a Customer...</p>
             </div>
             <div className='px-5'>
             
            <h1>Content License Policy</h1>
            <p>Content License Policies (also known as Content License Agreements) are legal documents that outline the rights and limitations surrounding the use, distribution, and modification of your content. As businesses continue to expand their online presence and create new content, understanding these documents has become increasingly important. By establishing clear Content License...</p>
             </div>

            <Link 
            to="/register"
            className='px-5'>
             <button className='btn btn-info text-white'>Back To Register</button>
            </Link>

        </div>
    );
};

export default Terms;