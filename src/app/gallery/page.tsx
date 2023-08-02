import Headings from "@/components/text/heading"
import Gallerycardcontmain from "@/components/card/gallerycardcont"
import {MdKeyboardDoubleArrowDown} from 'react-icons/md'
import Explore from "@/components/button/explore"
export default function Page(){
    return(
        <>
            <div className="mb-24 pt-32" >
                <Headings firstPart="GALL" secondPart="ERY" xFirst={76.95} contWidth="w-[134px]" />
                <p className="w-[min(80vw,647px)] mt-6 mb-32 text-center text-ms font-extralight text-[#666] mx-auto">Come join us in these exciting events!</p>
                <Gallerycardcontmain/>
                <div className="mx-auto w-max mb-32"><Explore name="See More" icon={MdKeyboardDoubleArrowDown} url="/gallery" /></div>
            </div>
        </>
    )
}