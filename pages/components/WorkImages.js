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
  return (
    <section>
      <div className="flex flex-col gap-2 py-3 lg:flex-row lg:flex-wrap">
        {sliderData.map((pic, index) => {
          return (
            <div key={index} className="basis-1/3 flex-1">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={pic.url}
                alt={`Slide ${index}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkImages;
