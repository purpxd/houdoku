import { useRecoilState } from 'recoil';
import { hideUnreadChaptersState } from '@/renderer/state/libraryStates';
import { Checkbox } from '@houdoku/ui/components/Checkbox';
import { Label } from '@houdoku/ui/components/Label';
export function ChapterTableReadFilter() {
  const [hideReadChapters, setHideReadChapters] = useRecoilState(hideUnreadChaptersState);

  const toggleReadChapters = () => {
    setHideReadChapters(!hideReadChapters);
  };

  return (
    <div className="flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
      <Checkbox
        id="hide-read"
        checked={hideReadChapters}
        onCheckedChange={toggleReadChapters}
      />
      <Label
        htmlFor="hide-read"
        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Hide read
      </Label>
    </div>

  );
};
