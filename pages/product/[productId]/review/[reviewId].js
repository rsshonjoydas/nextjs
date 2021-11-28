import { useRouter } from "next/dist/client/router"

const Review = () => {
  const router = useRouter()
  const { productId, reviewId } = router.query

  return (
    <h2>Review {reviewId} for product {productId}</h2>
  )
}

export default Review
