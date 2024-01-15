import './MyCard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

const MyCard = (props) => {

return(
<div className='Cards'>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.cardImg} />
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>
          {props.Title}
          {props.Text}
        </Card.Text>
        <Button variant="primary">{props.Btn}</Button>
      </Card.Body>
    </Card>
</div>

)
}

export default MyCard