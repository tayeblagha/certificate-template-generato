import { forwardRef } from 'react';

interface BaseCertificateProps {
  formData: any;
  children: React.ReactNode;
}

const BaseCertificate = forwardRef<HTMLDivElement, BaseCertificateProps>(
  ({ formData, children }, ref) => (
   <div
  className={`w-full max-w-[210mm] h-[297mm] mx-auto border-4`}
  style={{ 
    borderColor: formData.color,
    borderStyle: formData.borderStyle
  }}
  ref={ref}
>
  {children}
</div>
  )
);

BaseCertificate.displayName = 'BaseCertificate';

export default BaseCertificate;