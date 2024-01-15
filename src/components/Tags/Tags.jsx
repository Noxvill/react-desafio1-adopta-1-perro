import Button from 'react-bootstrap/Button';
import MyCard from '../MyCard/MyCard';

const Tags = ({Stylebtn, Btn}) => {
    return (
    <>
    <Button variant={Stylebtn}>{Btn}</Button>
    </>
    );
    };
    export default Tags;

