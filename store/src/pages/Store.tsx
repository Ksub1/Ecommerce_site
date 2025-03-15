import { Col, Row } from "react-bootstrap"
import storeItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem"

export function Store() {
    return ( 
        <>
            <div className="text-danger text-center">
                <h2>Explore Our Products</h2>
            </div>
            <div className="container-fluid">
                <Row xs={2} sm={2} md={3} lg={6} className="g-4">
                    {storeItems.map(item => (
                        <Col key={item.id}>
                            <StoreItem {...item} />
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}
