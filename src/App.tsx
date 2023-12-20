import ColorDetails from './components/ColorDetails.js';
import PaletteList from './components/PaletteList.js';

export default function App() {
  return (
    <main className="h-screen max-h-screen w-screen flex">
      <ColorDetails />
      <PaletteList />
    </main>
  );
}
