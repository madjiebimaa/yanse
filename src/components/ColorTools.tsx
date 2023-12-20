import { Copy, CopyCheck, Dices } from 'lucide-react';
import { useState } from 'react';
import { useColorActions, usePrimaryColor } from '../store/color';

export default function ColorTools() {
  const [isCopied, setIsCopied] = useState(false);

  const primaryColor = usePrimaryColor();
  const colorActions = useColorActions();

  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(
      `#${primaryColor ? primaryColor.rgb : 'FFFFFF'}`
    );
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div className="flex space-x-2 p-2">
      <Dices
        className="shrink-0 md:h-8 md:w-8 cursor-pointer hover:opacity-70"
        onClick={() => colorActions.randomPrimaryColor()}
      />
      {isCopied ? (
        <CopyCheck className="shrink-0 md:h-8 md:w-8 cursor-pointer hover:opacity-70" />
      ) : (
        <Copy
          className="shrink-0 md:h-8 md:w-8 cursor-pointer hover:opacity-70"
          onClick={handleCopyClick}
        />
      )}
    </div>
  );
}
