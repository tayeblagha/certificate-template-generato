'use client';
import { useRef, useState } from 'react';
import { FormData } from '@/lib/types';
import TemplateSelector from '@/components/template-selector';
import CertificateForm from '@/components/certificate-form';
import CertificatePreview from '@/components/certificate-preview';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    organization: '',
    recipientName: '',
    date: '',
    color: '#2d3748',
    borderStyle: 'solid',
    logo: null
  });

  const certificateRef = useRef<HTMLDivElement>(null);

  const generatePDF = async () => {
    if (!certificateRef.current) return;

    const certificateElement = certificateRef.current;
    const canvas = await html2canvas(certificateElement, {
      scale: 2,
      useCORS: true,
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('l', 'mm', 'a4');
    const imgWidth = 297;
    const imgHeight = 210;
    
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save('certificate.pdf');
  };

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
            generatePDF={generatePDF}
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