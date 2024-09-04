import React from 'react';

const Card = ({
  card,
  index,
  onClick,
}: {
  card: {
    options: { title: string; percentage: number }[];
    text: string;
  };
  index: number;
  onClick: () => void;
}) => {
  // Calculate total percentage (should be 100 ideally)
  const totalPercentage = card.options.reduce((acc, option) => acc + option.percentage, 0);

  // Define colors for the segments
  const colors = ['bg-green-500', 'bg-red-500', 'bg-yellow-500', 'bg-blue-500'];

  let accumulatedWidth = 0;

  return (
    <div key={index} className="p-4 shadow-md rounded-md my-2 bg-white">
      {/* Display option titles above the bar */}
      <div className="flex justify-between mb-1 text-xs text-gray-800">
        {card.options.map((option, optionIndex) => (
          <span key={optionIndex}>{option.title}</span>
        ))}
      </div>

      {/* Render the horizontal bar with rounded corners only at the start and end */}
      <div className="relative h-6 w-full bg-gray-200 rounded-full overflow-hidden">
        {card.options.map((option, optionIndex) => {
          const width = `${(option.percentage / totalPercentage) * 100}%`;
          const color = colors[optionIndex % colors.length];
          
          // Calculate the left position of the segment
          const left = `${accumulatedWidth}%`;
          accumulatedWidth += parseFloat(width); // Update the accumulated width for the next segment

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
  );
};

export default Card;
