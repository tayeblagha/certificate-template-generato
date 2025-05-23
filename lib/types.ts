
export interface FormData {
  title: string;
  organization: string;
  recipientName: string;
  date: string;
  color: string;
  borderStyle: string;
  logo: string | null;
}

export interface TemplateCardData
{
  colorClass: string;
  title: string;
  description: string;
  templateNumber: number;
  onSelect: (template: number) => void;
}