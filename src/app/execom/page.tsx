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
                <Execomcard soceity="IEEE CS SB GECI" position="Chapter Advisor" name="Dr Visakh R" src="Vishak sir.jpg" /> 
                    <Execomcard soceity="IEEE CS SB GECI" position="Chairperson" name="Vaishnav Vijayan" src="Vaishnavvijayan.jpg" phone="+917902561866" mail="Vaishnavvijayan@ieee.org"linkedin="https://www.linkedin.com/in/vaishnav2002"/>
                    <Execomcard soceity="IEEE CS SB GECI" position="Vice Chairperson" name="Vishnu V" src="Vishnu V.jpg"  phone="+917594994893" mail="vishnuvenugopal844@ieee.org" linkedin="https://www.linkedin.com/in/vishnu-v-b65028231/"/>
                    <Execomcard soceity="IEEE CS SB GECI" position="Secretary" name="Gokul H V" src="Gokul H V.jpg"  phone= "+916235876053"  mail="jithushivabro8086@gmail.com" linkedin="https://www.linkedin.com/in/shivadath-a-b232a5231"/>
                    <Execomcard soceity="IEEE CS SB GECI" position="Joint Secretary" name="DEVIKA V R" src="Devika V R.jpg"    phone="+919496967500" mail="devikavrajesh24@gmail.com"/>
                    <Execomcard soceity="IEEE CS SB GECI" position="Technical Coordinator" name="Abhiram N S" src="AbhiramS.jpg" />
                    <Execomcard soceity="IEEE CS SB GECI" position="Women In Computing" name="Anakha Anilkumar" src="Anakha Anilkumar .jpg"   phone="+918304844075" mail="anakhaanilkumar@ieee.org"/>
                </div>
                <div className="w-10/12 flex flex-wrap mx-auto justify-center gap-4 mb-32">
                    <h1 className="w-full text-xl font-bold text-center mb-32 ml-3">Student Branch</h1>
                    <Execomcard soceity="IEEE SB GECI" phone="+919895327107" position="Branch Counselor" name="Dr Sunil K S" src="sunilSir.jpg" />
                    <Execomcard soceity="IEEE SB GECI" phone="+916235180710" mail="adithyanprasad149@ieee.org" linkedin="https://www.linkedin.com/in/adithyanprasad" position="Chairperson" name="Adithyan P" src="AdithyanP.jpg" />
                    <Execomcard soceity="IEEE SB GECI" phone="+917909180309" mail="sonabalasubramanian@ieee.org" linkedin="https://www.linkedin.com/in/sona-m-b-b08b9a219" position="Secretary" name="Sona M B" src="SonaMB.jpg"  />
                    <Execomcard soceity="IEEE SB GECI" phone="+916235876053" mail="jithushivabro8086@gmail.com" linkedin="https://www.linkedin.com/in/shivadath-a-b232a5231" position="Vice Chairperson" name="Shivadath A" src="ShivadhathA.jpg"  />
                    <Execomcard soceity="IEEE SB GECI" position="Joint Secretary" name="Adarsh K" src="AdarshK.jpg"  phone="+917907599962" mail="adarshx@ieee.org" />
                    <Execomcard soceity="IEEE SB GECI" position="Technical Coordinator" name="Arvin Joestus"  src="ArvinJ.jpg" phone="+918589939616" />
                    <Execomcard soceity="IEEE SB GECI" position="Asst. Technical Coordinator" name="Harikrishnan V K" src="HarikrishnanVK.jpg" phone="+916238478024" />
                    <Execomcard soceity="IEEE SB GECI" position="Treasurer" name="Hemanth A K" src="Hemanth.jpg" phone="+919072287367" mail="hemanthbovikkanam@ieee.org" linkedin="https://www.linkedin.com/in/hemanth-a-k" />
                    <Execomcard soceity="IEEE SB GECI" position="LINK Representative" name="Niranjana K" src="NiranjanaK_.jpg" phone="+918943086378"  mail="niranjana.rajesh@ieee.org "/>
                    <Execomcard soceity="IEEE SB GECI" position="Membership Development Coordinator" name="Salvi Hanna John" src="SalviHannaJohn.jpg" phone="+917736603302" mail="salvihannajohn@gmail.com" linkedin="https://www.linkedin.com/in/salvi-hanna-john-07b420265" />
                    <Execomcard soceity="IEEE SB GECI" position="ECC" name="Ibnu Suresh P" src="IBNUSURESH.jpg" phone="+918714412338" mail="ibnusuresh@gmail.com" linkedin="https://www.linkedin.com/in/ibnu-suresh-974a50269" />
                    <Execomcard soceity="IEEE SB GECI" position="Report Lead" name="Nandana B" src="NandanaB.jpg"  />
                    <Execomcard soceity="IEEE SB GECI" position="Design Lead" name="Midhun Nirmal" src="Midhun.jpg"  />
                    <Execomcard soceity="IEEE SB GECI" position="Web Master" name="Salwan K" src="salwanKajas.jpg" phone="+919061533198" mail="salwankajas@gmail.com"/>
                      
                </div>
                <div className="w-10/12 flex flex-wrap mx-auto justify-center gap-4 mb-32">
                    <h1 className="w-full text-xl font-bold text-center mb-32 ml-3">RAS SOCIETY</h1>
                    <Execomcard soceity="IEEE RAS SB GECI" position="Chapter Advisor" name="Prof. Asish Shaji Varghese" src="Prof. Asish Shaji Varghese.jpg"/> 
                    <Execomcard soceity="IEEE RAS SB GECI" position="Chairperson" name="Diljith P A" src="Diljith.JPG" phone="+918921341515" mail="diljithaji@ieee.org"linkedin=""/>
                    <Execomcard soceity="IEEE RAS SB GECI" position="Secretary" name="Abay Krishna" src="ABHAY KRISHNA J S.jpg"  />
                    <Execomcard soceity="IEEE RAS SB GECI" position="Vice Chairperson" name="Bilal Ahamed P T" src="Bilal Ahamed PT.jpg"  phone= "+917306448145"  mail="bilalvpm2@gmail.com " linkedin="https://www.linkedin.com/in/bilal-ahamed-pt-4b5575237"/>
                    <Execomcard soceity="IEEE RAS SB GECI" position="Joint Secretary" name="Alan Cherian" src="Alan Cherian.jpg"    phone="+917306885472" mail="alancherian2002@gmail.com"/>
                    <Execomcard soceity="IEEE RAS SB GECI" position="Technical Coordinator" name="Sanjay B K" src="Sanjay.JPG" phone= "+918891115593" mail="sanjaybk.2023@ieee.org"/>
                    <Execomcard soceity="IEEE RAS SB GECI" position="Women In Robotings" name="Amalitta Jeriya P P" src="Amalitta.JPG" />
                    
                </div>
                <div className="w-10/12 flex flex-wrap mx-auto justify-center gap-4 mb-32">
                    <h1 className="w-full text-xl font-bold text-center mb-32 ml-3">PES SOCIETY</h1>
                    <Execomcard soceity="IEEE PES SB GECI" position="Chapter Advisor" name="Dr. Joseph K.D" src="JosephSir.jpg" /> 
                    <Execomcard soceity="IEEE PES SB GECI" position="Chairperson" name="Anil Thomas" src="AnilThomas.jpg" phone="+917559023944" mail="Anilthomas0601@gmail.com"linkedin="https://www.linkedin.com/in/anil-thomas-0b3920200"/>
                    <Execomcard soceity="IEEE PES SB GECI" position="Secretary" name="Aswin Anilkumar" src="AswinAnilKumar.jpg" />
                    <Execomcard soceity="IEEE PES SB GECI" position="Vice Chairperson" name="Joyel Jofy" src="joyelJofy.jpg" />
                    <Execomcard soceity="IEEE PES SB GECI" position="Technical Coordinator" name="Basil Varghese" src="Basil.jpg" />
                    <Execomcard soceity="IEEE PES SB GECI" position="Women In Power" name="Arsha A Babu" src="ArshaABabu.jpg"   phone="+918304844075" />
                    
                </div>
                <div className="w-10/12 flex flex-wrap mx-auto justify-center gap-4 mb-32">
                    <h1 className="w-full text-xl font-bold text-center mb-32 ml-3">WIE SOCIETY</h1>
                    <Execomcard soceity="IEEE WIE SB GECI" position="Chapter Advisor" name="Dr Deepthi Sasidharan" src="DeepthiMiss.jpg" phone="" mail="" linkedin=""/> 
                    <Execomcard soceity="IEEE WIE SB GECI" position="Chairperson" name="Swathey Stanley" src="SwathyStanley.jpg" phone="+919188683691" />
                    <Execomcard soceity="IEEE WIE SB GECI" position="Vice-Chair" name="Aashna S J" src="AashnaSJ.jpg"  phone="+919778180885" mail="aashnakukku7@gmail.com " linkedin="https://www.linkedin.com/in/aashna-kukku-6ba052263"/>
                    <Execomcard soceity="IEEE WIE SB GECI" position="Secretary" name="Savitha G S" src="SavithaGS.jpg"  phone="+919746869932" mail="savithacn.cltr@gmail.com" linkedin="https://www.linkedin.com/in/savitha-gs-4a1b0a230"/>
                </div>
                <div className="w-10/12 flex flex-wrap mx-auto justify-center gap-4 mb-32">
                    <h1 className="w-full text-xl font-bold text-center mb-32 ml-3">MD TEAM</h1>
                    <Execomcard soceity="MD TEAM" position="Lead" name=" Salvi Hanna John" src="SalviHannaJohn.jpg" phone="+917736603302" mail="salvihannajohn@gmail.com" linkedin="https://www.linkedin.com/in/salvi-hanna-john-07b420265"/> 
                    <Execomcard soceity="MD TEAM" position="Coordinator" name="Ananjana A" src="ANANJANA K.jpg" />
                    <Execomcard soceity="MD TEAM" position="Coordinator" name="Harikrishnan C J " src="Harikrishnan CJ.JPG"  />
                </div>
                <div className="w-10/12 flex flex-wrap mx-auto justify-center gap-4 mb-32">
                    <h1 className="w-full text-xl font-bold text-center mb-32 ml-3">DESIGN TEAM</h1>
                    <Execomcard soceity="Design Team" position="Design Lead" name="Midhun Nirmal" src="Midhun.jpg" /> 
                    <Execomcard soceity="Design Team" position="Designer" name="Nandhana P" src="Nandhana P (1).jpg " />
                    <Execomcard soceity="Design Team" position="Designer" name="Anex Antony" src="Anex.JPG" />
                    <Execomcard soceity="Design Team" position="Designer" name="Alan Biju" src="Alan_Biju.JPG"  />
                    <Execomcard soceity="Design Team" position="Video Editor" name="Devadarsh Babu" src="DEVADARSH BABU.jpg"  phone="+919778374266" mail="devadev2125@gmail.com" />

                </div>
                <div className="w-10/12 flex flex-wrap mx-auto justify-center gap-4 mb-32">
                    <h1 className="w-full text-xl font-bold text-center mb-32 ml-3">CONTENT TEAM</h1>
                    <Execomcard soceity="Content & Documentation" position="Report Lead" name="Nandana B" src="NandanaB.jpg"/> 
                    <Execomcard soceity="Content & Documentation" position="Content Writer" name="Keerthi" src="Keerti.jpg" />

                </div>
            </div> 
        </div>
    )
}
