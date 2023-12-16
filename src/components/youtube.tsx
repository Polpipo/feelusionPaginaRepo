import React from 'react';
import YouTube from 'react-youtube';

const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
        autoplay: 1,  // Auto-play the video on load
        controls: 0,  // Hide player controls
        loop: 1,      // Loop the video
        rel: 0,       // Hide related videos
        playlist: 'OU-00mRCgDc',  // Required for looping, same video ID
        mute: 1,
        modestbranding: 1,
        showinfo: 0,
    }
};

const Youtube: React.FC = () => {
    return (
        <>
        <div className="relative h-screen w-full bg-black">
                <YouTube videoId='OU-00mRCgDc' opts={opts} className="w-full object-cover absolute h-full" />
                <div className="absolute border-black border-[70px] border-r border-l h-full w-full z-10">

                </div>

        </div>

        </>
    );
}

export default Youtube;
