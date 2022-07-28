import React, {useState} from "react";
import ReactCardFlip from "react-card-flip";


const Projects = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const [isFlipped5, setIsFlipped5] = useState(false);
  const [isFlipped6, setIsFlipped6] = useState(false);
  return (
    <>
    <div className="flex flex-col md:flex-row gap-4 ">
      <div className="">
        <ReactCardFlip isFlipped={isFlipped1} flipDirection="vertical" clas>
          <div
            onMouseEnter={() => setIsFlipped1((prev) => !prev)}
            className="CardFront w-88 md:w-80 h-96 w-88 md:w-80 h-96"
          >
            <div className="relative w-88 md:w-80">
              <img src="https://mytadoba.org/wp-content/uploads/2022/02/donation-post-fieldstaff.jpg"
                   alt="cardFlip"
                   className="absolute w-88 md:w-80 h-96"/>
              <div className="absolute w-88 md:w-80 h-96 inset-0 bg-[#20754B94] bg-opacity-80"/>
              <div className="relative text-white pt-8 px-6 text-center font-['Roboto_Slab']">
                <h1 className="font-bold text-xl">VEHICLES FOR FRONTLINE STAFF</h1>
                <p className="text-lg">
								Tadoba’s conservation success is owed, in no small part, to the efforts of our frontline staff, who work 24x7 to protect wildlife. Our forest staff are engaged in field duties through all seasons, patrolling their respective ‘beats’ on foot in small groups.ive ‘beats’ on foot in small groups.
               </p>
              </div>
            </div>
          </div>
          <div
            onMouseLeave={() => setIsFlipped1((prev) => !prev)}
            className="CardBack flex flex-col gap-2 w-88 md:w-80 h-96 bg-[#e67817] text-white pt-8 px-6 text-center font-['Roboto_Slab']"
          >
          <h1 className="font-bold text-xl">VEHICLES FOR FRONTLINE STAFF</h1>
          <p className="text-lg">One way to ensure better safety conditions for our staff is to provide them with more patrolling vehicles. You can help fulfill our need for 17 more Mahindra Camper 4x4 vehicles.</p>
          <a href="https://www.onlinesbi.com/sbicollect/icollecthome.htm?corpID=3646560" className="px-6 py-3 uppercase border rounded-lg hover:bg-black hover:text-[#e67817] hover:border-black">MAke a donation</a>
          </div>
        </ReactCardFlip>
      </div>
      <div className="">
        <ReactCardFlip isFlipped={isFlipped2} flipDirection="vertical">
          <div
            onMouseEnter={() => setIsFlipped2((prev) => !prev)}
            className="CardFront w-88 md:w-80 h-96"
          >
            <div className="relative w-88 md:w-80">
              <img src="https://mytadoba.org/wp-content/uploads/2022/02/donation-post-fireprevention.jpg"
                   alt="cardFlip" className="absolute w-88 md:w-80 h-96"/>
              <div className="absolute w-88 md:w-80 h-96 inset-0 bg-[#e67817] bg-opacity-80"/>
              <div className="relative text-white pt-8 px-6 text-center font-['Roboto_Slab']">
                <h1 className="font-bold text-xl">FIRE CONTROL & PREVENTION</h1>
                <p className="text-lg">
                  The dry deciduous tropical forest ecosystem of Tadoba is particularly fire prone and forest fires are among the most serious threats to the tiger reserve.
                  Forest fires are a double whammy — not only do they destroy primary forests and wildlife habitats, the stored carbon that is released contributes to global warming.
                </p>
              </div>
            </div>
          </div>
          <div
            onMouseLeave={() => setIsFlipped2((prev) => !prev)}
            className="CardBack flex flex-col gap-2 w-88 md:w-80 h-96 bg-[#875b3e] text-white pt-8 px-6 text-center font-['Roboto_Slab']"
          >
          <h1 className="font-bold text-xl">FIRE CONTROL & PREVENTION</h1>
          <p className="text-lg">We need your support in constructing additional fire watchtowers, as well as procuring mini fire-tenders, additional fire extinguishing blowers and thermal drones.</p>
          <a href="https://www.onlinesbi.com/sbicollect/icollecthome.htm?corpID=3646560" className="px-6 py-3 uppercase border rounded-lg hover:bg-black hover:text-[#e67817] hover:border-black">MAke a donation</a>
          </div>
        </ReactCardFlip>
      </div>
      <div className="">
        <ReactCardFlip isFlipped={isFlipped3} flipDirection="vertical">
          <div
            onMouseEnter={() => setIsFlipped3((prev) => !prev)}
            className="CardFront w-88 md:w-80 h-96"
          >
            <div className="relative w-88 md:w-80">
              <img src="https://mytadoba.org/wp-content/uploads/2022/03/donation-post-wildlifecamps.jpg" alt="cardFlip" className="absolute w-88 md:w-80 h-96"/>
              <div className="absolute w-88 md:w-80 h-96 inset-0 bg-[#875b3e] bg-opacity-80"/>
              <div className="relative text-white pt-8 px-6 text-center font-['Roboto_Slab']">
                <h1 className="font-bold text-xl">IMPROVING WILDLIFE PROTECTION CAMPS</h1>
                <p className="text-lg">
                  The dry deciduous tropical forest ecosystem of Tadoba is particularly fire prone and forest fires are among the most serious threats to the tiger reserve.
                  Forest fires are a double whammy — not only do they destroy primary forests and wildlife habitats, the stored carbon that is released contributes to global warming.
                </p>
              </div>
            </div>
          </div>
          <div
            onMouseLeave={() => setIsFlipped3((prev) => !prev)}
            className="CardBack flex flex-col gap-2 w-88 md:w-80 h-96 bg-[#e67817] text-white pt-8 px-6 text-center font-['Roboto_Slab']"
          >
          <h1 className="font-bold text-xl">IMPROVING WILDLIFE PROTECTION CAMPS</h1>
          <p className="text-lg">Our target is to equip 50 protection camps with solar power. We also need to upgrade 23 camps in the TATR Core and procure essential equipment such as water purifiers and mosquito nets.</p>
          <a href="https://www.onlinesbi.com/sbicollect/icollecthome.htm?corpID=3646560" className="px-6 py-3 uppercase border rounded-lg hover:bg-black hover:text-[#e67817] hover:border-black">MAke a donation</a>
          </div>
        </ReactCardFlip>
      </div>
    </div>
    <div className="flex flex-col md:flex-row gap-4 mt-4">
      <div className="">
        <ReactCardFlip isFlipped={isFlipped4} flipDirection="vertical">
          <div
            onMouseEnter={() => setIsFlipped4((prev) => !prev)}
            className="CardFront w-88 md:w-80 h-96"
          >
            <div className="relative w-88 md:w-80">
              <img src="https://mytadoba.org/wp-content/uploads/2022/02/donation-post-conflict.jpg"
                   alt="cardFlip"
                   className="absolute w-88 md:w-80 h-96"/>
              <div className="absolute w-88 md:w-80 h-96 inset-0 bg-[#8ac5d7] bg-opacity-80"/>
              <div className="relative text-white pt-8 px-6 text-center font-['Roboto_Slab']">
                <h1 className="font-bold text-xl">MANAGING HUMAN WILDLIFE CONFLICT</h1>
                <p className="text-lg">
                  Human-Wildlife Conflict is one of the biggest challenges we face in the Tadoba landscape. There are 92 villages in the buffer area, where villagers live alongside tigers, leopards, bears, wild ungulates and other wildlife that can cause loss of life and livelihood.
                </p>
              </div>
            </div>
          </div>
          <div
            onMouseLeave={() => setIsFlipped4((prev) => !prev)}
            className="CardBack flex flex-col gap-2 w-88 md:w-80 h-96 bg-[#8ac5d7] text-white pt-8 px-6 text-center font-['Roboto_Slab']"
          >
          <h1 className="font-bold text-xl">MANAGING HUMAN WILDLIFE CONFLICT</h1>
          <p className="text-lg">
            Our conflict management strategy includes the creation of Primary Response Teams, drawn from among the villagers themselves. You can help us properly equip these teams.
          </p>
          <a href="https://www.onlinesbi.com/sbicollect/icollecthome.htm?corpID=3646560" className="px-6 py-3 uppercase border rounded-lg hover:bg-black hover:text-[#e67817] hover:border-black">MAke a donation</a>
          </div>
        </ReactCardFlip>
      </div>
      <div className="">
        <ReactCardFlip isFlipped={isFlipped5} flipDirection="vertical">
          <div
            onMouseEnter={() => setIsFlipped5((prev) => !prev)}
            className="CardFront w-88 md:w-80 h-96"
          >
            <div className="relative w-88 md:w-80">
              <img src="https://mytadoba.org/wp-content/uploads/2022/02/donation-post-nature-education.jpg"
                   alt="cardFlip" className="absolute w-88 md:w-80 h-96"/>
              <div className="absolute w-88 md:w-80 h-96 inset-0 bg-[#20754bb5] bg-opacity-80"/>
              <div className="relative text-white pt-8 px-6 text-center font-['Roboto_Slab']">
                <h1 className="font-bold text-xl">NATURE EDUCATION PROGRAMS</h1>
                <p className="text-lg">
                  We are involved in multi-pronged efforts to sensitise local communities, especially children, about the importance of conservation. We regularly conduct camps and workshops wherein local children can develop a curiosity and interest towards wildlife.
                </p>
              </div>
            </div>
          </div>
          <div
            onMouseLeave={() => setIsFlipped5((prev) => !prev)}
            className="CardBack flex flex-col gap-2 w-88 md:w-80 h-96 bg-[#e67817] text-white pt-8 px-6 text-center font-['Roboto_Slab']"
          >
          <h1 className="font-bold text-xl">NATURE EDUCATION PROGRAMS</h1>
          <p className="text-lg">
            You can help us nurture a new generation of informed, engaged wildlife defenders by supporting our nature camps and conservation workshops for local children.
          </p>
          <a href="https://www.onlinesbi.com/sbicollect/icollecthome.htm?corpID=3646560" className="px-6 py-3 uppercase border rounded-lg hover:bg-black hover:text-[#e67817] hover:border-black">MAke a donation</a>
          </div>
        </ReactCardFlip>
      </div>
      <div className="">
        <ReactCardFlip isFlipped={isFlipped6} flipDirection="vertical">
          <div
            onMouseEnter={() => setIsFlipped6((prev) => !prev)}
            className="CardFront w-88 md:w-80 h-96 bg-[#FFC857] px-6 pt-44"
          >
              <h1 className="font-bold text-xl text-center">OFFLINE DONATIONS</h1>
          </div>
          <div
            onMouseLeave={() => setIsFlipped6((prev) => !prev)}
            className="CardBack flex flex-col gap-2 w-88 md:w-80 h-96 bg-[#FFC857] pt-24 px-6 text-center font-['Roboto_Slab']"
          >
          <h1 className="font-bold text-xl">OFFLINE DONATIONS</h1>
          <p className="text-lg">
            Executive Director, Tadoba-Andhari Tiger Reserve Conservation Foundation, Chandrapur // State Bank of India Account No: 30714733456 // NEFT IFSC Code: SBIN0001941
          </p>
          </div>
        </ReactCardFlip>
      </div>
    </div>
    </>
  );
};

export default Projects;
