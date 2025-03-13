import { Col, Row } from "react-bootstrap"
import storeItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem"



export function Store() {
    return (
<>
<div className="text-center" >
<h2>Explore Our Products</h2>
     </div>
    <Row md={2} xs={1} lg={4} className="g-3">
        {storeItems.map(item => (
            <Col key={item.id}>
                <StoreItem {...item} />
                </Col>
        ) )}


  

</Row>
</>
    )
}