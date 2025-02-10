import { useRecoilState } from 'recoil';
import { ReadChaptersState } from '@/renderer/state/libraryStates';
import { Check, Square } from 'lucide-react';

export function ChapterTableReadFilter() {
  const [hideReadChapters, setHideReadChapters] = useRecoilState(ReadChaptersState);

  const toggleReadChapters = () => {
    setHideReadChapters(!hideReadChapters);
  };

  return (
    <div
      className="flex items-center space-x-2 cursor-pointer"
      onClick={toggleReadChapters}
    >
      {hideReadChapters ? (
        <Check className="h-5 w-5 text-blue-500" />
      ) : (
        <Square className="h-5 w-5 text-gray-500" />
      )}
      <span className="text-sm">
        Hide Read
      </span>
    </div>
  );
};
