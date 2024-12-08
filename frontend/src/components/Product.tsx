import { Card } from "react-bootstrap";
import { IProduct } from "../models/Product";

const Product = ({ product }: { product: IProduct }) => {
  return (
    <Card className="p-3 my-3">
      <a href={`/products/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/products/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
