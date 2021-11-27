import { useRouter } from "next/dist/client/router"

const ProductDetail = () => {
  const router = useRouter()
  const productId = router.query.productId

  return (
    <>
      <h2>Detail about Product {productId}</h2>
    </>
  )
}

export default ProductDetail
