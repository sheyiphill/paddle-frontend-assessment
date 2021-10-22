import React from "react";

const HeroSection = () => {
    return (
        <section className="home-page">

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="big-heading">We Are Everything We <br /> Aspire To BE</h1>
                        <p className="small-heading"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, neque. Dolorum dolor, velit, tempore veritatis quos eius laborum, repudiandae saepe obcaecati recusandae provident.  </p>
                        <button type="button" className="btnbtn-lg getstartedbtn"> Get Started</button>
                    </div>

                    <div className="col-md-6">
                        <img className="title-image img-fluid" src="/images/web-developer.png" alt="web developer"/>
                    </div>
                </div>

                <div className="counter d-flex">
                <img className="img-fluid feature-img" src="/images/Group.png" alt="" />
                <div className="user">
                    <h1>90+</h1>
                    <p>USers</p>
                </div>
                <img className="img-fluid feature-img" src="/images/Group.png" alt="" />
                <div className="user">
                    <h1>90+</h1>
                    <p>USers</p>
                </div>
                <img className="img-fluid feature-img" src="/images/Group.png" alt="" />
                <div className="user">
                    <h1>90+</h1>
                    <p>USers</p>
                </div>





                </div>

            </div>
        </section>
    );
};

export default HeroSection;