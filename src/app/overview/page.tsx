import Headings from "@/components/text/heading"
export default function Page() {
    return (
        <>
            <div className="pt-32">
                <Headings firstPart="OVER" secondPart="VIEW" xFirst={80.12} contWidth="w-[159px]" />
                <p className="w-[min(80vw,647px)] mt-6 mb-32 text-center text-ms font-extralight text-[#666] mx-auto">Come join us in these exciting events!</p>
                <div className="flex justify-center gap-4 mb-32 flex-wrap">
                    <div className="shadow-inner min-w-[360px] max-w-[360px] bg-[#f0f9f7c4] rounded-lg p-9 border-4 border-white">
                        <h1 className="text-xl font-semibold mb-6 border-b-2 py-2 border-white">OUR VISION</h1>
                        <p className="font-light text-sm text-[#666]">IEEE will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions.</p>
                    </div>
                    <div className="shadow-inner drop-shadow-xl min-w-[360px] max-w-[360px] bg-[#f0f9f7c4] rounded-lg p-9 border-4 border-white">
                        <h1 className="text-xl font-semibold mb-6 border-b-2 py-2 border-white">OUR MISION</h1>
                        <p className="font-light text-sm text-[#666]">IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity.</p>
                    </div>
                    <div className="shadow-inner drop-shadow-xl min-w-[360px] max-w-[360px] bg-[#f0f9f7c4] rounded-lg p-9 border-4 border-white">
                        <h1 className="text-xl font-semibold mb-6 border-b-2 py-2 border-white">OBJECTIVES</h1>
                        <p className="font-light text-sm text-[#666]">- To disseminate the knowledge of technology and its trends among students through events and help them keep up with the latest advancements.<br/><br/>- To increase networking and communication skills through the interaction between student branches colleges around the world.<br /><br/>- To provide every member, an opportunity to organize and/or participate in an event.<br />- Furtherance of the professional development of its members.</p>
                    </div>
                </div>
            </div>
        </>
    )
}