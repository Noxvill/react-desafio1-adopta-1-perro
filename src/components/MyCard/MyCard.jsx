import './MyCard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import Tags from '../Tags/Tags';

const MyCard = (props) => {

return(
    <>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.cardImg} />
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>
          {props.Text}
        </Card.Text>
        <Tags/>
      </Card.Body>
    </Card>

    </>
)
}

export default MyCard