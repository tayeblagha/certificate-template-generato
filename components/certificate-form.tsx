import { useState, useCallback, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

export default function CertificateForm({ formData, setFormData, selectedTemplate, generatePDF }: {
  formData: any;
  setFormData: any;
  selectedTemplate: number;
  generatePDF: () => void;
}) {
  const [step, setStep] = useState(1);

  useEffect(() => {
  if (step === 2 && !formData.date) {
    const today = new Date().toISOString().split('T')[0];
    setFormData((prev: FormData) => ({ ...prev, date: today }));
  }
}, [step, formData.date, setFormData]);

  const handleLogoUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, logo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }, [formData, setFormData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      generatePDF();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {step === 1 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Certificate Details</h2>
          <div>
            <Label>Certificate Title*</Label>
            <Input
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>
          <div>
            <Label>Recipient Name*</Label>
            <Input
              value={formData.recipientName}
              onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
              required
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Organization Details</h2>
          <div>
            <Label>Organization Name*</Label>
            <Input
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              required
            />
          </div>
          <div>
            <Label>Issue Date*</Label>
            <Input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Customization</h2>
          <div>
            <Label>Accent Color</Label>
            <Input
              type="color"
              value={formData.color}
              onChange={(e) => setFormData({ ...formData, color: e.target.value })}
            />
          </div>
          <div>
            <Label>Organization Logo</Label>
            <Input
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
            />
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Review Details</h2>
          <div className="space-y-2">
            <p><strong>Title:</strong> {formData.title}</p>
            <p><strong>Recipient:</strong> {formData.recipientName}</p>
            <p><strong>Organization:</strong> {formData.organization}</p>
            <p><strong>Date:</strong> {new Date(formData.date).toLocaleDateString()}</p>
          </div>
        </div>
      )}
      
      <div className="flex justify-between">
        {step > 1 && (
          <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
            Previous
          </Button>
        )}
        <Button type="submit">
          {step === 4 ? 'Generate PDF' : 'Next'}
        </Button>
      </div>
    </form>
  );
}