import Image from 'next/image'
import img from '../public/1.jpg'

const Baby = () => {
  return (
    <>
      <Image src={img} placeholder='blur' alt="baby image" width='280' height='420' />
      <hr />
      {
        ['1', '2', '3', '4', '5'].map((path) => {
          return (
            <div key={path}>
              <Image src={`/${path}.jpg`} alt="baby image" width='280' height='420' />
            </div>
          )
        })
      }
    </>
  )
}

export default Baby
