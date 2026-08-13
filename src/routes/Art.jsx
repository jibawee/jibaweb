import { useEffect } from 'react';

export default function Art(){
    useEffect(() => {
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        } else {
            const script = document.createElement('script');
            script.async = true;
            script.src = '//www.instagram.com/embed.js';
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div className="p-30 grid place-items-center">
            <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/jibaw33/?utm_source=ig_embed&utm_campaign=loading"
                data-instgrm-version="14"
                style={{
                    background: '#FFF',
                    border: 0,
                    borderRadius: '3px',
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '1px',
                    maxWidth: '1080px',
                    minWidth: '326px',
                    padding: 0,
                    width: '99.375%',
                }}
            />
        </div>
    );
}