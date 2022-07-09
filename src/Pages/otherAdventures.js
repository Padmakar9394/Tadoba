import React, { useState } from "react";
import Slider from "react-slick"
import {PrevArrow, NextArrow} from "./../settings/Arrows";

const AdventureCard = (props) => {
  return (
    <>
      <div className="mx-2 my-4 w-full lg:w-[320px] border border-[#8ac5d7] hover:border-[#e67817] rounded-xl hover:bg-[#efefef]">
        <div className="h-44 rounded-t-xl overflow-hidden">
          <img
            src={props.src}
            alt="food"
            className="w-full h-full rounded-t-xl object-cover transform transition duration-700 hover:scale-125"
          />
        </div>
        <div className="flex flex-col items-center font-['Roboto_Slab']">
          <h1 className="my-2 text-center font-bold text-lg text-[#55595C] leading-[26px]">{props.title}</h1>
          <p className="text-center text-[#55595C] px-1">{props.description}</p>
          <h3 className="my-1 px-2 font-semibold text-center text-[#55595C]">{props.location}</h3>
          <button className="px-4 py-2 mt-2 mb-3 bg-[#8ac5d7] hover:bg-[#e67817] hover:text-white rounded font-semibold">
            <h2 className="my-1">{props.post}</h2>
            {
              props.isNumber &&
                <h4 className="">+91-{`${props.isNumber}`}</h4>
            }
          </button>
        </div>
      </div>
    </>
  )
};

const WildCard = (props) => {
  return (
    <>
      <div className="h-64 px-1">
        <img
          src={props.src}
          alt="wild-image"
          className="w-full h-full"
        />
      </div>
    </>
  );
};

