import { forwardRef } from 'react';

const CertificatePreview = forwardRef(({ formData, template }: {
  formData: any;
  template: number;
}, ref: any) => {
  return (
    <div className="bg-white shadow-lg p-8 rounded-lg" ref={ref}>
      <div className={`w-[210mm] h-[297mm] border-${formData.borderStyle} border-4`}
           style={{ borderColor: formData.color }}>
        {template === 1 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-8">
            {formData.logo && (
              <img src={formData.logo} alt="Logo" className="h-20 mb-8" />
            )}
            <div className="mb-8">
              <p className="text-lg uppercase tracking-widest">{formData.organization}</p>
              <div className="w-32 h-1 bg-current mx-auto my-4" />
            </div>
            <h1 className="text-4xl font-bold mb-8" style={{ color: formData.color }}>
              {formData.title}
            </h1>
            <p className="text-xl mb-12">This certificate is proudly presented to</p>
            <h2 className="text-5xl font-semibold mb-12 border-b-2 pb-4">{formData.recipientName}</h2>
            <div className="flex justify-between w-full mt-16">
              <div className="text-left">
                <p className="border-t-2 pt-4">{new Date(formData.date).toLocaleDateString()}</p>
                <p className="text-sm">Date of Issue</p>
              </div>
              <div className="text-right">
                <div className="border-t-2 pt-4">Signature</div>
                <div className="h-16 w-32 bg-gray-100 mt-2" />
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-white">
            <div className="text-center mb-12">
              {formData.logo && (
                <img src={formData.logo} alt="Logo" className="h-24 mx-auto mb-8" />
              )}
              <h1 className="text-5xl font-light mb-6">{formData.title}</h1>
              <p className="text-xl mb-8">is proudly presented to</p>
              <h2 className="text-6xl font-medium mb-12 underline decoration-wavy">{formData.recipientName}</h2>
              <p className="text-lg mb-8">in recognition of outstanding achievement and dedication</p>
            </div>
            <div className="flex justify-between w-full mt-16 px-16">
              <div className="text-center">
                <div className="border-t-2 w-48 mx-auto pt-4" />
                <p className="text-sm mt-2">Authorized Signature</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">{formData.organization}</p>
                <p className="text-sm">{new Date(formData.date).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

CertificatePreview.displayName = 'CertificatePreview';

export default CertificatePreview;