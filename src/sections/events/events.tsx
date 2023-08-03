import Headings from "@/components/text/heading"
import Eventcard from "@/components/card/eventcard"
export default function Events(){
    return(
        <>  
            <div id="Events" className="pt-32">
            <Headings textFirst="UPCOMING" textsecond="EVENTS" xFirst={163.34} xThird={14.59} contWidth="w-[288px]"/>
            <p className="w-[min(80vw,647px)] mt-6 text-center text-ms font-extralight text-[#666] mx-auto">Come join us in these exciting events!</p>
            <Eventcard id="python" heading="Introduction to Python" time="07:00 pm" text="Hey folks✨, IEEE CS SBC GECI as a part of Hour Of Code 2.0 is organizing a talk session on Introduction To Python 🐍 🌟 Ignite Your Coding Passion! 🐍 Join Our Python Class Session. Unleash Python's Magic. Classes, Objects, Expert Instructors. Register Now❗" month="MAY" day="23" poster="python.jpg" url="https://bit.ly/3LWsnwb"/>
            </div>
        </>
    )
}