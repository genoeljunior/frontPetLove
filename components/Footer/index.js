import { Container, Row, Col, Media, Nav, NavItem, NavLink, Button} from 'reactstrap';
import Image from 'next/image';


const Banner = () =>(
  <div className="divfooter">
    <Container>
    <Row>
        <Col>
          <Row>
            <Col>
            <Row>
            <Col>
            <Image src="/logo.png" width={169} height={91} />
            </Col>
            <Col>
              <Row style={{ justifyContent: 'center'}}> Siga nossas redes    </Row>
              <Row><Col style={{textAlign: 'right'}}> <Image src="/face.svg" width={58} height={58} /></Col><Col>  <Image src="/face.svg" width={58} height={58} /> </Col> </Row>

            </Col>

          </Row>
            </Col>

          </Row>
        </Col>
        <Col>
          <Row>
            <Col >
                <Row>.</Row>
                <Row><Col>Hotel e Creche</Col ><Col>Pet Shop</Col ></Row>
                <Row><Col>(62) 9999-99999</Col ><Col>(62) 9999-95959</Col ></Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
      </Row>
    </Container>
    
    <hr size="3" width="100%"/>
    <Container>
      <Row>
        <Col>
          <Row>
            <Col>
              <p > © Todos os direitos estão reservados aos desenvolvedores</p>
            </Col>

          </Row>
        </Col>
        <Col>
          <Row>
            <Col >
              <Nav >
                <NavItem>
                  <NavLink href="#" >Nossos Serviços</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Quem somos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Loja</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">FAQ</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Contato</NavLink>
                </NavItem>
              </Nav>

            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
      </Row>
    </Container>
  </div>

);

export default Banner;