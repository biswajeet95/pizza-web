import React from 'react'

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6 p-25">
                             <h3>About Us</h3>
                <h1>WELLCOME TO MASTERO PIZZINI</h1>
                <p>
                     InvestIgations demonstraverunt legere me lius quad ii legunt 
                    saepius. Claritas eat etiam procassus dynaus, quise sequitur
                     mutationem consuetudium lectorum.
                </p> 
                <div className="about__btn">
                    <a href="" className="btn btn-smart">
                        READ MORE
                        </a>

                </div>
                    </div>
                    <div className="col-6">
                        <div className="about__img">
                            <img src="https://img.lovepik.com/photo/50077/4812.jpg_wh860.jpg" alt="pizza"/>

                        </div>
                    </div>
                </div>
           
               
            </div>

        </div>
    );
};

export default About