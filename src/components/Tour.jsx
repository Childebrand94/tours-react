import ReadMoreButton from './ReadMoreButton'

const Tour = ({ image, name, info, price }) => {
  const maxLengthInfo = 130

  return (
    <article className="single-tour">
      <img className="img" src={image} />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <ReadMoreButton info={info} maxLengthInfo={maxLengthInfo} />
      </div>
    </article>
  )
}
export default Tour
