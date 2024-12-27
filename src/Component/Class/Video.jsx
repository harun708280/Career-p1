import React from 'react';

const Video = ({video}) => {
    
    
    return (
        <div data-aos="zoom-in-up" className=''>
            <iframe className="w-full h-[400px]" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    );
};

export default Video;