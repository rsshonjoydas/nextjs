const ProductDetail = ({ params }: { params: { productId: string } }) => {
  return <div>Details about product {params.productId} </div>;
};

export default ProductDetail;
