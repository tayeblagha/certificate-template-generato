
import { forwardRef, ForwardedRef } from 'react';
import BaseCertificate from './baseCertificate';

interface FormalTemplateProps {
  formData: any;
}

const FormalTemplate = forwardRef<HTMLDivElement, FormalTemplateProps>(
  ({ formData }, ref: ForwardedRef<HTMLDivElement>) => (
    <BaseCertificate formData={formData} ref={ref}>

    <div className="h-full flex-center-col justify-center text-center p-8">
      {formData.logo && (
        <img src={formData.logo} alt="Logo" className="h-20 mb-8" />
      )}
      <div className="mb-8">
        <p className="text-lg uppercase tracking-widest">{formData.organization}</p>
        <div className="w-32 h-1 bg-current mx-auto my-4" />
      </div>
      <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-8" style={{ color: formData.color }}>
  {formData.title}
</h1>
      <h1> Test Formal</h1>
      <p className="text-xl mb-12">This certificate is hereby formally presented to</p>
<h2 className="text-3xl lg:text-5xl font-semibold mb-8 lg:mb-12 border-b-2 pb-2 lg:pb-4">
  {formData.recipientName}
</h2>      <div className="flex justify-between w-full mt-16">
        <div className="text-left">
          <p className="border-t-2 pt-4">{new Date(formData.date).toLocaleDateString()}</p>
          <p className="text-sm">Date of Issuance</p>
        </div>
        <div className="text-right">
          <div className="border-t-2 pt-4">Authorized Signature</div>
          <div className="h-16 w-32 bg-gray-100 mt-2" />
        </div>
      </div>
    </div>
  </BaseCertificate>
));

export default FormalTemplate;