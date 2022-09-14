import React, { useState } from "react";
import { Input, Button, Container } from "reactstrap";

const TextForm = (props) => {
  const [textarea, setTextArea] = useState("");

  function convertToUpperCase() {
    let newText = textarea.toUpperCase();
    setTextArea(newText);
    props.showAlert("Converted to uppercase","success")
  }
  function convertToLowerCase() {
    let newText = textarea.toLowerCase();
    setTextArea(newText);
    props.showAlert("Converted to lowercase","success")

  }

  function handleChange(event) {
    setTextArea(event.target.value);
  }

  function clearTextArea(event) {
    setTextArea("");
    props.showAlert("cleared !","success")

  }
  return (
    <>
      <Container style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <Input
            style={{backgroundColor:props.mode==='light'?'white':'#495057',color:props.mode==='light'?'black':'white'}}
            id="exampleText"
            value={textarea}
            onChange={(event) => {
              handleChange(event);
            }}
            name="text"
            type="textarea"
            rows="6"
          />
        </div>
        <Button  className=" mx-2" color="info" onClick={convertToUpperCase}>
          Convert to Uppercase
        </Button>
        <Button className="mx-2" color="info" onClick={convertToLowerCase}>
          Convert to Lowercase
        </Button>
        <Button color="info" onClick={clearTextArea}>
          Clear
        </Button>
      </Container>
      <Container className="my-3" style={{color:props.mode!=='light'? props.mode:'white'}}>
        <h1>Your text summary </h1>
        <p>
          {

          textarea.charAt(0)===""?
          
         `0 words and ${textarea.length} characters.`:  ` ${textarea.split(" ").filter((text)=>text !=="").length} words and ${textarea.length} characters.`               


          }
        </p>
        <p>
          {textarea.length > 0
            ? textarea
            : "Enter something above to see the preview here !"}
        </p>
      </Container>
    </>
  );
};

export default TextForm;
