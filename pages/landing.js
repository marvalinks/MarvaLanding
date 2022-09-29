import Button from "../components/mainButton";
import Image from 'next/image';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineCloud } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { FaIndustry } from 'react-icons/fa';

const Landing = ()=>{
    return(
       <>
            <header class = "header-container">
                <div class = "header-wrapper">
                    <nav class = "header-nav">
                        <p>Services</p>
                        <p>About Us</p>
                        <p>Contact Us</p>
                        
                    </nav>

                    <div className="header-text-content">
                        <p className="header-text-one">We build software solutions... websites, mobile applications and more...</p>
                        <p className="header-text-two">Email:  info@marvalinks.com  sales@marvalinks.com dev@marvalinks.com</p>
                        <p className="header-text-two">Contact Us +233594981242 / +233248160008</p>
                        <button className="header-btn">MAKE A REQUEST</button>
                    </div>
                </div>

            </header>

            <main>
                <section className="section-one-container">
                    <p className="section-head section-head-c">Why Choose Us?</p>
                    
                    <div className="section-one-cards-container">
                        <div className="section-one-card">
                            <p className="section-one-card-head">Extremely fast build time</p>
                            <p className="section-one-card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        </div>

                        <div className="section-one-card">
                            <p className="section-one-card-head">Extremely fast build time</p>
                            <p className="section-one-card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        </div>

                        <div className="section-one-card">
                            <p className="section-one-card-head">Extremely fast build time</p>
                            <p className="section-one-card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        </div>

                        <div className="section-one-card">
                            <p className="section-one-card-head">Extremely fast build time</p>
                            <p className="section-one-card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        </div>
                    </div>
                </section>




                <section className="section-two-container">
                    <div className="section-head-right">
                        <p className="section-head-c">Our Services?</p>
                    </div>
                    
                    <div className="section-two-content">
                        <div className="section-two-card section-two-card-img-one">
                            <div class = 'section-two-card-wrapper'>
                                <p className="section-two-card-head">
                                    Web, Mobile and Costum Sfotware Development
                                </p>
                                <p className="section-two-card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                </p>
                            </div>
                        </div>

                        <div className="section-two-card section-two-card-img-two">
                            <div class = 'section-two-card-wrapper'>
                                <p className="section-two-card-head">
                                  Cloud and Optimization
                                </p>
                                <p className="section-two-card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                </p>
                            </div>
                        </div>

                        <div className="section-two-card section-two-card-img-three">
                            <div class = 'section-two-card-wrapper'>
                                <p className="section-two-card-head">
                                  Advertisement and Marketing
                                </p>
                                <p className="section-two-card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                </p>
                            </div>
                        </div>

                        <div className="section-two-card section-two-card-img-four">
                            <div class = 'section-two-card-wrapper'>
                                <p className="section-two-card-head">
                                    Costum Software development
                                </p>
                                <p className="section-two-card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section-three-container">
                    <p className="section-three-head">We are a Software engineering compay.</p>
                    <p className="section-three-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    <Button />
                </section>



                <section className="section-four-container">
                    <p className="section-four-head">We have built 300+ software solutions for  industries, startups, small scale businesses amongst others</p>
                    <p className="section-four-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    
                    <div className="section-four-sec-container">
                        <div className="section-four-sec-content">
                            <p className="section-four-sec-head">
                                300+
                            </p>
                            <p className="section-four-sec-body">Satisfied Clients</p>
                        </div>    

                        <div className="section-four-sec-content">
                            <p className="section-four-sec-head">
                                300+
                            </p>
                            <p className="section-four-sec-body">Satisfied Clients</p>
                        </div>    

                        <div className="section-four-sec-content">
                            <p className="section-four-sec-head">
                                300+
                            </p>
                            <p className="section-four-sec-body">Satisfied Clients</p>
                        </div>    

                        <div className="section-four-sec-content">
                            <p className="section-four-sec-head">
                                300+
                            </p>
                            <p className="section-four-sec-body">Satisfied Clients</p>
                        </div>    
                    </div>
                    <Button />
                </section>

                <section className="section-five-container">
                    <p className="section-head-c">Who we have worked for?</p>

                    <div className="section-five-grid">
                        <div className= "section-five-card">
                            <Image className="section-five-img" src = "/gas.jpg" width={100} height = {100}/>
                        </div>

                        <div className= "section-five-card">
                            <Image className="section-five-img" src = "/aviance.jpg" width={100} height = {100}/>
                        </div>

                        <div className= "section-five-card">
                            <Image className="section-five-img" src = "/plains.jpeg" width={100} height = {100}/>
                        </div>

                        <div className= "section-five-card">
                            <Image className="section-five-img" src = "/gas.jpg" width={100} height = {100}/>
                        </div>

                        <div className= "section-five-card">
                            <Image className="section-five-img" src = "/gas.jpg" width={100} height = {100}/>
                        </div>

                    </div>
                </section>


                <section className="section-three-container">
                    <p className="section-three-head">We have developers with a lot of expeirence in 40+ programming languages and frameworks</p>
                    <p className="section-three-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    <Button />
                </section>

                <section className="section-five-container">
                    <p className="section-head-c">Website and Mobile application develpment</p>
                    <p className="section-body-text section-body-c">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    

                    <div className="section-five-grid">
                        <div className= "section-five-card">
                            <Image className="section-five-img" src = "/js.png" width={100} height = {100}/>
                        </div>

                        <div className= "section-five-card">
                            <Image className="section-five-img" src = "/react.png" width={100} height = {100}/>
                        </div>

                        <div className= "section-five-card">
                            <Image className="section-five-img" src = "/angular.png" width={100} height = {100}/>
                        </div>

                        <div className= "section-five-card">
                            <Image className="section-five-img" src = "/node.png" width={100} height = {100}/>
                        </div>

                        <div className= "section-five-card">
                            <Image className="section-five-img" src = "/lavarel.png" width={100} height = {100}/>
                        </div>

                        <div className= "section-five-card">
                            <Image className="section-five-img" src = "/asp.png" width={100} height = {100}/>
                        </div>
                      

                        <div className= "section-five-card">
                            <Image className="section-five-img" src = "/rn.png" width={100} height = {100}/>
                        </div>

                        <div className= "section-five-card">
                            <Image className="section-five-img" src = "/flutter.png" width={100} height = {100}/>
                        </div>
                    </div>





                  
                </section>

                <section className="last-section-container">
                    <p className="section-head-c">Cloud Services and Advertisement</p>
                    <div className="last-section-grid">

                        <div className="last-section-card">

                            <div className = "last-section-top">
                                <p className = "last-head-top">SEARCH ENGINE  OPTIMIZATION</p>
                                <p><BsSearch /></p>
                            </div>
                            <div>
                                <p className = "last-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                            </div>
                        </div>

                        <div className="last-section-card">

                            <div className = "last-section-top">
                                <p className = "last-head-top">ERP PRODUCT DEVELOPMENT</p>
                                <p><FaIndustry /></p>
                            </div>
                            <div>
                                <p className = "last-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                            </div>
                        </div>

                        <div className="last-section-card">

                            <div className = "last-section-top">
                                <p className = "last-head-top">SOCIAL MEDIA ADVERTISING</p>
                                <p><BsPeople /></p>
                            </div>
                            <div>
                                <p className = "last-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                            </div>
                        </div>

                        <div className="last-section-card">

                            <div className = "last-section-top">
                                <p className = "last-head-top">CLOUD SERVICES</p>
                                <p><AiOutlineCloud /></p>
                            </div>
                            <div>
                                <p className = "last-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                            </div>
                        </div>


                    </div>
                </section>





            </main>
           
       
       </>
    )
}


export default Landing;