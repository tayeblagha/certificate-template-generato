import { forwardRef } from 'react';
import FormalTemplate from './card/formalTemplate';
import ModernTemplate from './card/modernTemplate';

interface CertificatePreviewProps {
  formData: any;
  template: number;
}

const CertificatePreview = forwardRef<HTMLDivElement, CertificatePreviewProps>(
  ({ formData, template }, ref) => (
    <div className="bg-white shadow-lg p-4 lg:p-8 rounded-lg overflow-x-auto">
  <div className="scale-75 md:scale-90 lg:scale-100 origin-top">
    {template === 1 ? (
      <FormalTemplate ref={ref} formData={formData} />
    ) : (
      <ModernTemplate ref={ref} formData={formData} />
    )}
  </div>
</div>
  )
);

export default CertificatePreview;