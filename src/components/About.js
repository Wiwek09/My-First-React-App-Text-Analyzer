import React from 'react'

export default function 
About(props) {
  
  let mystyle = {
    color : props.mode === 'dark'? 'white':'rgb(19, 45, 83)',
    backgroundColor : props.mode === 'dark'? 'rgb(19, 45, 83)':'white' 
  }

  return (
   <div>
      <div className="accordion" style={mystyle} id="accordionExample">
      <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>What is this App About</strong>
      </button>
     </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        This is the <code> Text Analyzer </code> App.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>What Are the Usecases</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        This App is used for implementing basic functionalities in text 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Who are the developer of this App</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        This App is Designed by <strong> Bibek K.C. aka (Wiwek K.C)</strong>
      </div>
    </div>
   </div>
  </div>
</div>
  )
}
