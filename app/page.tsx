import Image from "next/image";
import ExploreBtn from "./components/ExploreBtn";
import EventCard from "./components/EventCard";

import { events } from "@/lib/constant";
import posthog from "posthog-js";




export default function Home() {

  //Manual events for posthog 

  posthog.capture('test_event')



  return (

    <section>

      <h1 className="text-center">The Hub for Every Dev <br /> Event Can't Miss  </h1>
      <p className="text-center mt-5">Hackathons , Meetups , and Conferences All in One </p>
      <ExploreBtn />

      <div className="mt-20 space-y-7 ">


        <h3>Featured Events</h3>

        {/* ////////////////////////////////

              EventCard Goes here 

        //////////////////////////////// */}


        <ul className="events  ">
          {events.map((event) => (

            <li key={event.title}>

              <EventCard {...event} />

            </li>
          ))}


        </ul>







      </div>






    </section>




  );
}

