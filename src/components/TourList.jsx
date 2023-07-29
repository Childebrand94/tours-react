import { useEffect, useState } from 'react'
import Tour from './Tour'

const TourList = () => {
  const url = 'https://course-api.com/react-tours-project'
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const jsonResp = await response.json()
        console.log(jsonResp)
        setData(jsonResp)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <div className="tours">
      {data.map(({ id, image, name, info, price }) => {
        return <Tour key={id} image={image} name={name} info={info} price={price} />
      })}
    </div>
  )
}
export default TourList
