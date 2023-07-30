import { useEffect, useState } from 'react'
import Tour from './Tour'
import RefreshButton from './RefreshButton'
import LoadingScreen from './LoadingScreen'

const TourList = () => {
  const url = 'https://course-api.com/react-tours-project'

  const [tours, setTours] = useState([])
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
        setTours(jsonResp)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [isEmptyTourList])

  const deleteTour = (dataId) => {
    setTours((prevData) => prevData.filter((item) => item.id !== dataId))
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
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} onClick={() => deleteTour(tour.id)} />
          })}
          {tours.length === 0 && <RefreshButton onClick={refreshClick} />}
        </div>
      )}
    </div>
  )
}
export default TourList
