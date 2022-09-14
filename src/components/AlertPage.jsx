import { Alert, Container } from "reactstrap";

function AlertPage(props) {


  return (
    <Container>
     {props.alert!==null?  <Alert  isOpen={props.visible}  className='alert-green'>
        {props.alert.msg}
      </Alert>:null}
    </Container>
  );
}

export default AlertPage;
