import React from 'react';

const ReadComment = ({commented}) => {
    
    
    return (
        <div className='grid md:grid-cols-3 mx-auto gap-10 '>
            {
                commented.map(comment=><div className='shadow-xl border p-7 text-white rounded-lg bg-gradient-to-r from-teal-500 to-primary'>
                    <div className="flex gap-6 items-center">
                        <img className='h-12 w-12 rounded-full' src={comment.user.photoURL} alt="" />
                        <h1>{comment.date}</h1>
                    </div>
                    
                    <h1 className='my-3 ml-5' >{comment.comment}</h1>
                </div>)
            }
        </div>
    );
};

export default ReadComment;