import { Container, Button, Row, Col, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="home-page">
  {/* Hero Section */}
  <div
   className="hero-section" 
   style={{
     background: 'linear-gradient(to right, grey)', 
     padding: '50px 0',
     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',  // Adding shadow directly to hero section
     marginBottom: '20px' // Space between hero section and next content
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
          <div className="hero-images">
          <img src="../images/hero1.png" alt="Smartphones" className="img-fluid w-25" />

          <img src="../images/hero2.png" alt="Goprro" className="img-fluid w-50" />
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
            <Row>
              {/* Product 1 */}
              <Col md={4}>
                <Card className="h-100">
                  <Card.Img variant="top" src="../images/camera.jpeg" />
                  <Card.Body>
                    <Card.Title>Insta360 Ace Action Camera</Card.Title>
                    <Card.Text>NRP 45000</Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>

              {/* Product 2 */}
              <Col md={4}>
                <Card className="h-100">
                  <Card.Img variant="top" src="../images/laptop.jpg" />
                  <Card.Body>
                    <Card.Title>Apple MacBook Air 13-inch M1, 8GB Ram 256GB Storage Space Gray</Card.Title>
                    <Card.Text>NRP 118000</Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>

              {/* Product 3 */}
              <Col md={4}>
                <Card className="h-100">
                  <Card.Img variant="top" src="/images/television.jpg" />
                  <Card.Body>
                    <Card.Title>Haier 4K Bezel Less 58 inch Android/Smart TV LE-58K6600HQG</Card.Title>
                    <Card.Text>NRP 35000</Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
              
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
      </div></div>
  );
}
