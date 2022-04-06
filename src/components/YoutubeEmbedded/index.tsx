import React from "react";
import "./YoutubeEmbedded.css"

function YoutubeEmbedded({ embedId } : any) {
    return (
        <section className="video-responsive">
            <iframe
                width="853"
                height="479"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="youtube"
            />
        </section>
    );
}

export default YoutubeEmbedded;
