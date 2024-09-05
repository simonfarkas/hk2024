import React from "react";

const PollCard = ({
  card,
  index,
  onClick,
  hideButton = false,
}: {
  card: {
    options?: { title: string; percentage: number; color: string }[];
    text: string;
    title: string;
  };
  index: number;
  onClick?: () => void;
    hideButton?: boolean
}) => {
  const totalPercentage = card.options?.reduce(
    (acc, option) => acc + option.percentage,
    0,
  );

  let accumulatedWidth = 0;

  return (
    <div key={index} className="border-b border-gray-400 my-2 bg-white">
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
            const color = option.color;

            const left = `${accumulatedWidth}%`;
            accumulatedWidth += parseFloat(width);

            return (
              <div
                key={optionIndex}
                className={`absolute top-0 h-full bg-${color}-500`}
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
      <div className="py-4">
        <h2 className="text-xl font-bold">{card.title}</h2>
        <p className="mt-2 text-sm text-gray-500">
          {card.text.slice(0, 100)}...
        </p>
        {!hideButton && (
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

export default PollCard;
