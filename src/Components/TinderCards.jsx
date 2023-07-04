import React, {useState, useEffect} from 'react'
import TinderCard from "react-tinder-card";
import "./css/TinderCards.css"
import axios from 'axios';

function TinderCards() {
    const [people, setpeople] = useState([]);
    useEffect(() => {
      async function fetchData() {
        try {
          const req = await axios.get("https://tinder-backend-vjut.onrender.com/tinder/cards");
          setpeople(req.data);
        } catch (error) {
          console.log(error);
        }
      }

      fetchData();
    }, [])
    
    const swiped = (direction, nameToDelete) => {
        console.log("removing..." + nameToDelete);
        setLastDirection(direction)
    }
    const outOffFrame = (name) => {
        console.log(name + "left the screen");
    }
  return (
    <>
    <div className='TinderCards'>
        <div className="TinderCards__cardContainer flex sm:mx-[10%] lg:px-[20%] mt-[7vh]">
      {people.map((person) => ( 
          <TinderCard
          className="swipe absolute"
          key={person.name}
          preventSwipe={["up", "down"]}
          onSwipe={(dir) => swiped(dir, person.name)}
          onCardLeftScreen={() => outOffFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card absolute bg-white w-[600px] p-[20px] max-w-[85vw] h-[50vh] rounded-2xl bg-cover bg-center"
              >
              <h1 className='absolute bottom-0 m-[10px] text-[#fff]'>{person.name}</h1>
            </div>
          </TinderCard>
        ))}
        </div>
      </div>
    </>
  )
}

export default TinderCards