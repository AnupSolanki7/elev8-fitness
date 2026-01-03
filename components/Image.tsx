"use client";

import NextImage, { ImageProps } from "next/image";
import { useState } from "react";
import fallbackImage from "../public/download.svg";

type AppImageProps = Omit<ImageProps, "src" | "alt"> & {
    src?: string;
    alt?: string;
};

export default function Image({
    src,
    alt = "image",
    ...props
}: AppImageProps) {
    const [imgSrc, setImgSrc] = useState(src || fallbackImage);

    return (
        <NextImage
            {...props}
            src={imgSrc}
            alt={alt}
            width={250}
            height={250}
            onError={() => setImgSrc(fallbackImage)}
        />
    );
}
