import NextImage from '../NextImage';
import SpillLogoLight from '../../../assets/images/Logo.png';
import SpillLogoDark from '../../../assets/icons/Logo.svg';


type SpillLogoProps = {
    multiplySize?: number;
    responsive?: boolean;
    isDark?: boolean;
};

const SpillLogo = ({
    multiplySize = 1,
    responsive = false,
    isDark = false,
}: SpillLogoProps) => {

    const baseWidth = 228 * multiplySize;
    const baseHeight = 55 * multiplySize;

    return (
        <NextImage
            src={isDark ? SpillLogoDark : SpillLogoLight}
            alt="Spill Logo"
            width={baseWidth}
            height={baseHeight}
            layout={responsive ? 'responsive' : undefined}
            priority
        />
    )
}

export default SpillLogo