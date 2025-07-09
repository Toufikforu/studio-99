// import React from "react";

function MusicArea() {
  return (
    <div>
      {/* Music Video Section with Embedded Video */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Video Section Title</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Music Video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="mb-3">Song Title - Artist Name</h3>
            <p>
              This is a brief description of the music video, highlighting the
              artist's style, genre, and key elements of the video.
            </p>
            <a href="#" className="btn btn-outline-light px-5 brand">
              Watch Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MusicArea;
