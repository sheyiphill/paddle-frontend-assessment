import React from "react";

const FeaturesComp = () => {
    return (
        <section className="Feature-page">

            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img className="title-image" src="/images/keyboard.png" alt="keyboard"/>
                    </div>

                    <div className="col-lg-6">
                        <h1 className="features-heading">Features We Provide <br /> For You</h1>
                        <p className="small-heading"> Curabitur tempor justo non turpis malesuada cursus. </p>
                        <p className="small-heading">Mauris ac libero eu sem finibus lacinia nec pulvinar.</p>
                     
                        <ul>
                            <li className="radio">
                                <img src="/images/radio.svg" alt=""/>
                                <p className="paragraph">Curabitur tempor justo</p>
                            </li>
                            <li className="radio">
                                <img src="/images/radio.svg" alt=""/>
                                < p className="paragraph">Curabitur tempor justo</p>
                            </li>
                            <li className="radio">
                                <img src="/images/radio.svg" alt=""/>
                                <p className="paragraph">Curabitur tempor justo</p>
                            </li>
                            <li className="radio">
                                <img src="/images/radio.svg" alt=""/>
                                <p className="paragraph">Curabitur tempor justo</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>      
        </section>
    );
};
export default FeaturesComp;
