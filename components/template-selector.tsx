import TemplateCard from '@/components/card/template-selector-card';

export default function TemplateSelector({ onSelect }: { onSelect: (template: number) => void }) {
  return (
    <div className="flex-center-col justify-center min-h-screen gap-8">
      <h1 className="text-3xl font-bold">Select a Template</h1>
      <div className="flex gap-4">
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