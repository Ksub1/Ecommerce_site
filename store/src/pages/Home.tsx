
import { Container,Button, Row,Col } from "react-bootstrap";

export function Home() {
    return (
   <div className="home-page">
    <div className="hero-section">
        <Container>
        <Row className="align-items-center">
                        <Col md={6}>
                            <h6 className="text-danger">Dive in and Explore</h6>
                            <h1 className="fw-bold">Start Shopping Now!</h1>
                            <p>
                                Explore our curated collections and find the perfect item that speaks
                                to your style and needs. With just a click, begin your journey.
                            </p>
                            <Button variant="danger" className="mt-3">
                                Shop Now
                            </Button>
                        </Col>
                        <Col md={6}>
                            <div className="hero-images">
                                <img src="" alt="Hero 1"  />
                                <img src="" alt="Hero 2"  />
                            </div>
                        </Col>
                    </Row>
        </Container>
        </div>
   </div>
   );
}
