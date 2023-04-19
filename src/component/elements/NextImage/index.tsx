import Image, { ImageProps } from 'next/image';

const NextImage = ({ alt, quality = '100', ...props }: ImageProps) => (
    <Image alt={alt} quality={quality} {...props} />
);

export default NextImage;
