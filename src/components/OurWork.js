import React from 'react'
import { Card, CardColumns,Button } from 'react-bootstrap';
import immg from '../assets/corr1.jpg'

const OurWork = () => {
    return (
        <>
         <span><h3 style={{textAlign:'center'}}>Our Services</h3></span>
        <CardColumns>

           
  <Card>
    <Card.Img variant="top" src={immg} />
    <Card.Body>
      <Card.Title>Card title that wraps to a new line</Card.Title>
      <Card.Text>
        This is a longer card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Button variant="dark">Go somewhere</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={immg} />
    <Card.Body>
      <Card.Title>Card title that wraps to a new line</Card.Title>
      <Card.Text>
        This is a longer card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Button variant="dark">Go somewhere</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={immg} />
    <Card.Body>
      <Card.Title>Card title that wraps to a new line</Card.Title>
      <Card.Text>
        This is a longer card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Button variant="dark">Go somewhere</Button>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src={immg} />
    <Card.Body>
      <Card.Title>Card title that wraps to a new line</Card.Title>
      <Card.Text>
        This is a longer card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Button variant="dark">Go somewhere</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={immg} />
    <Card.Body>
      <Card.Title>Card title that wraps to a new line</Card.Title>
      <Card.Text>
        This is a longer card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Button variant="dark">Go somewhere</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={immg} />
    <Card.Body>
      <Card.Title>Card title that wraps to a new line</Card.Title>
      <Card.Text>
        This is a longer card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Button variant="dark">Go somewhere</Button>
    </Card.Body>
  </Card>
  
</CardColumns>
</>
    )
}

export default OurWork
