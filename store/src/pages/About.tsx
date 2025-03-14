import { Container, Card } from 'react-bootstrap';

export function About() {
    return (
        <Container className="mt-5 d-flex justify-content-center">
            <div style={{ maxWidth: '1000px', width: '100%' }}>
                {/* Bold Heading with Space Below */}
                <h1 className="text-center fw-bold" style={{ marginBottom: '20px' }}>About Us</h1>
                <Card 
                    style={{ 
                        backgroundColor: 'white', 
                        padding: '20px', 
                        borderRadius: '8px' 
                    }} 
                    className="shadow"
                >
                    <p style={{ textAlign: 'justify' }}>
                        Pathivara Suppliers is a trusted and reliable name in the supply industry, dedicated to delivering high-quality products and exceptional 
                        customer service. Founded with a vision to meet the growing needs of businesses and individuals, we have established ourselves as a leading
                        supplier of a wide range of products, sourced from reputable manufacturers and trusted partners.<br /><br />
                        
                        Our mission is to provide our customers with superior products at competitive prices while maintaining the
                        highest standards of quality and service. We pride ourselves on our strong customer relationships, built on a 
                        foundation of trust, transparency, and timely delivery. Our experienced team works closely with clients to understand their
                        specific needs and offer tailored solutions that exceed expectations.<br /><br />
                        
                        At Pathivara Suppliers, we believe in continuous improvement and innovation. Our commitment to excellence drives us to explore new
                        market trends, adopt advanced technologies, and enhance our product range to better serve our customers. We aim to be the preferred 
                        partner for all your supply needs, delivering value and satisfaction with every order.<br /><br />
                        
                        Thank you for choosing to shop with us and supporting the artisans of Nepal.
                    </p>
                </Card>
            </div>
        </Container>
    );
}
