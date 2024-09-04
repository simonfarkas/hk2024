import Image from "next/image";
import React from "react";

const Card = ({
  card,
  index,
  onClick,
}: {
  card: {
    options?: { title: string; percentage: number }[];
    image?: string;
    text: string;
  };
  index: number;
  onClick: () => void;
}) => {
  const totalPercentage = card.options?.reduce(
    (acc, option) => acc + option.percentage,
    0,
  );

  const colors = ["bg-green-500", "bg-red-500", "bg-yellow-500", "bg-blue-500"];

  let accumulatedWidth = 0;

  return (
    <div
      key={index}
      className={`shadow-md rounded-md my-2 bg-white ${card.image ? "" : "p-4"}`}
    >
      <div className="flex justify-between mb-1">
        {card.options?.map((option, optionIndex) => (
          <span key={optionIndex} className="text-gray-800 text-xs">
            {option.title}
          </span>
        ))}
      </div>

      {card.options && totalPercentage && (
        <div className="relative h-4 w-full bg-gray-200 rounded-full overflow-hidden">
          {card.options?.map((option, optionIndex) => {
            const width = `${(option.percentage / totalPercentage) * 100}%`;
            const color = colors[optionIndex % colors.length];

            const left = `${accumulatedWidth}%`;
            accumulatedWidth += parseFloat(width);

            return (
              <div
                key={optionIndex}
                className={`absolute top-0 h-full ${color}`}
                style={{ width, left }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-semibold">
                  {option.percentage}%
                </div>
              </div>
            );
          })}
        </div>
      )}
      {card.image && (
        <Image src={card.image} alt="oznam" width={390} height={200} />
      )}
      <div className={`${card.image ? 'p-4' : ''}`}>
        <p className="mt-2 text-sm text-gray-500">{card.text}</p>
        {onClick && (
          <button
            className="bg-red-600 text-xs px-4 py-2 text-white rounded-md mt-2"
            onClick={onClick}
          >
            Zobraziť detaily
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
