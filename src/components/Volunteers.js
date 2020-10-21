import React from 'react'

const Volunteers = () => {
  const bord={border:'none', borderBottom:'1.5px solid gray'}
  const bord1={border:'1.5px solid gray'}
    return (
        <div style={{marginTop:'50px',width:'100%',margin:'auto',backgroundColor:'rgba(200,200,200,0.6)',padding:'10px'}}>
            <h2 style={{textAlign:'center'}}>VOLUNTEERS REGISTRATION FORM</h2>

            <form class="needs-validation" novalidate>
              <div class="form-row">

                <div class="col-md-6 mb-3">
                 <label for="validationCustom01">First name</label>
                  <input type="text" class="form-control" id="validationCustom01"  style={bord} required/>
                   <div class="valid-feedback">
                     Looks good!
                   </div>
               </div>
               <div class="col-md-6 mb-3">   
      <label for="validationCustom02">Last name</label>
      <input type="text" class="form-control" id="validationCustom02"  style={bord} required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  </div>

  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom03">Phone</label>
      <input type="text" class="form-control" id="validationCustom03" style={bord} required/>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>

   
    <div class="col-md-6 mb-3">
      <label for="validationCustom03">Email</label>
      <input type="email" class="form-control form-control-sm" id="colFormLabelSm" style={bord}/>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    </div>

    <div class="form-row">
    
    <div class="col-md-6 mb-3">
      <label for="validationCustom05">Address</label>
      <input type="text" class="form-control" id="validationCustom05" style={bord} required/>
      <div class="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>

    <div class="col-md-6 mb-3">
      <label for="validationCustom04">Country</label>
      <select class="custom-select" id="validationCustom04"  style={bord} required>
        <option selected disabled value="">Choose...</option>
        <option>...</option>
      </select>
      <div class="invalid-feedback">
        Please select a valid state.
      </div>
    </div>

  </div>

  <div class="col-md-12 mb-3">
     
      <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" style={bord1} rows="3"></textarea>
    </div>

  <button class="btn btn-dark" type="submit">Submit form</button>
</form>
        </div>
    )
}

export default Volunteers
