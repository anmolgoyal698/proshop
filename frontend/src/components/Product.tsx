import { Card } from "react-bootstrap";
import { IProduct } from "../models/Product";
import { Link } from "react-router-dom";

const Product = ({ product }: { product: IProduct }) => {
  return (
    <Card className="p-3 my-3">
      <Link to={`/products/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/products/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
