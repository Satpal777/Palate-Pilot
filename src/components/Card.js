import test from './../../assets/test.avif';

const Card = ({ palateEachData }) => {
    const { name, locality, distance, deliveryTime, costText, rating, resId, url } = palateEachData;
    return (
        <div className='res-card'>
            <div className='card-show-off'>
                <img className='img-food' src={url} alt={name + "restaurant image"} />
                <h2>
                  {costText.text}
                </h2>
            </div>
            <div className='col'>
                <h4 className='trail'>{name}</h4>
                <h4 className='rating'>{rating.rating_text}⭐</h4>
            </div>
            <div className='col'>
                <h4 className='trail'>{locality.name}</h4>
                <h4>{distance}</h4>
            </div>
            <p className='time'>{deliveryTime}</p>
        </div>
    )
};

export default Card;