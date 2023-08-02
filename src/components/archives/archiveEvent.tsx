export default function ArchivesEvent(props: { day: string, month: string, discription: string, heading: string }) {
    return (
        <>
            <div className="py-9 flex items-center min-[876px]:archive flex-col min-[876px]:flex-row">
                <div className="font-sans text-sm min-w-[360px] py-[10px] min-[876px]:p-6 m-[10px] min-[876px]:m-[30px] flex justify-start min-[876px]:justify-end archive-date">
                    <span className="mx-2 text-[#0096EB]">{props.day}</span><span className="text-[#666]">{props.month}</span>
                </div>
                <div className="archive-pin"><div className="bg-[#86D1FF] rounded-full w-5 h-5 border-2 border-white"></div></div>
                <div className="max-w-[380px] min-[876px]:min-w-[360px] py-[10px] p-6 min-[876px]:p-6 bg-[#F0F9F7] rounded m-[10px] min-[876px]:m-[30px] archive-box">
                    <div className="text-start font-medium text-ms mb-2">{props.heading}</div>
                    <div className="text-[#666] font-light text-xs">{props.discription}</div>
                </div>
            </div>
        </>
    )
}