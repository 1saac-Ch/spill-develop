import NextImage from '../NextImage';
import SpillLogoLight from '../../../assets/images/Logo.png';


type SpillLogoProps = {
    multiplySize?: number;
    responsive?: boolean;
};

const SpillLogo = ({
    multiplySize = 1,
    responsive = false,
}: SpillLogoProps) => {

    const baseWidth = 228 * multiplySize;
    const baseHeight = 55 * multiplySize;

    return (
        <NextImage
            src={SpillLogoLight}
            alt="Spill Logo"
            width={baseWidth}
            height={baseHeight}
            layout={responsive ? 'responsive' : undefined}
            priority
        />
    )
}

export default SpillLogo