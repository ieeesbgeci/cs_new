import Joincard from "@/components/card/joincard"
import Headings from "@/components/text/heading"
export default function Join(){
    return(
    <>
        <div id="Join" className="pt-32">
        <Headings textFirst="JOIN" textsecond="Computer Society" xFirst={68.38}contWidth="w-[140px]"/>
        <p className="w-[min(80vw,647px)] mt-6 mb-32 text-center text-ms font-extralight text-[#666] mx-auto">Take Membership Now</p>
        <Joincard/>
        </div>
    </>
    )
}