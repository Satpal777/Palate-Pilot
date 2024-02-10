import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ShimmerCard = () => {
    return (
        <SkeletonTheme baseColor="#e3edf7" highlightColor="#b9dcff"> 
            <div className='res-card'>
                <div className='card-show-off'>
                    <div className='img-food'><Skeleton /></div>
                    <h4>
                        <Skeleton />
                    </h4>
                </div>
                <div className='col'>
                    <h4 className='trail'><Skeleton /></h4>
                    <h4 className='rating'><Skeleton /></h4>
                </div>
                <div className='col'>
                    <h4 className='trail'><Skeleton /></h4>
                    <h4><Skeleton /></h4>
                </div>
                <p className='time'></p>
            </div>
        </SkeletonTheme>
    )
};

export default ShimmerCard;