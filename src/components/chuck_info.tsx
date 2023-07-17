import React from 'react';

interface ChuckInfoProps {
  numWhalesSaved: number;
  numRoundHouseKicks: number;
}

const ChuckInfo: React.FC<ChuckInfoProps> = ({
  numWhalesSaved,
  numRoundHouseKicks,
}) => {
  return (
    <>
      <p>Number of Whales Saved: {numWhalesSaved}</p>
      <p>Number of Round House Kicks (in the last day): {numRoundHouseKicks}</p>
    </>
  );
};

export default ChuckInfo;
