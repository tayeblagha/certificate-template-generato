'use client';
import { useRef, useState } from 'react';
import { FormData } from '@/lib/types';
import TemplateSelector from '@/components/template-selector';
import CertificateForm from '@/components/certificate-form';
import CertificatePreview from '@/components/certificate-preview';
import { generateCertificatePDF } from '@/lib/pdf-utils';

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    organization: '',
    recipientName: '',
    date: new Date().toISOString().split('T')[0],
    color: '#2d3748',
    borderStyle: 'solid',
    logo: null
  });

  const certificateRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {!selectedTemplate ? (
        <TemplateSelector onSelect={setSelectedTemplate} />
      ) : (
        <div className="grid md:grid-cols-2 gap-8 p-6">
          <CertificateForm
            formData={formData}
            setFormData={setFormData}
            selectedTemplate={selectedTemplate}
            generatePDF={() => generateCertificatePDF(certificateRef)}
          />
          <CertificatePreview 
            formData={formData} 
            template={selectedTemplate} 
            ref={certificateRef}
          />
        </div>
      )}
    </div>
  );
}