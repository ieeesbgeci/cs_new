import Headings from "@/components/text/heading"
import Explore from "@/components/button/explore"
import ArchiveYear from "@/components/button/archiveYear"
import {MdKeyboardDoubleArrowUp} from 'react-icons/md'
import ArchivesEvent from "@/components/archives/archiveEvent"
export default function Archives(){
    return(
        <>
            <div id="Archives" className="pt-32">
            <Headings firstPart="ARCH" secondPart="IVES" xFirst={82.92} contWidth="w-[148px]" />
            <p className="w-[min(80vw,647px)] mt-6 mb-32 text-center text-ms font-extralight text-[#666] mx-auto">A glimpse into the dynamic events organized!</p>
            <div className="mb-32">
                <div className="mx-auto w-max"><ArchiveYear name="2023" className="font-sans"/></div>
                <div className="w-[2px] mx-auto shadow-[0px_0px_3px_0px_#ff0081a8] bg-repeat-y flex flex-wrap flex-row justify-center" style={{backgroundImage:`url('/assets/gradient/archive.jpg')`}}>
                    <ArchivesEvent day={"22"} month="April" heading="PREP IT UP-Placement Guidance Session" discription="IEEE Computer Society SBC Government Engineering College Idukki had conducted a placement Guidance Session ‘PREP IT UP’ in collaboration with Placement cell ,GEC Idukki.The session was handled b Arun Chandran ,founder and CEO of TRYCLE and Sujitha Rajagopalan,Co-founder and COO of TRYCLE. THe session focused to educate students about what interviewers are looking for in a candidate and how to make the profile concisely to stand out from the rest of the candidates"/>
                    <ArchivesEvent day={"09"} month="April" heading={`Lets xtreme #3`} discription={`IEEE Computer Society SBC Government Engineering College Idukki had conducted LET’S XTREME#2 , a series of coding competitions focused on assisting students to crack ‘IEEE XTREME 15.0’`}/>
                    <ArchivesEvent day={"25"} month="March" heading="FARADIZE" discription="The event is conducted as a part of faraday day celebrations. The agenda or aim of the event was to create an awareness about great scientist Michael Faraday and his contributions to science.A 5 minute video about Michael Faraday is given to participants, then a crossword puzzle based on the given video was provided to the participants.Competitors were required to fill up the crossword puzzle and upload the screenshot in Google form. The total event time was 30min in which only one response from each participant was considered.The participant who took less time and solved the puzzle accurately was declared as winners"/>
                    <ArchivesEvent day={"22"} month="February" heading="SHE-CODE" discription="The WOMEN IN ENGINEERING affinity group of IEEE SB GECI conducted “SHE-CODE” a coding competition exclusively for girls. This was a24 hour long coding competition. The participants were given 8 challenges in HackerRank ranging from easy to hard. The participant who was able to complete all 8 in the least amount of time was declared the winner of the competition. This was a rather interesting competition according to the participants"/>
                </div>
            </div>
            <div className="mx-auto w-max"><Explore name="Explore" icon={MdKeyboardDoubleArrowUp} url="/archives" /></div>
            </div>
        </>
    )
}