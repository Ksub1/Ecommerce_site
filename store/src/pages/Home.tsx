import { Container, Button, Row, Col, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="home-page">
      <div
        className="hero-section"
        style={{
          background: 'linear-gradient(to right, grey)',
          padding: '50px 0',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px'
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h4 className="text-danger">Explore the Future of Electronics</h4>
              <h1 className="fw-bold">Shop the Latest in Technology!</h1>
              <p>
                From cutting-edge smartphones to powerful laptops, our collection features the best in
                electronic gadgets. Discover unbeatable deals on your favorite tech products and get them delivered to your doorstep. 
                Don’t miss out on the latest innovations!
              </p>
              <Button variant="danger" className="mt-3">
                <Link to="/Store" className="text-white text-decoration-none">
                  Shop Now
                </Link>
              </Button>
            </Col>
            <Col md={6}>
              <div className="hero-images d-flex justify-content-center">
                <img src="../images/hero1.png" alt="Smartphones" className="img-fluid w-25 me-2" />
                <img src="../images/hero2.png" alt="GoPro" className="img-fluid w-50" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="product-carousel mt-5">
        <Container>
          <h2 className="text-danger text-center mb-4">Featured Products</h2>
          <Carousel>
            <Carousel.Item>
              <Row className="justify-content-center">


              
                <Col xs={6} sm={4} md={3} lg={2}>
                  <Card style={{ width: '200px', height: '300px', margin: '0 auto' }}>
                    <Card.Img
                      variant="top"
                      src="../images/camera.jpeg"
                      style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                    />
                    <Card.Body className="text-center">
                      <Card.Title className="fs-6">Insta360 Ace Action Camera</Card.Title>
                      <Card.Text className="text-muted">NRP 45000</Card.Text>
                      <Button size="sm" variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </Col>

              
                <Col xs={6} sm={4} md={3} lg={2}>
                  <Card style={{ width: '200px', height: '300px', margin: '0 auto' }}>
                    <Card.Img
                      variant="top"
                      src="../images/laptop.jpg"
                      style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                    />
                    <Card.Body className="text-center">
                      <Card.Title className="fs-6">Apple MacBook Air 13-inch M1</Card.Title>
                      <Card.Text className="text-muted">NRP 118000</Card.Text>
                      <Button size="sm" variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </Col>

             
                <Col xs={6} sm={4} md={3} lg={2}>
                  <Card style={{ width: '200px', height: '300px', margin: '0 auto' }}>
                    <Card.Img
                      variant="top"
                      src="../images/television.jpg"
                      style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                    />
                    <Card.Body className="text-center">
                      <Card.Title className="fs-6">Haier 4K Bezel Less 58 inch TV</Card.Title>
                      <Card.Text className="text-muted">NRP 35000</Card.Text>
                      <Button size="sm" variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </Col>

               
                <Col xs={6} sm={4} md={3} lg={2}>
                  <Card style={{ width: '200px', height: '300px', margin: '0 auto' }}>
                    <Card.Img
                      variant="top"
                      src="../images/drone.png"
                      style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                    />
                    <Card.Body className="text-center">
                      <Card.Title className="fs-6">DJI Mini 4 Pro Fly More Combo</Card.Title>
                      <Card.Text className="text-muted">NRP 150000</Card.Text>
                      <Button size="sm" variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </Col>

           
                <Col xs={6} sm={4} md={3} lg={2}>
                  <Card style={{ width: '200px', height: '300px', margin: '0 auto' }}>
                    <Card.Img
                      variant="top"
                      src="../images/speaker.jpg"
                      style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                    />
                    <Card.Body className="text-center">
                      <Card.Title className="fs-6">Ultima Thunder 120 Speaker</Card.Title>
                      <Card.Text className="text-muted">NRP 4500</Card.Text>
                      <Button size="sm" variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </Col>

           
                <Col xs={6} sm={4} md={3} lg={2}>
                  <Card style={{ width: '200px', height: '300px', margin: '0 auto' }}>
                    <Card.Img
                      variant="top"
                      src="../images/mixer.jpg"
                      style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                    />
                    <Card.Body className="text-center">
                      <Card.Title className="fs-6">Mixer-Grinder</Card.Title>
                      <Card.Text className="text-muted">NRP 3500</Card.Text>
                      <Button size="sm" variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    </div>
  );
}
