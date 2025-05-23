import { Button } from '@/components/ui/button';
import { TemplateCardData } from '@/lib/types';

export default function TemplateCard({
  colorClass,
  title,
  description,
  templateNumber,
  onSelect,className
}: TemplateCardData) {
  return (
    <div className="flex-center-col gap-4">
      <h1>
      
      </h1>
      <div className={`temp-selec ${className}`}>
        <div className={`temp-div ${colorClass}`} />
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <Button onClick={() => onSelect(templateNumber)}>
        Choose Template {templateNumber}
      </Button>
    </div>
  );
}