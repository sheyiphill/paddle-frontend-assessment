import React from "react";

const PlanComp = () => {
    return (
       <section className="white-section" id="pricing">

    <h2 className="section-heading">Choose Your Plan</h2>
    <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
    <div className="row text-center">

      <div className="pricing-column col-lg-4 col-md-6">
        <div className="card mb-4 rounded-3 shadow-sm py-3">
        
          <img src="/images/pricing3.png" alt=""/>
          <div className="card-body">
            
            <ul className="list-unstyled mt-3 mb-4">
              <li> Mauris sem neque </li>
              <li> Mauris sem neque </li>
              <li> Mauris sem neque </li>
              <li> Mauris sem neque </li>
            </ul>
            <h2 className="card-title pricing-card-title price-text">Free</h2>
            <button type="button" className="w-100 btn btn-lg btn-outline-dark">Select</button>
          </div>
        </div>
      </div>

      <div className="pricing-column col-lg-4 col-md-6">
        <div className="card mb-4 rounded-3 shadow-sm py-3">
          
                <img src="/images/pricing2.png" alt=""/>
          <div className="card-body">
            <ul className="list-unstyled mt-3 mb-4">
              <li> Mauris sem neque </li>
              <li> Mauris sem neque </li>
              <li> Mauris sem neque </li>
              <li> Mauris sem neque </li>
              <li> Mauris sem neque </li>
            </ul>
            <h2 className="card-title pricing-card-title price-text">$9<small className="text-muted fw-light">/mo</small></h2>
            <button type="button" className="w-100 btn btn-lg btn-outline-dark">Select</button>
          </div>
        </div>
      </div>

      <div className="pricing-column col-lg-4">
        <div className="card mb-4 rounded-3 shadow-sm py-3">
                <img src="/images/pricing1.png" alt=""/>
          <div className="card-body">
            <ul className="list-unstyled mt-3 mb-4">
              <li> Mauris sem neque </li>
              <li> Mauris sem neque </li>
              <li> Mauris sem neque </li>
              <li> Mauris sem neque </li>
              <li> Mauris sem neque </li>
              <li> Mauris sem neque </li>
            </ul>
                        <h2 className="card-title pricing-card-title price-text">$12<small className="text-muted fw-light">/mo</small></h2>

            <button type="button" className="w-100 btn btn-lg btn-dark">Select</button>
          </div>
        </div>
      </div>

    </div>
  </section>
        
    )
}

export default PlanComp;
