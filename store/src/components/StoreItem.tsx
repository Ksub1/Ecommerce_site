import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCart"

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()

  const quantity = getItemQuantity(id)

  return (
    <Card style={{ width: '180px', height: '250px', margin: '0 auto' }}>
      <Card.Img 
        variant="top" 
        src={imgUrl} 
        style={{ width: '100%', height: '100px', objectFit: 'cover' }} 
      />
      <Card.Body className="d-flex flex-column text-center">
        <Card.Title className="fs-6">{name}</Card.Title>
        <div className="text-muted fs-6 mb-3">{formatCurrency(price)}</div>

        <div className="mt-auto">
          {quantity === 0 ? (
            <Button 
              className="w-100" 
              size="sm" 
              onClick={() => increaseCartQuantity(id)}
            >
              + Add to Cart
            </Button>
          ) : (
            <div className="d-flex flex-column align-items-center gap-2">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <Button size="sm" onClick={() => decreaseCartQuantity(id)}>-</Button>
                <span className="fs-5">{quantity}</span> in cart
                <Button size="sm" onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button 
                onClick={() => removeFromCart(id)} 
                variant="danger" 
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}
