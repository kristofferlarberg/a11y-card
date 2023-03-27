import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Card = ({ link, title, caption, preTitle, img }) => {
  return (
    <div
      className={clsx(
        "border-gray-border group relative mt-2 flex flex-1 flex-col overflow-hidden rounded-md border-[1px] border-solid bg-white transition",
        "focus-within:shadow-lg hover:shadow-lg motion-reduce:transition-none"
      )}
    >
      <div className="flex grow flex-col">
        {title && (
          <h3 className="peer order-3 py-2 px-6">
            <Link
              aria-label={`${title}, Läs mer…`}
              href={link}
              className={clsx(
                "font-bold",
                "after:absolute after:inset-0 after:z-10 hover:no-underline focus-visible:outline-none"
              )}
            >
              {title}
            </Link>
          </h3>
        )}
        <div className="relative z-0 order-1 h-80">
          <Image
            src={img.path}
            alt={img.alt}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </div>
        {preTitle && <p className="order-2 px-6 pt-6">{preTitle}</p>}
        {caption && <p className="order-4 px-6">{caption}</p>}
        <p
          aria-hidden="true"
          className={clsx(
            "relative order-5 mb-0 mt-auto px-6 pb-6 pt-1 text-right leading-none transition-opacity",
            "group-hover:underline peer-focus-within:underline motion-reduce:transition-none lg:underline lg:opacity-0 lg:group-hover:opacity-100 lg:peer-focus-within:opacity-100"
          )}
        >
          Read more
        </p>
      </div>
    </div>
  );
};
