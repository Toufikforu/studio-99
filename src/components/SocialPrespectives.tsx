import React from "react";
import CarouselComponent from "./movie-cards/Carousel";

const SocialPrespectives: React.FC = () => {
  // Custom images and titles for the new page's carousel
  const newImages = [
    "./img/social-prespectives/1.jpg",
    "./img/social-prespectives/2.jpg",
    "./img/social-prespectives/3.jpg",
    "./img/social-prespectives/4.jpg",
    "./img/social-prespectives/5.jpg",
    "./img/social-prespectives/6.jpg",
    "./img/social-prespectives/7.jpg",
    "./img/social-prespectives/8.jpg",
    "./img/social-prespectives/9.jpg",
    "./img/social-prespectives/10.jpg",
    "./img/social-prespectives/11.jpg",
    "./img/social-prespectives/12.jpg",
  ];

  const newTitles = [
    "Popular ss Movie 1",
    "Popular Movie 2",
    "Popular Movie 3",
    "Popular Movie 4",
    "Popular Movie 5",
    "Popular Movie 6",
    "Popular Movie 7",
    "Popular Movie 8",
    "Popular Movie 9",
    "Popular Movie 10",
    "Popular Movie 11",
    "Popular Movie 12",
  ];

  return (
    <div>
      <h2 className="sec-title">Social Prespectives</h2>
      <CarouselComponent
        images={newImages}
        titles={newTitles}
        interval={4000}
        styleClass="SocialPrespectives"
      />
    </div>
  );
};

export default SocialPrespectives;
