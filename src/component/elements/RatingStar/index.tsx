import { useMemo } from 'react'
import StarIcon from '../StarIcon';
import clsx from "clsx";

type RatingStarProps = {
    rating: number;
    className?: string;
    sizeIcon?: number;
    children?: never;
};

const RatingStar = ({ rating, className, sizeIcon }: RatingStarProps) => {
    const sanitizedRating = useMemo(() => {
        if (rating < 0) return 0;
        if (rating > 5) return 5;
        return Math.round(rating);
    }, [rating]);


    return (
        <div className={clsx(
            'flex flex-row gap-2',
            className,
        )} >
            {new Array(sanitizedRating).fill('').map((_, index) => (
                <StarIcon key={index} color='#F26E21' size={sizeIcon} />
            ))}
            {new Array(5 - sanitizedRating).fill('').map((_, index) => (
                <StarIcon key={index} color='#A6A6A6' size={sizeIcon} />
            ))}
        </div>
    )
}

export default RatingStar