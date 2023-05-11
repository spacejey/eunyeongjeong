// Components
import Star from '../../assets/Star 1.png'

// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Skills = () => {
  return ( 
    <>
      <Row style={{ marginTop: '200px', marginBottom: '200px' }} className='skills-container'>
        <div className='skills'>
          <img style={{ width: 50, marginRight: 10 }} src={ Star } alt="" />
          <p style={{ fontSize: 35, fontWeight: 800 }}>My Skills...</p>
        </div>
        <Col>
          <h4 className='skills-title'>Front end</h4>
          <p>HTML5<br />
              CSS<br />
              SCSS/SASS<br />
              React<br />
              JavaScript</p></Col>
        <Col>
          <h4 className='skills-title'>Back end</h4>
          <p>Python<br />
              Express<br />
              Node.js<br />
              Mongoose<br />
              MongoDB<br />
              Django<br />
              PostgreSQL<br />
              Table Plus</p></Col>
        <Col>
          <h4 className='skills-title'>Storage/Version control</h4>
          <p>Git<br />
              GitHub<br />
              Insomnia<br />  
              Heroku</p></Col>
        <Col>
          <h4 className='skills-title'>Design</h4>
          <p>Figma<br /> 
              Touch Designer<br /> 
              Photoshop<br /> 
              Illustrator</p></Col>
        <Col>
          <h4 className='skills-title'>Language</h4>
          <p>Korean(native)<br /> 
              English(fluent)<br /> 
              Japanese(beginner)</p></Col>
        <Col>
          <h4 className='skills-title'>Additional Skills</h4>
          <p>Project Planning<br /> 
              Communication<br /> 
              Virtual Working<br /> 
              Attention to Detail<br /> 
              Learning Agility<br /> 
              Positive Attitude<br /> 
              Customer Service</p></Col>
      </Row>
    </>
  )
}

export default Skills