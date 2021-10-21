import { Container, Row, Col, Media, Nav, NavItem, NavLink, Button} from 'reactstrap';
import Image from 'next/image';


const Banner = () =>(
<div className="banner">
  <Container>
    <h1 className="adote">Adote um Amigo<br/>
e tenha atenção incondicional</h1>
    <h5 className="lig">A ligação humano-canino é a relação entre cães e humanos.</h5>
    <Button className="btvejamais">Veja mais</Button>
  </Container>
</div>
);

export default Banner;