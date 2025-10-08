// src/components/DosageInfoBox.tsx

type DosageInfoBoxProps = {
  mainDose: string;
  preposition: string;
  timeValue: string;
  subtext: string;
};

const DosageInfoBox = ({ mainDose, preposition, timeValue, subtext }: DosageInfoBoxProps) => {
  return (
    <div className="w-full shadow-md shadow-black/30 rounded-lg p-4 text-center">
      <div className="flex justify-center items-baseline gap-2 sm:gap-4">
        <span className="text-3xl font-bold text-gray-800">{mainDose}</span>
        <span className="text-sm font-medium text-blue-600">{preposition}</span>
        <span className="text-3xl font-bold text-gray-800">{timeValue}</span>
      </div>
      <p className="mt-1 text-lg text-gray-600">{subtext}</p>
    </div>
  );
};

export default DosageInfoBox;