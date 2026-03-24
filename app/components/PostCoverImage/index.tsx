import Link from "next/link";
import Image from "next/image";

type PostCoverImageProps = {
    src: string;
    alt: string;
    url: string;
    width: number;
    height: number;
}

export function PostCoverImage({ src, alt, url, width, height }: PostCoverImageProps) {
    return (
        <Link href={url} className="w-full h-full overflow-hidden rounded-xl">
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition"
                priority
            />
        </Link>   
    )
}