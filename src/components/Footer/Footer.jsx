import './Footer.css'

const Footer =(props)=>{

return(

    <footer className='My-Footer'>
        <p><br></br>Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con <br></br>diferentes personalidades y tamaños
        , todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro <br></br>y bríndale una
        segunda oportunidad. Encuentra a tu compañero peludo para siempre.<br></br>

        Todos los derechos reservados {props.year}
        <br></br>
        </p>
    </footer>

)}

export default Footer