import React from "react";
import Card from "../Card/Card";
import "./Carousel";
import "./Carousel.css";
import { fetchAllPaths } from "../../api";
import { Navigation, Keyboard, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/keyboard';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newData: null,
      randomFive: null,
    };
  };

  swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    ...
  });

  componentDidMount = async () => {
    try {
      const pathList = await fetchAllPaths();
      const newData = await pathList.json();
      this.setState({ newData: newData });
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
          <SwiperSlide className="swiper-slide">
          <Card
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
        <div className="carousel-container">
          <Swiper
            modules={[Navigation, Scrollbar, Keyboard ]}
            slidesPerView={3}
            navigation={true}
            keyboard={true}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >   
          {content}
          </Swiper>
          </div>
      </div>
    );
  }
}
export default Carousel;
