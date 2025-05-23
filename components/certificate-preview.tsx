import { forwardRef } from 'react';
import FormalTemplate from './card/formalTemplate';
import ModernTemplate from './card/modernTemplate';

interface CertificatePreviewProps {
  formData: any;
  template: number;
}

const CertificatePreview = forwardRef<HTMLDivElement, CertificatePreviewProps>(
  ({ formData, template }, ref) => (
    <div className="bg-white shadow-lg p-8 rounded-lg">
      {template === 1 ? (
        <FormalTemplate ref={ref} formData={formData} />
      ) : (
        <ModernTemplate ref={ref} formData={formData} />
      )}
    </div>
  )
);

export default CertificatePreview;