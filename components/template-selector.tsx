import { Button } from '@/components/ui/button';

export default function TemplateSelector({ onSelect }: { onSelect: (template: number) => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <h1 className="text-3xl font-bold">Select a Template</h1>
      <div className="flex gap-4">
        <div className="flex flex-col items-center gap-4">
          <div className="w-64 h-96 bg-white border-2 border-gray-300 rounded-lg p-4">
            <div className="h-2 bg-blue-600 rounded-full mb-4" />
            <h2 className="text-xl font-semibold mb-2">Formal</h2>
            <p className="text-gray-600">Classic corporate design</p>
          </div>
          <Button onClick={() => onSelect(1)}>Choose Template 1</Button>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <div className="w-64 h-96 bg-white border-2 border-gray-300 rounded-lg p-4">
            <div className="h-2 bg-green-600 rounded-full mb-4" />
            <h2 className="text-xl font-semibold mb-2">Modern</h2>
            <p className="text-gray-600">Contemporary casual design</p>
          </div>
          <Button onClick={() => onSelect(2)}>Choose Template 2</Button>
        </div>
      </div>
    </div>
  );
}