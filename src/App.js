import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

let MonPrenom = 'Mimi'

function App() {
  return (
    <> 
    <div className='p-5 d-flex flex-column align-items-center bg-dark fs-2 text-light'>
      <Card style={{ width: '18rem' }} className='bg-transparent text-light text-center border-light'>
      <Image/>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
        <Description/>
        </Card.Text>
        <Button variant="primary"><Price/></Button>
      </Card.Body>
    </Card>
    {MonPrenom ? `Hello ${MonPrenom}`  : "Hello, there!"}

    {MonPrenom ? <img src={logo} className ='img-fluid col-6'/> : ""}
    </div>
    </>

  );
}

export default App;
