import { forwardRef, ForwardedRef } from 'react';
import BaseCertificate from './baseCertificate';

interface ModernTemplateProps {
  formData: any;
}

const ModernTemplate = forwardRef<HTMLDivElement, ModernTemplateProps>(
  ({ formData }, ref: ForwardedRef<HTMLDivElement>) => (
    <BaseCertificate formData={formData} ref={ref}>
    <div className="h-full flex-center-col justify-center p-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="text-center mb-12">
        {formData.logo && (
          <img src={formData.logo} alt="Logo" className="h-24 mx-auto mb-8" />
        )}
        <h1 className="text-5xl font-light mb-6">{formData.title}</h1>
        <p className="text-xl mb-8">is proudly presented to</p>
        <h2 className="text-6xl font-medium mb-12 underline decoration-wavy">{formData.recipientName}</h2>
        <p className="text-lg mb-8">Recognizing exceptional achievement and innovative contributions</p>
      </div>
      <div className="flex justify-between w-full mt-16 px-16">
        <div className="text-center">
          <div className="border-t-2 w-48 mx-auto pt-4" />
          <p className="text-sm mt-2">Digital Signature</p>
        </div>
        <div className="text-center">
          <p className="font-semibold">{formData.organization}</p>
          <p className="text-sm">{new Date(formData.date).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  </BaseCertificate>
) );

export default ModernTemplate;