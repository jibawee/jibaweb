import { useEffect, useRef, useState } from 'react';

export default function Art(){
    const [loaded, setLoaded] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new MutationObserver(() => {
            if (containerRef.current?.querySelector('iframe')) {
                setLoaded(true);
                observer.disconnect();
            }
        });

        if (containerRef.current) {
            observer.observe(containerRef.current, { childList: true, subtree: true });
        }

        if (window.instgrm) {
            window.instgrm.Embeds.process();
        } else {
            const script = document.createElement('script');
            script.async = true;
            script.src = '//www.instagram.com/embed.js';
            document.body.appendChild(script);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="p-30 pt-40 grid place-items-center" ref={containerRef}>
            {!loaded && (
                <div className="flex items-center justify-center py-10">
                    <div className="w-10 h-10 rounded-full border-4 border-pink-400 border-t-transparent animate-spin" />
                </div>
            )}
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