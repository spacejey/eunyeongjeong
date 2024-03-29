import { Link } from 'react-router-dom'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

// Components
import Woozu from '../../assets/woozu.gif'
import SnakeGame from '../../assets/snake-game.gif'
import Harvard from '../../assets/harvard-gallery.gif'
import StayCool from '../../assets/STAYCOOL.gif'



const ProjectsCard = () => {

  return (
    <div className='project'>
      <Container className='card-index'>
        <Row className='card-container'>
          
          {/* STAY COOL */}
          <Col className='card-indivisual'>
            <div className='card-top'>
              <Card.Text className='card-date'>APRIL 2023</Card.Text>
            </div>
            <Card style={{ width: '18rem' }}>
              <Link to={'https://staycool.herokuapp.com/'} target="_blank" rel="noopener noreferrer">
                <Card.Img  className='card-img' variant="top" src={StayCool} />
              </Link>
            </Card>
            <Card className='card-text-box'>
              <Card.Body className='card-text-body'>
                <Card.Title className='card-title'>STAY COOL</Card.Title>
                <Card.Text className='card-text'>
                Full-stack Ice cream truck tracking app by utilising the Django REST
                Framework and PostgreSQL. The frontend is built with React and SCSS,
                and map was inserted using Google Cloud API.
                </Card.Text>
              </Card.Body>
            </Card>
            <div className='stack-container'>
              {['Django', 'PostgeSQL', 'React', 'SASS', 'Figma'].map((tech, index) => (
                <p key={index} className='stack-badge'>
                  {tech}
                </p>
              ))}
            </div>
          </Col>

          {/* Woozu Sound */}
          <Col className='card-indivisual'>
            <Card.Text className='card-date'>MARCH 2023</Card.Text>
            <Card style={{ width: '18rem' }}>
              <Link to={'https://woozu-sounds.herokuapp.com/'} target="_blank" rel="noopener noreferrer">
                <Card.Img  className='card-img'  variant="top" src={Woozu} />
              </Link>
            </Card>
            <Card className='card-text-box'>
              <Card.Body className='card-text-body'>
                <Card.Title>Woozu Sounds</Card.Title>
                <Card.Text>
                Full-stack music festival website based on MERN. Each of us was
                responsible for developing our own music stage. We used Express.js to
                handle the Mongo database and alternatives CRUD operations.
                </Card.Text>
              </Card.Body>
            </Card>
            <div className='stack-container'>
              {['MERN framework', 'SASS', 'Figma'].map((tech, index) => (
                <p key={index} className='stack-badge'>
                  {tech}
                </p>
              ))}
            </div>
          </Col>

          {/* Harvard Gallery */}
          <Col className='card-indivisual'>
            <Card.Text className='card-date'>MARCH 2023</Card.Text>
            <Card style={{ width: '18rem' }}>
              <Link to={'https://spacejey-harvard-api.netlify.app/'} target="_blank" rel="noopener noreferrer">
                <Card.Img  className='card-img'  variant="top" src={Harvard} />
              </Link>
            </Card>
            <Card className='card-text-box'>
              <Card.Body className='card-text-body'>
                <Card.Title>Harvard Gallery</Card.Title>
                <Card.Text>
                Web page where users can view artworks. We used the API released by the
                Harvard Gallery and used React as front end. As I am strong in design, I was
                responsible for all the design using Bootstrap and SCSS.
                </Card.Text>
              </Card.Body>
            </Card>
            <div className='stack-container'>
              {['React', 'API', 'SCSS', 'Figma'].map((tech, index) => (
                <p key={index} className='stack-badge'>
                  {tech}
                </p>
              ))}
            </div>
          </Col>

          {/* Snake Game */}
          <Col className='card-indivisual'>
            <Card.Text className='card-date'>FEBRUARY 2023</Card.Text>
            <Card style={{ width: '18rem' }}>
              <Link to={'https://spacejey.github.io/SEI-PROJECT1/'} target="_blank" rel="noopener noreferrer">
                <Card.Img  className='card-img'  variant="top" src={SnakeGame} />
              </Link>
            </Card>
            <Card className='card-text-box'>
              <Card.Body className='card-text-body'>
                <Card.Title>Snake Game</Card.Title>
                <Card.Text>
                This was my first solo project made using JavaScript. 
                I adjusted the speed of the moving snake with
                &quot;setInterval&quot; and gave the &quot;keyCode&quot; effect.
                </Card.Text>
              </Card.Body>
            </Card>
            <div className='stack-container'>
              {['JavaScript', 'CSS', 'Figma'].map((tech, index) => (
                <p key={index} className='stack-badge'>
                  {tech}
                </p>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProjectsCard