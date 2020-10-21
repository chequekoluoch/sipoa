import React from 'react'
import Location from './Location'

const ContactUs = () => {
    const bord={border:'none', borderBottom:'1.5px solid gray'}
  const bord1={border:'1.5px solid gray'}
    return (
        <div style={{marginTop:'30px', textAlign:'center'}}>
        <h1 style={{ textAlign:'center',marginBottom:'20px'}}>Contact Us</h1>

<div class="row">
  <div class="col-sm-6">
    
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">HEAD OFFICE</h5>
        <h6 class="card-text">CRIME SI POA</h6>
        <p>Sarakasi Dome, Ngara Road <br></br>

P.O.BOX 10018-00100 GPO<br></br>

Email: volunteers@crimesipoa.org | info@crimesipoa.org <br></br> 

Website: htpp://www.crimesipoa.org<br></br>

Office Cell : 0741506060</p>
      </div>
      <div style={{height:'100%'}}>
      <Location />
    </div>
    </div>
    
  </div>

  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">SEND US A MESSAGE</h5>
        <p class="card-text">Kindly send us an email and one of our representatives will get back to you within 24hours</p>
        <h5 class="card-title">CONTACT US</h5>
        <p>Fields marked with an * are required</p>

        <form class="needs-validation" novalidate>
              <div class="form-row">

                <div class="col-md-12 mb-3">
                 <label for="validationCustom01">Name*</label>
                  <input type="text" class="form-control" id="validationCustom01"  style={bord} required/>
                   <div class="valid-feedback">
                     Looks good!
                   </div>
               </div>
              
               <div class="col-md-12 mb-3">
                      <label for="validationCustom03">Email*</label>
                      <input type="email" class="form-control form-control-sm" id="colFormLabelSm" style={bord}/>
                      <div class="invalid-feedback">
                           Please provide a valid city.
                      </div>
              </div>

  </div>

      <div class="col-md-12 mb-3">
      <label for="exampleFormControlTextarea1">Message*</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" style={bord1} rows="3"></textarea>
      </div>

      <button class="btn btn-dark" type="submit">Submit form</button>
</form>
      </div>
    </div>
  </div>
</div>
      </div>
    )
}

export default ContactUs
