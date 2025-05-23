import TemplateCard from '@/components/card/template-selector-card';

export default function TemplateSelector({ onSelect }: { onSelect: (template: number) => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-4">
      <h1 className="text-3xl font-bold text-center">Select a Template</h1>
      <div className="flex flex-col gap-4 w-full max-w-md md:flex-row md:justify-center md:max-w-4xl">
        <TemplateCard
          colorClass="bg-blue-600"
          title="Formal"
          description="Classic corporate design"
          templateNumber={1}
          onSelect={onSelect}
        />

        <TemplateCard
          colorClass="bg-green-600"
          title="Modern"
          description="Contemporary casual design"
          templateNumber={2}
          onSelect={onSelect}
        />
      </div>
    </div>
  );
}
