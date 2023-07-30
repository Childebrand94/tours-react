import { useEffect, useState } from 'react'
import Tour from './Tour'
import RefreshButton from './RefreshButton'
import LoadingScreen from './LoadingScreen'

const TourList = () => {
  const url = 'https://course-api.com/react-tours-project'

  const [data, setData] = useState([])
  const [isEmptyTourList, setIsEmptyTourList] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const jsonResp = await response.json()
        setData(jsonResp)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [isEmptyTourList])

  const deleteTour = (dataId) => {
    setData((prevData) => prevData.filter((item) => item.id !== dataId))
  }

  const refreshClick = () => {
    setIsEmptyTourList(!isEmptyTourList)
    setIsLoading(true)
  }

  return (
    <div>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="tours">
          {data.map(({ id, image, name, info, price }) => {
            return <Tour key={id} image={image} name={name} info={info} price={price} onClick={() => deleteTour(id)} />
          })}
          {data.length === 0 && <RefreshButton onClick={refreshClick} />}
        </div>
      )}
    </div>
  )
}
export default TourList
