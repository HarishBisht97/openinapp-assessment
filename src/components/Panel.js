import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import ExcelData from "./ExcelData";
import SidePanel from "./SidePanel";

const Panel = () => {
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);

  const [excelData, setExcelData] = useState(null);

  const handleFile = (e) => {
    let fileTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        setTypeError(null);
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFile(e.target.result);
        };
      } else {
        setTypeError("Please select only excel file types");
        setExcelFile(null);
      }
    } else {
      console.log("Please select your file");
    }
  };

  useEffect(() => {
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data.slice(0, 10));
    }
  }, [excelFile]);

  return (
    <div className="bg-gray-50 pr-8 max-md:pr-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <SidePanel />
        <div className="flex flex-col items-stretch w-[84%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch mt-12 max-md:max-w-full max-md:mt-10">
            <div className="flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
              <div className="text-black text-2xl font-semibold leading-8">
                Upload CSV
              </div>
              <div className="flex items-center justify-between gap-5 self-start">
                <img
                  loading="lazy"
                  alt="img"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c6d4a711af25c600d91d1f7162b063fdd4c9bfb25df4c02722eaf77ace11e3e?"
                  className="aspect-[0.78] object-contain object-center w-[18px] fill-black overflow-hidden shrink-0 max-w-full my-auto"
                />
                <img
                  loading="lazy"
                  alt="img"
                  srcSet="https://s3-alpha-sig.figma.com/img/203e/bb33/eccd71f34638f7751900105c639d563d?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D-VbE2qdcMrq7v4feLdMARyzxrAR5hBlHFQXR1OqS2tnpEepsPzl9CBPPEZ8cbzJY~vACwMeUADPnHc4NHbo0RH4DK7LdXY6RKcxDl0T3u956kIvASC48EUEpPe7Z0hc5p7fCuVNxTnOLWSj7izNXbSHCCkgDssNBJcrAYJ2VfSGtQ8bWvBXWjjXZmIfE4BMyFZg3Nvtb1Cdzbf1FWxjwj8RRLNXHm6m8lybvVXyOS7oEyl8cBEDFMzbdwIncRbHciQJEZvM5PNGqsecmA9VtbRdOQJxoTIH-JuOBTDG16PJGhgu9qqbFNA67oN6IjilR456TQuaILyLNpusPYPgDg__"
                  className="aspect-square object-contain object-center overflow-hidden self-stretch shrink-0 max-w-full w-10 h-10 rounded-full"
                />
              </div>
            </div>
            <div className="bg-white self-center flex w-[596px] max-w-full flex-col items-stretch mt-36 p-4 rounded-lg max-md:mt-10">
              <div className="border border-[color:var(--Light-Beerus-Hover,#EBEBEB)] flex flex-col items-center px-20 py-12 rounded-lg border-dashed max-md:max-w-full max-md:px-5">
                <img
                  loading="lazy"
                  alt="img"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7edd0a44b9792f29475f657ab8932dd2b3252bdaab32635346ce333332f4c868?"
                  className="aspect-square object-contain object-center w-9 justify-center items-center overflow-hidden max-w-full mt-12 max-md:mt-10"
                />

                <form className="form-group custom-form">
                  <div className="text-indigo-500 text-center text-base leading-6 whitespace-nowrap mt-4 mb-9">
                    Drop your excel sheet here or{" "}
                    <input
                      type="file"
                      required
                      onChange={handleFile}
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <span className="text-indigo-500">browse</span>
                  </div>
                </form>
              </div>
              <div className="justify-center items-center bg-indigo-500 flex flex-col mt-5 px-16 py-4 rounded-lg max-md:max-w-full max-md:px-5">
                <div className="flex items-stretch gap-2">
                  <img
                    loading="lazy"
                    alt="img"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4072a967b2119188244462bc914318b152a17dcf455d129fb82ed972ef1861d0?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-white text-sm font-semibold leading-6">
                    Upload
                  </div>
                </div>
              </div>
            </div>
          </div>
          {excelData && <ExcelData excelData={excelData} />}
        </div>
      </div>
    </div>
  );
};

export default Panel;
