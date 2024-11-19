import Slider from "react-slick";
import Image from "next/image";
import Flooring from "../../public/flooring.jpg";
import Flooring1 from "../../public/flooring1.jpg";
import Flooring2 from "../../public/flooring2.jpg";
import Tilewall from "../../public/tilewall.jpg";
import Tilewall1 from "../../public/tilewall1.jpg";
import Tilewall2 from "../../public/tilewall2.jpg";
import TileLaundry from "../../public/tilelaundry.jpg";
import TileLaundry1 from "../../public/tilelaundry1.jpg";
import TileBath from "../../public/tilebath.jpg";
import TileBath1 from "../../public/tilebath1.jpg";
import TileBathWall from "../../public/tilebathwall.jpg";
import TileBathWall1 from "../../public/tilebathwall1.jpg";

const sliderData = [
  { url: Flooring },
  { url: Flooring1 },
  { url: Flooring2 },
  { url: Tilewall },
  { url: Tilewall1 },
  { url: Tilewall2 },
  { url: TileLaundry },
  { url: TileLaundry1 },
  { url: TileBath },
  { url: TileBath1 },
  { url: TileBathWall },
  { url: TileBathWall1 },
];

const WorkImages = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section>
      <div className="py-5">
        <Slider {...settings}>
          {sliderData.map((pic, index) => (
            <div key={index} className="px-2">
              <Image
                className="rounded-lg"
                src={pic.url}
                alt={`Slide ${index}`}
                layout="responsive"
                width={300}
                height={200}
                objectFit="cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkImages;
