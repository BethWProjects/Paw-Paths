import React from "react";
import CarouselCard from "../CarouselCard/CarouselCard";
import "./Carousel";
import "./Carousel.css";
import { fetchAllPaths } from "../../api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newData: null,
      randomFive: null,
    };
  };

  componentDidMount = async () => {
    
    try {
      const pathList = await fetchAllPaths();
      const newData = await pathList.json();
      this.setState({ newData: newData});
      this.setFiveRandom(newData);
    } catch {
      this.setState({
        error: "Error Getting Paths",
      });
    };
  };

  setFiveRandom = (data) => {
    const randomPathData = data.sort((a, b) => 0.5 - Math.random()).slice(0, 5);
    this.setState({ randomFive: randomPathData });
  };

  render() {
    let content;
    this.state.randomFive &&
      (content = this.state.randomFive.map((path) => {
        return (
          <SwiperSlide className="swiper-slide" key={path.id}>
            <CarouselCard
              img={path.image}
              title={path.title}
              type={path.type}
              key={path.id}
              id={path.id}
            />
          </SwiperSlide>
        );
      }));
    return (
      <div>
        <h2 className="featured-hikes">Featured Hikes & Parks</h2>
        <div className="carousel-wrapper">
          <div className="carousel-container">
            <Swiper
              modules={[Navigation, Mousewheel, Keyboard]}
              spaceBetween={15}
              loop={true}
              initialSlide={2}
              centeredSlides={true}
              breakpoints={{
                200: {
                  slidesPerView: 1,
                },

                500: {
                  slidesPerView: 2,
                },
                769: {
                  slidesPerView: 3,
                },
              }}
              slidesPerView={3}
              navigation={true}
              keyboard={true}
              mousewheel={true}
              className="all-swiper-paths"
            >
              {content}
            </Swiper>
          </div>
        </div>
      </div>
    );
  }
}
export default Carousel;
