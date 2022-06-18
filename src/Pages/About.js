import React from "react";

import AboutSlider from "../Components/Slider/AboutSlider";
import WildLifeGallerySliderMammels from "../Components/Slider/WildLifeGallerySliderMammels";
import WildLifeGallerySliderReptiles from "../Components/Slider/WildLifeGallerySliderReptiles";
import WildLifeGallerySliderBirds from "../Components/Slider/WildLifeGallerySliderBirds";
import WildLifeGallerySliderInscets from "../Components/Slider/WildLifeGallerySliderInsects";

const About = () => {
  return (
    <>
      <div className="px-2 md:px-16 md:mt-44">
        <h1 className="text-center md:text-start text-2xl uppercase font-bold mt-16">About Us</h1>
        <div className="px-4 md:px-8 flex flex-col items-start md:flex-row md:items-center md:gap-20 font-['Roboto_Slab'] my-12">
            <p className="block font-['Roboto_Slab'] text-lg leading-7">
              <span className=""><span className="inline-block align-text-top text-[#8ac5d7] text-6xl leading-8">
              T</span></span>
              here is a story that is told in these parts: the mythology of a man who became a deity. Taru, a Gond tribal, a respected village headman, encountered a mighty tiger at a lake near his village. A fierce battle ensued, though its conclusion is disputed: some say that Taru vanquished the tiger, others believe that it was Taru, despite his valiance, who was slain. At any rate, the man passed into legend. A shrine was erected in his honour and the lake, as well as the forests surrounding it, came to bear his name. Hence, from Taru, comes Tadoba.<br /><br />The Gond kings ruled over this area for several centuries, as they did much of central India. The Marathas established their rule in the the 18th century, followed by the British about a century later. Tadoba’s forests and grasslands became part of the ‘Raj’ and subject to its forest management practices. The protection of timber stocks was the primary interest, wildlife conservation followed incidentally. The area was declared a Reserved Forest in 1879. The shooting of tigers, except with ‘special permits’ was stopped in 1905. Restrictions were placed on the shooting of all animals in 1931. A total of 45 sq km surrounding the Tadoba lake was proclaimed a sanctuary in 1935. In 1942 the area was declared a game reserve, with Moharli, Karwa, Kalsa and Mul being the designated shooting blocks. Permits were issued to shoot tigers in the Karwa and Kalsa blocks.<br /><br />Tadoba became one of India’s earliest national parks when it was so notified in 1955, the same year as Kanha. Yet its forests, grasslands and wildlife continued to suffer due to overexploitation, extensive cultivation, hunting and poaching. It was only in the 1970s that the four hunting blocks were finally closed for business, though illegal hunting continued. In 1986, 506.32 sq km of forest land adjoining the national park was notified as the Andhari Wildlife Sanctuary. The national park and the wildlife sanctuary were finally merged in 1993 when Tadoba-Andhari Tiger Reserve (TATR), spanning 622.87 sq km, was established.
            </p>
          <p className="my-4 md:my-0 font-['Roboto_Slab'] text-4xl text-[#8ac5d7] text-center">
              Tadoba became one of India’s earliest national parks when it was notified in 1955, the same year as Kanha.
          </p>
        </div>
      </div>
      <section className="bg-[#EBEBEB]">
        <div className="md:px-16">
          <AboutSlider />
        </div>
      </section>
      <div className="px-4 md:px-16">
        <div className="px-2 md:px-8 md:flex md:items-center gap-20 font-['Roboto_Slab'] my-12">
            <p className="block font-['Roboto_Slab'] text-lg leading-7">
              The notification of the tiger reserve was, of course, only a beginning. The TATR that you see today, this internationally acclaimed biodiversity haven, is the legacy of all the dedicated forest officers, frontline forest staff, and members of NGOs and fringe communities that have worked over the decades to protect it. Sustained conservation efforts have led to the revival of tigers and other wildlife here. These have included the creation of undisturbed areas through the incentivised voluntary relocation of villages from inside the core area, grassland development to improve prey base populations, improving of water availability through water conservation measures, intensive monitoring of tigers, and most important, strong, sustained protection measures to safeguard wildlife from all threats.<br/><br />Today, Tadoba-Andhari Tiger Reserve is regarded as one of the world’s most preferred tiger destinations, a glittering jewel in the Project Tiger crown. We are proud that our tigers (over 80 in the reserve and 200 in the larger landscape) are secure and able to multiply in the presence of humans. Thanks to the reserve’s functional connectivity with other protected areas in the central Indian tiger landscape, Tadoba’s tigers are now found restocking the gene pools of protected areas such as  Navegaon-Nagzira, Brahmapuri, Umred-Karhandla and Tipeshwar, and forests as far afield as Kawal, Nagarjunsagar and Indravati.<br/><br />
              Tigers generate the most interest and occupy the top position in the food web but it is the forest in its entirety, all creatures great and small, that make this tiger reserve tick. Tadoba’s enchantment is in the southern tropical dry deciduous jungle with its myriad grasslands and waterbodies. It is in the groves of bamboo, a keystone plant in this landscape that supplements food availability for herbivores, keeps invasive weeds at bay, and serves as both safe harbour and ambush cover for different species. It is in the stunning variety of insect life and bird life. It is in the azure dartlets and the harvestmen, the lesser adjutant storks and the oriental magpie-robins, the Tickell’s blue flycatchers and the Indian silverbills. It is in the prey species, the wild pigs and sambar and chital, and in the predators, the jungle cats and wild dogs, the leopards and the mugger crocodiles, and the mighty tigers.<br/><br />On behalf of my team, I welcome you to enjoy the variety that Tadoba-Andhari Tiger Reserve offers. Immerse yourself in this magical landscape, allow yourself to be enchanted by it. And remember that people have laid down their lives to protect it. Respect it, for it is your natural heritage.<br /><br />
              <span className="font-semibold">Dr Jitendra Ramgaokar <br />Field Director, Tadoba-Andhari Tiger Reserve</span>
            </p>
          <p className="my-4 md:my-0 font-['Roboto_Slab'] text-3xl text-[#8ac5d7] md:text-center md:px-20">
              Today, Tadoba-Andhari Tiger Reserve is regarded as one of the world’s most preferred tiger destinations, a glittering jewel in the Project Tiger crown.
          </p>
        </div>
      </div>
      <section className="md:bg-[#EBEBEB]">
        <div className="md:flex md:px-16">
          <span className="md:flex-initial md:w-1/4"><WildLifeGallerySliderMammels /></span>
          <span className="md:flex-initial md:w-1/4"><WildLifeGallerySliderReptiles /></span>
          <span className="md:flex-initial md:w-1/4"><WildLifeGallerySliderInscets /></span>
          <span className="md:flex-initial md:w-1/4"><WildLifeGallerySliderBirds /></span>
        </div>
      </section>
    </>
  )
};

export default About;
