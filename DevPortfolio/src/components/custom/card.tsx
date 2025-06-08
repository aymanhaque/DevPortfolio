import React from "react";

interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
  link?: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, title, description, link }) => {
  const cardContent = (
    <div className="mx-5 flex flex-col bg-zinc-900/70 rounded-2xl shadow-lg w-80 h-90 border border-zinc-800 hover:scale-105 transition-transform duration-200 overflow-hidden">
      {/* Image covers 2/5 of the card */}
      <div className="w-full h-2/5 bg-white">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content container */}
      <div className="flex flex-col items-center justify-center h-3/5 p-8">
        <h2 className="text-2xl font-semibold text-neutral-100 text-center mb-3">
          {title}
        </h2>
        {/* Scrollable description container */}
        <div className="overflow-y-auto" style={{ maxHeight: "calc(100% - 3rem)" }}>
          <p className="text-zinc-400 text-center text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {cardContent}
    </a>
  ) : (
    cardContent
  );
};

export default Card;