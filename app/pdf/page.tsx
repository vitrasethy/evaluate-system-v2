'use client'
import React, { useRef } from "react";
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";
import Image from "next/image";
import '../pdf/fonts/fonts.css';
function HtmlToImageToPdf() {
  const htmlRef = useRef(null);

  // const handleDownload = () => {
  //   // Check if the ref is currently pointing to an HTMLElement
  //   if (htmlRef.current) {
  //     // convert the html to a png image
  //     html2canvas(htmlRef.current).then((canvas:HTMLCanvasElement) => {
  //       // create a pdf document
  //       const pdf = new jsPDF("l", "mm", "a4");
  
  //       // get the image data
  //       const imgData = canvas.toDataURL("image/png");
  
  //       // get the image width and height
  //       const imgWidth = 210;
  //       const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
  //       // add the image as a page
  //       pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
  
  //       // download the pdf
  //       pdf.save("download.pdf");
  //     });
  //   }
  // };
  
  const handleDownload = () => {
    // Check if the ref is currently pointing to an HTMLElement
    if (htmlRef.current) {
      // convert the html to a png image
      html2canvas(htmlRef.current).then((canvas:HTMLCanvasElement) => {
        // create a pdf document
        const pdf = new jsPDF("l", "mm", "a4");
  
        // get the image data
        const imgData = canvas.toDataURL("image/png");
  
        // get the width and height of the PDF document
        // const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfWidth = window.innerWidth * 0.2645833333;
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
  
        // add the image as a page
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  
        // download the pdf
        pdf.save("download.pdf");
      });
    }
  };
  
  return (
    <div>
      <div ref={htmlRef}>
      <section className="bg-[url('/certificate.jpg')] bg-contain w-[1132px] h-[803px] bg-no-repeat text-red-400">
        <div className="flex flex-col justify-center items-center h-full pb-4">
            <div className="grid grid-cols-2 gap-[130px]">
                <div className="flex flex-col justify-center items-center font-['Times New Roman']">
                    <p className="font-bold text-[18pt]">6th ENGINEERING DAY</p>
                    <p className="text-[14pt]">AWARDS 2023</p>
                    <p className="text-[18pt] font-bold">CERTIFICATE OF APPRECIATION</p>
                    <p className="text-[13pt]">is hereby awarded to</p>
                    <p className=" text-[18pt] font-bold">MR. SOKHA RITHY</p>
                    <p className="text-[13pt]">in recognition for winning the</p>
                    <p className="text-[13pt]">1st Award for top project entitled</p>
                    <p className="text-[13pt] pb-3">"Aleo Vera: Production & Processing"</p>
                </div>
                <div className="flex flex-col justify-center items-center leading-relaxed">
                    <p className="font-[KhmerMoulLight] text-[16pt]">ទិវាវិស្វកម្មលើកទី៦</p>
                    <p className="font-[KhmerBTB] text-[13pt]">ជ័យលាភីឆ្នាំ២០២៣</p>
                    <p className="font-[KhmerMoulLight] text-[16pt]">ប័ណ្ណសរសើរ</p>
                    <p className="font-[KhmerBTB] text-[13pt]">ជូនចំពោះ</p>
                    <p className="font-[KhmerMoulLight] text-[18pt]">លោក សុខា រិទ្ធី</p>
                    <p className="font-[KhmerOSSiemreap] text-[12pt]">ដែលទទួលបានជ័យលាភី</p>
                    <p className="font-[KhmerOSSiemreap] text-[12pt]">គម្រោងឆ្នើមលេខ ១ </p>
                    <p className="font-[KhmerOSSiemreap] text-[12pt]">ក្រោមប្រធាមបទ <span className="font-['Times New Roman'] text-[13pt]">"Aleo Vera: Production & Processing"</span></p>
                </div>
            </div>
            <div>
              <p className="font-[KhmerOSSiemreap] text-[11.54pt]">រាជធានីភ្នំពេញ ថ្ងៃទី២១ ខែវិច្ឆការ ឆ្នាំ២០២៣</p>
              <p className="font-['Times New Roman'] text-[13.02pt]">Phnom Penh, 21-November 2023</p>
            </div>
        </div>
        </section>
      </div>
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
}

export default HtmlToImageToPdf;
