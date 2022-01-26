import React, { useState } from "react";
import ClientsCarousel from "../components/ClientsCarousel";
import Footer from "../components/Footer";
import Header from "../components/Header";

import NewsCard from "../components/NewsCard";
import StickyHeader from "../components/StickyHeader";

const articles = [
  {
    id: "1",
    date: "June 6, 2022",
    title: "FOOD PROCESSING PARK",
    content:
      " Equipped with plug and play modern infrastructures enabling entrepreneurs to setup food processing units close to crop production areas with an integrated and complete preservation infrastructure and facilities.",
    img: "../assets/art1.jpg",
  },
  {
    id: "2",
    date: "June 22, 2022",
    title: "LIGHT INDUSTRY PARK",
    content:
      "A safe, secure and eco-friendly environment for firms in the light industry to tap into the huge potentials of providing food processing, paper making, plastic, leather, textiles, paper,  jute and cement manufacturing companies operating in the Industrial Park with services ranging from spare parts production to maintenance operations.",
    img: "../assets/art2.jpg",
  },
  {
    id: "3",
    date: "Just now",
    title: "MULTIMODAL LOGISTICS PARK",
    content:
      " Provides a cluster of logistics companies offering tailored, flexible and streamlined logistics processes, covering air, ocean, road and rail freight – with optimal cost-efficiency and flexibility in routing and transit times.",
    img: "../assets/art3.jpg",
  },
  {
    id: "4",
    date: "January 22, 2022",
    title: "AGRO ALLIED PARK",
    content:
      " Ready to play host to Agro Allied Industries, the GEZ will facilitate the enabling environment for local and international firms to thrive and increase the contribution of the agriculture sector to GDP, foster wealth and employment creation for the youth.",
    img: "../assets/art4.jpg",
  },
];
const Home = () => {
  const [navbar, setNavbar] = useState(false);
  const navHandler = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", navHandler);
  return (
    <div>
      <section>
        <div className="fixed w-full">
          {navbar ? <StickyHeader /> : <Header />}
        </div>
        <div
          className="w-full h-screen bg-no-repeat bg-cover flex flex-col justify-center items-left"
          style={{
            backgroundImage: "url(/assets/background.jpg)",
          }}
        >
          <div className="text-white text-left text-6xl font-bold px-20 leading-tight">
            THE <span className="text-green-600">GREEN</span> <br />
            ECONOMIC ZONE
            <p className="text-base text-white pt-5 font-semibold">
              The Kaduna State government and KK Kingdom Nigeria Limited entered
              <br /> into a public private partnership to develop the green
              economic zone.
            </p>
          </div>
        </div>
      </section>

      <section className="">
        <div className="text-3xl flex h-screen">
          <div
            className=" w-3/6 flex flex-col justify-center items-center"
            style={{ background: "#EBEBEB", color: "#000" }}
          >
            <div className="px-20 py-8">
              <p className="text-2xl font-semibold py-8 text-gray-700">
                GREEN GROWTH<span className="text-green-600 font-bold">/</span>
              </p>
              <p className="font-light text-gray-700">
                “<span className="text-green-600">Green</span> Growth means
                fostering economic growth and development, while ensuring that
                natural assets continue to provide the resources and
                environmental services on which our well-being relies”.
              </p>
              <p className="cursor-pointer text-green-600 text-base font-semibold py-8">
                LEARN MORE...
              </p>
            </div>
          </div>
          <div
            className="w-3/6 flex flex-col justify-center items-center"
            style={{ background: "#373A36", color: "#fff" }}
          >
            <div className="px-20 py-8">
              <p className="text-2xl font-semibold py-8 text-white">
                OUR OFFERINGS
                <span className="text-green-600 font-bold">/</span>
              </p>
              <p className="font-light font-semibold">
                GEZ Special Area will take advantage of the open system, promote
                the integration of local and international business,
                cross-border financial services, cutting-edge scientific and
                technological research and development, cross-border service
                trade, and other functions.
              </p>
              <p className="cursor-pointer text-green-600 text-base font-semibold py-8">
                LEARN MORE...
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-20">
          <p className="text-2xl font-semibold py-8 text-gray-700">
            CLUSTERS AND LAYOUT
            <span className="text-green-600 font-bold">/</span>
          </p>
          <div className="flex flex-wrap -m-4">
            {articles.map((article) => {
              return <NewsCard article={article} />;
            })}
          </div>
          <p className="cursor-pointer text-green-600 text-base font-semibold py-8">
            READ MORE NEWS...
          </p>
        </div>
      </section>
      <section>
        <div style={{ background: "#dddddd" }} className="px-20">
          <p className="text-2xl font-semibold py-8 text-gray-700">
            OUR PARTNERS<span className="text-green-600 font-bold">/</span>
          </p>
          <ClientsCarousel />
        </div>
      </section>
      <section>
        <div
          style={{ background: "#373A36" }}
          className="w-full text-center mt-10 "
        >
          <div className="py-16 flex justify-center items-center flex-col">
            <div className="w-20">
              <img className="w-full" src="../assets/doc3.png" alt="" />
            </div>
            <p className="text-3xl font-semibold py-8 text-white">
              DOWNLOAD OUR BROCHURE
              <span className="text-green-600 font-bold">/</span>
            </p>
            <p className="cursor-pointer text-green-600 text-base font-semibold">
              Click here...
            </p>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
