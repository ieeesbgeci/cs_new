import Headings from "@/components/text/heading"
import Explore from "@/components/button/explore"
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import Execomcard from "@/components/card/execomcard"
export default function Page() {
    return (
        <div>
            <div className="pt-32">
                <Headings firstPart="EXE" secondPart="COM" xFirst={55.45} contWidth="w-[123px]" />
                <p className="w-[min(80vw,647px)] mt-6 mb-32 text-center text-ms font-extralight text-[#666] mx-auto">Execom Team for the year <span className="font-sans text-base">2023-2024</span></p>
                <div className="w-10/12 flex flex-wrap mx-auto justify-center gap-4 mb-32">
                    <h1 className="w-full text-xl font-bold text-center mb-32 ml-3">COMPUTER SOCIETY</h1>
                    <Execomcard soceity="IEEE CS SB GECI" position="Chapter Advisor" name="Dr Visakh R" src="Vishak sir.jpg" /> 
                    <Execomcard soceity="IEEE CS SB GECI" position="Chairperson" name="Vaishnav Vijayan" src="Vaishnavvijayan.jpg" phone="+917902561866" mail="Vaishnavvijayan@ieee.org"linkedin="https://www.linkedin.com/in/vaishnav2002"/>
                    <Execomcard soceity="IEEE CS SB GECI" position="Vice Chairperson" name="Vishnu V" src="Vishnu V.jpg"  phone="+917594994893" mail="vishnuvenugopal844@ieee.org" linkedin="https://www.linkedin.com/in/vishnu-v-b65028231/"/>
                    <Execomcard soceity="IEEE CS SB GECI" position="Secretary" name="Gokul H V" src="Gokul H V.jpg"  phone= "+916235876053"  mail="jithushivabro8086@gmail.com" linkedin="https://www.linkedin.com/in/shivadath-a-b232a5231"/>
                    <Execomcard soceity="IEEE CS SB GECI" position="Joint Secretary" name="DEVIKA V R" src="Devika V R.jpg"    phone="+919496967500" mail="devikavrajesh24@gmail.com"/>
                    <Execomcard soceity="IEEE CS SB GECI" position="Technical Coordinator" name="Abhiram N S" src="AbhiramS.jpg" />
                    <Execomcard soceity="IEEE CS SB GECI" position="Women In Computing" name="Anakha Anilkumar" src="Anakha Anilkumar .jpg"   phone="+918304844075" mail="anakhaanilkumar@ieee.org"/>
                    
                </div>
               
            </div> 
        </div>
    )
}
