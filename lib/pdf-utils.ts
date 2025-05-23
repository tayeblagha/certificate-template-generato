import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { RefObject } from 'react';

export const generateCertificatePDF = async (certificateRef: RefObject<HTMLDivElement | null>) => {
  if (!certificateRef.current) return; // or throw error

  const certificateElement = certificateRef.current;
  const canvas = await html2canvas(certificateElement, {
    scale: 2,
    useCORS: true,
  });
  
  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF('p', 'mm', 'a4');
  const imgWidth = 210;
  const imgHeight = 297;
  
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const x = (pageWidth - imgWidth) / 2;
  const y = (pageHeight - imgHeight) / 2;

  pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
  pdf.save('certificate.pdf');
};