import './MyCard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import Tags from '../Tags/Tags';

const MyCard = ({cardImg, Title, Text, Btn, Stylebtn}) => {

return(
    <>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cardImg} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>
          {Text}
        </Card.Text>
        <Tags Stylebtn={Stylebtn} Btn={Btn}/>
      </Card.Body>
    </Card>

    </>
)
}

export default MyCard