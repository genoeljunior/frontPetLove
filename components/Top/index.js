import { Container, Row, Col, Media, Nav, NavItem, NavLink, Button} from 'reactstrap';
import Image from 'next/image';


const Top = () =>(
<div className="container">
  
    <div className="row">
      <div className="col-sm-8">
        <div className="row">
          <div className="col-sm-4">
            <Image src="/logo.png" width={169} height={91} />
          </div>
          <div className="col-sm-8">
            <Nav className="topnav">
              <NavItem>
                <NavLink className="nav" href="#" >Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav" href="#">Quem somos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav" href="#">Pet Care</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  className="nav" href="#">Contato</NavLink>
              </NavItem>
            </Nav>
          </div>
        </div >
    </div>
    <div className="col-sm-4" >
    <Button className="topnav btentrar" variant="primary" size="sm" Link href="/cadastro">
    Entrar
    </Button>{' '}
    <Button className="topnav btregistrar" variant="primary" size="sm">
    Registrar
    </Button>
    </div>
  </div>

</div>
);

export default Top;