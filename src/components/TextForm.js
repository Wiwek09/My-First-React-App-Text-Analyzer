import React,{useState} from 'react'

export default function TextForm(props) {
  
  const handleUpperCase = () =>{
    let newText = text.toUpperCase()
    setText(newText)
    props.displayalert("Converted to UpperCase","success")
  }

  const handleLowerCase = () =>{
    let newText = text.toLowerCase()
    setText(newText)
    props.displayalert("Converted to LowerCase","success")
    
  }

  const handleClear = () =>{
    let newText = ''
    setText(newText)
    props.displayalert("Text Cleared","success")
  }

  const handleCopy = () =>{
    let text = document.getElementById('mybox')
    navigator.clipboard.writeText(text.value)
    props.displayalert("Copied Text","success")
  }

  const handleSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.displayalert("Extra Space is removed","success")
  }
  
  const hanldeOnChange = (event) =>{
   // console.log("1");
    setText(event.target.value);
  }
  


  const [text,setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'? 'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" id="mybox" rows="8" onChange={hanldeOnChange} style={{backgroundColor: props.mode === 'dark'? '#132d53':'white', color:props.mode === 'dark'? 'white':'black', cursorColor:'white'}}  value={text} placeholder='Enter Text To Analyze' textarea = "true"/>
      <button type="button" disabled = {text.length ===0} className="btn btn-success my-3 mx-2" onClick={handleUpperCase} >Convert to UpperCase</button>
      <button type="button" disabled = {text.length ===0} className="btn btn-success my-3 mx-2" onClick={handleLowerCase} >Convert to LowerCase</button>
      <button type="button" disabled = {text.length ===0} className="btn btn-success my-3 mx-2" onClick={handleClear} >Clear Text</button>
      <button type="button" disabled = {text.length ===0} className="btn btn-success my-3 mx-2" onClick={handleCopy} >Copy Text</button>
      <button type="button" disabled = {text.length ===0} className="btn btn-success my-3 mx-2" onClick={handleSpace} >Remove Extra Space</button>
      </div>
    </div>
    <div className="container" style={{color: props.mode === 'dark'? 'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(' ').filter((element) => {return element.length!==0}).length} words {text.length} characters</p>
      <p>Time to read : {0.008 *  text.split(' ').filter((element) => {return element.length!==0}).length} minutes  </p>
    </div>
    </>
  )
}
