import { useState } from 'react'

const ReadMoreButton = ({ info, maxLengthInfo }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded)
  }

  const shortenedContent = isExpanded ? info : info.slice(0, maxLengthInfo) + '...'

  return (
    <p>
      {shortenedContent}
      <button style={{ display: 'block', marginTop: '1em' }} onClick={toggleReadMore} className="info-btn">
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </p>
  )
}
export default ReadMoreButton
