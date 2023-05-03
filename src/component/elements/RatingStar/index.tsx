import { useMemo } from 'react'
import StarIcon from '../StarIcon';

type RatingStarProps = {
    rating: number;
    children?: never;
};

const RatingStar = ({ rating, ...props }: RatingStarProps) => {
    const sanitizedRating = useMemo(() => {
        if (rating < 0) return 0;
        if (rating > 5) return 5;
        return Math.round(rating);
    }, [rating]);


    return (
        <div className='flex flex-row gap-2' {...props}>
            {new Array(sanitizedRating).fill('').map((_, index) => (
                <StarIcon key={index} color='#F26E21' />
            ))}
            {new Array(5 - sanitizedRating).fill('').map((_, index) => (
                <StarIcon key={index} color='#A6A6A6' />
            ))}
        </div>
    )
}

export default RatingStar