const OtherAdventures = () => {
  const images = [
    "https://mytadoba.org/wp-content/uploads/2022/02/activities-machaan.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/02/activities-night-safari.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/02/activities-birding.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/02/activities-butterfly.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/02/activities-camping.jpg",
  ];
  const settings = {
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow : <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
      <>
        <div className="relative">
          <div className="h-[400px] fixed">
            <img src="https://mytadoba.org/wp-content/uploads/2022/02/site-back.png"
                 className="h-full object-cover"
                 alt="bg-img"
            />
          </div>
          <div className="absolute top-0">
            <div className="relative">
              <div className="h-32 md:h-[250px]">
                <img src="https://mytadoba.org/wp-content/uploads/2022/02/adventures-featured-image.jpg"
                     alt="bg-img"
                     className="h-full object-fill"
                />
              </div>
              <h1 className="md:px-24 text-white text-lg md:text-2xl uppercase font-bold mt-16 absolute left-28 md:left-0 bottom-0">other adventures</h1>
            </div>
            <section className="w-screen">
              <div className="bg-[#EBEBEB] md:px-32 my-12">
                <Slider {...settings}>
                  {images.map((image) => (
                    <WildCard src={image} />
                  ))}
                </Slider>
              </div>
              <div className="px-6 md:px-32">
                <hr className="bg-cyan-300" />
              </div>
            </section>
            <div className="md:px-32 mt-8 flex flex-wrap">
              <AdventureCard
                  src="https://mytadoba.org/wp-content/uploads/2022/02/activities-adventure.jpg"
                  title="AGARZARI ADVENTURE PARK"
                  description="Get in touch with your wild side at our Adventure Park. From rappelling to climbing, zip-lining and zorbing, there's a host of activities on offer here."
                  location="Location: Agarzari (Moharli Zone)"
                  post="Activity Manager"
                  isNumber="7743951117"
              />
              <AdventureCard
                  src="https://mytadoba.org/wp-content/uploads/2022/02/activities-birding-3.jpg"
                  title="BIRDING MACHANS"
                  description="Experience the variety and beauty of Tadoba's bird life from a camouflaged machan."
                  location="Locations: Moharli and Sitarampeth Price: ₹1500 including Guide Fees // Two visitors per machan"
                  post="Book Activity"
              />
              <AdventureCard
                  src="https://mytadoba.org/wp-content/uploads/2022/02/activities-boating-2.jpg"
                  title="BOATING: ERAI BACKWATERS"
                  description="Take a boat ride on the calm waters of the Erai Reservoir. Spot migratory and resident waterfowl and, on the longer rides, wildlife."
                  location="Location: Sitarampeth (Moharli Zone) Price: Per Hour: ₹2000 | Per Half Hour: ₹1200"
                  post="Activity Manager"
                  isNumber="9730853324"
              />
              <AdventureCard
                  src="https://mytadoba.org/wp-content/uploads/2022/02/activities-butterfly-2.jpg"
                  title="BUTTERFLY WORLD"
                  description="A unique butterfly garden with specially designed host and food paths, and a dedicated information centre.."
                  location="Location: Agarzari (Moharli Zone)"
                  post="Book Activity"
                  isNumber="9730853324"
              />
              <AdventureCard
                  src="https://mytadoba.org/wp-content/uploads/2022/02/activities-cycling.jpg"
                  title="CYCLING TRAIL"
                  description="A 15km guided ride through the unspoilt jungles of Tadoba's Buffer Zone."
                  location="Route: Agarzari - Adegaon - Devada ₹2000 For 1-5 People (2 Guides) // ₹4000 For 6-10 People (4 Guides)"
                  post="Book Activity"
              />
              <AdventureCard
                  src="https://mytadoba.org/wp-content/uploads/2022/02/activities-kayaking.jpg"
                  title="KAYAKING"
                  description="Enjoy Tadoba's bird life, see the sun rise or set over serene waters. Set your own pace!"
                  location="Locations: Junona Gate (Moharli Zone) and Gondhomali-Belara Gate (Kolara Zone)"
                  post="KAYAKING Manager"
                  isNumber="7057700632"
              />
              <AdventureCard
                  src="https://mytadoba.org/wp-content/uploads/2022/02/activities-log-hut-stay.jpg"
                  title="LOG HUT STAY"
                  description="Experience a night in the jungle in the basic comforts of a log hut."
                  location="Locations: Junona and Adegaon Gates (Moharli Zone) ₹4500 for 2 people including gypsy and guide charges // 5:30 PM to 6:30 AM"
                  post="Book Activity"
              />
              <AdventureCard
                  src="https://mytadoba.org/wp-content/uploads/2022/02/activities-machan-stay.jpg"
                  title="MACHAN STAY"
                  description="A unique jungle experience! Spend the night atop a machan by a waterhole."
                  location="Locations: Agarzari, Devada, Adegaon and Junona Gates (Moharli Zone) ₹4500 for 2 people including gypsy and guide charges // 5:30 PM to 6:30 AM"
                  post="Book Activity"
              />
              <AdventureCard
                  src="https://mytadoba.org/wp-content/uploads/2022/02/activities-camping-2.jpg"
                  title="NATURE CAMPING"
                  description="A nature camping site with 10 well-furnished tents, and a kitchen, dining hall and conference hall. Located near the Adventure Park. Perfect for nature education and awareness events."
                  location="Location: Agarzari Gate (Moharli Zone)"
                  post="Book Activity"
              />
              <AdventureCard
                  src="https://mytadoba.org/wp-content/uploads/2022/02/activities-nature-trail.jpg"
                  title="NATURE TRAIL"
                  description="A true walk on the wild side with our expert guides. Watch for pugmarks!"
                  location="Location: Agarzari (Moharli Zone) ₹2000 For 1-5 People (2 Guides) // ₹4000 For 6-10 People (4 Guides)"
                  post="Activity Manager"
                  isNumber="9730853324"
              />
              <AdventureCard
                  src="https://mytadoba.org/wp-content/uploads/2022/02/activities-night-safari-2.jpg"
                  title="NIGHT SAFARI"
                  description="No urban nightlife compares to the jungle after dark! Our three-hour Night Safari is an incredible way to experience it."
                  location="Location: Junona Gate (Moharli Zone) ₹4000 including guide fees // Timing: 7 PM to 10 PM // Max 6 people"
                  post="Book Activity"
              />
            </div>
          </div>
        </div>
      </>
  )
};


export default OtherAdventures;
