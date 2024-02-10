import test from './../../assets/test.avif';
import constants from '../util/constants';
const Card = ({ palateEachData }) => {
    const { name, locality, cloudinaryImageId, sla, aggregatedDiscountInfoV3, costForTwo, avgRating } = palateEachData;
    return (
        <div className='res-card'>
            <div className='card-show-off'>
                <img className='img-food' src={constants.IMG_URL + cloudinaryImageId} alt={name + "restaurant image"} />
                <h3>
                    {aggregatedDiscountInfoV3 ? `${aggregatedDiscountInfoV3?.header ?? ''} ${aggregatedDiscountInfoV3?.subHeader ?? ''}` : costForTwo}
                </h3>
            </div>
            <div className='col'>
                <h4 className='trail'>{name}</h4>
                <h4 className='rating'>{avgRating}⭐</h4>
            </div>
            <div className='col'>
                <h4 className='trail'>{locality}</h4>
                <h4>{sla?.lastMileTravelString}</h4>
            </div>
            <p className='time'>{sla?.slaString}</p>
        </div>
    )
};

export default Card;