import "./slider.css";

function Slider() {
  return (
    <div id="mainSlider" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="slider-slide">
            <div className="slider-overlay">
              <div className="slider-content">
                <h2>Slide 1 Title</h2>
                <p className="py-3">Subtitle for Slide 1 goes here</p>
                <button className="btn btn-outline-light px-5 active">
                  Explore
                </button>
              </div>
            </div>
            <img src="/img/slider/1.jpg" className="slider-bg" alt="Slide 1" />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="slider-slide">
            <div className="slider-overlay">
              <div className="slider-content">
                <h2>Slide 2 Title</h2>
                <p className="py-3">Subtitle for Slide 2 goes here</p>
                <button className="btn btn-outline-light px-5 active">
                  Learn More
                </button>
              </div>
            </div>
            <img src="/img/slider/2.jpg" className="slider-bg" alt="Slide 2" />
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div className="slider-slide">
            <div className="slider-overlay">
              <div className="slider-content">
                <h2>Slide 3 Title</h2>
                <p className="py-3">This is the subtitle for Slide 3</p>
                <button className="btn btn-outline-light px-5 active">
                  Explore
                </button>
              </div>
            </div>
            <img src="/img/slider/3.jpg" className="slider-bg" alt="Slide 3" />
          </div>
        </div>

        {/* Slide 4 */}
        <div className="carousel-item">
          <div className="slider-slide">
            <div className="slider-overlay">
              <div className="slider-content">
                <h2>Slide 4 Title</h2>
                <p className="py-3">Subtitle for Slide 4 goes here</p>
                <button className="btn btn-outline-light px-5 active">
                  Get Started
                </button>
              </div>
            </div>
            <img src="/img/slider/4.jpg" className="slider-bg" alt="Slide 4" />
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#mainSlider"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#mainSlider"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
