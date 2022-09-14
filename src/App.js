import { useState } from "react";
import {Container } from "reactstrap";
import "./App.css";
import AlertPage from "./components/AlertPage";
import Navbars from "./components/Navbars";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setmode] = useState("light");
  const [visible, setVisible] = useState(null);
  const [alert, setalert] = useState(null)

  const  showAlert=(msg,type)=>{
    setalert({msg,type})
    setVisible(true)

    setTimeout(()=>{
      setalert(null)
      setVisible(false)
    },2000)

  }

  const toggleMode = (selectedMode) => {
    if (mode === "light") {
      setmode(selectedMode);
      document.body.style.backgroundColor="#343a40"
      showAlert("Dark mode is enabled !",'success')
    } else {
      setmode("light");
      document.body.style.backgroundColor='white'
      showAlert("Light mode is enabled !",'success')

    }
  };
  return (
    <div>
      <Navbars title="textUtils" mode={mode} toggleMode={toggleMode} />
      <Container className="my-3">
        
        <AlertPage alert={alert}  visible={visible}/>
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
      </Container>
    </div>
  );
}

export default App;
