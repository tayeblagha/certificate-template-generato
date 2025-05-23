import { forwardRef } from 'react';

interface BaseCertificateProps {
  formData: any;
  children: React.ReactNode;
}

const BaseCertificate = forwardRef<HTMLDivElement, BaseCertificateProps>(
  ({ formData, children }, ref) => (
    <div
      className={`w-[210mm] h-[297mm] border-${formData.borderStyle} border-4 mx-auto`}
      style={{ borderColor: formData.color }}
      ref={ref}
    >
      {children}
    </div>
  )
);

BaseCertificate.displayName = 'BaseCertificate';

export default BaseCertificate;