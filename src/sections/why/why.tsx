import Headings from "@/components/text/heading"
import Whymap from "@/components/roadmap/whymap"
export default function Why(){
    return(
        <>
        <div id="whyieee" className="pt-32">
            <Headings textFirst="WHY" textsecond="IEEE CS" textThird="?" xFirst={73.74} xSecond={110} xThird={120} contWidth="w-[230px]"/>
            <p className="w-[min(80vw,647px)] mt-6 mb-32 text-center text-ms font-extralight text-[#666] mx-auto">A few of the many advantages of joining IEEE Computer Society</p>
            <Whymap />
        </div>
        </>
    )
}
