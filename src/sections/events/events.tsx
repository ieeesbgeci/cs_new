import Headings from "@/components/text/heading"
import Eventcard from "@/components/card/eventcard"
export default function Events(){
    return(
        <>  
            <div id="Events" className="pt-32">
            <Headings textFirst="UPCOMING" textsecond="EVENTS" xFirst={163.34} xThird={14.59} contWidth="w-[288px]"/>
            <p className="w-[min(80vw,647px)] mt-6 text-center text-ms font-extralight text-[#666] mx-auto">Come join us in these exciting events!</p>
            <Eventcard id="CIR-Q" heading="online circuit designing competition" time="Submit before 14-05-2023" text="IEEE SB RAS  GECI is here with ' CIR-Q ',an online circuit designing competition.Bring out the inner circuit designer in you and munch on this opportunity to bag prizes worth ₹1000.Online registration will start today( 12-05-2023)" month="MAY" day="14" poster="Cia.jpeg" url="https://bit.ly/3LWsnwb"/>
            </div>
        </>
    )
}