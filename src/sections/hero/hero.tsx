import Explore from "@/components/button/explore"
import { MdOutlineRocketLaunch } from 'react-icons/md'
import Society from "@/components/society/society"
export default function Hero() {
    return (
        <>
            <div className="pt-20 md:pt-32">
                <div className="flex justify-center items-center">
                    <div className="w-max sm:mt-[7rem] min-[460px] sm:mt-44">
                        <div className="m-3 h-[80vh] sm:h-auto flex flex-col items-center justify-center">
                            <div className="w-max mx-auto">
                                <svg viewBox="0 0 201 71" className="text-8xl font-bold h-[38px] sm:h-[60px] inline-block mx-1">
                                    <text y="70" className="fill-none stroke-[#27B7F4] stroke-[3] stroke-linejoin-miter paint-order-stroke">IEEE</text>
                                </svg>
                                <svg viewBox="0 0 367 76" className="text-8xl font-bold h-[38px] sm:h-[60px] inline-block mx-1">
                                    <text y="72" className="stroke-[#000000] stroke-[4] stroke-linejoin-miter paint-order-stroke fill-[#000000]">CS GECI</text>
                                </svg>
                            </div>
                            <p className="w-[min(80vw,647px)] my-10 text-center text-ms font-extralight text-[#666] mx-auto">IEEE CS SBC GECI was inaugurated on 12 June 2021 by Mr Srinivasan Ravindran, Chairman IEEE CS Kerala Chapter in the presence of dignitaries from Kerala CS Kerala Chapter. We aims to enhance networking, provide a plethora of volunteering opportunities to students, introduce existing technical-professional initiatives and empower the people who advance technology by delivering tools for individuals at all stages of their professional careers. </p>
                            <div className="mx-auto w-max"><Explore name="Explore" icon={MdOutlineRocketLaunch} url="/overview" /></div>
                        </div>
                        <Society />
                    </div>
                </div>
            </div>
        </>
    )
}
