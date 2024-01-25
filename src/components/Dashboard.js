import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-gray-50 pr-8 max-md:pr-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[16%] max-md:w-full max-md:ml-0">
          <div className="bg-white flex w-full grow flex-col mx-auto py-12 items-start max-md:mt-8">
            <div className="self-stretch flex flex-col pl-6 pr-14 items-end max-md:px-5">
              <div className="flex items-stretch gap-4">
                <div className="flex-col fill-indigo-500 overflow-hidden relative flex aspect-square justify-center items-center flex-1">
                  <img
                    loading="lazy"
                    alt="img"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2158e5f110b99ca54e8f044746a79811c92934560ba37777d1e109911279a021?"
                    className="absolute h-full w-full object-cover object-center inset-0"
                  />
                  <img
                    loading="lazy"
                    alt="img"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2158e5f110b99ca54e8f044746a79811c92934560ba37777d1e109911279a021?"
                    className="aspect-square object-contain object-center w-full fill-indigo-500 overflow-hidden"
                  />
                </div>
                <div className="text-slate-950 text-2xl font-semibold self-center my-auto">
                  Base
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-stretch mt-10 mb-80 pl-8 pr-16 max-md:my-10 max-md:px-5">
              <div className="flex items-stretch justify-between gap-3.5">
                <img
                  loading="lazy"
                  alt="img"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b76d735770155c739c04bb4c87c1b1d989951bfc723169acd38acc8cc3fca3ba?"
                  className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-slate-950 text-base font-semibold self-start">
                  Dashboard
                </div>
              </div>
              <div className="flex items-stretch justify-between gap-3.5 mt-10">
                <img
                  loading="lazy"
                  alt="img"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/00c7c088d53f33448defa11fbc2959e20bd160f34269fbcd379c2c8f6ac940c3?"
                  className="aspect-[0.89] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-slate-950 text-base font-semibold self-center my-auto">
                  Upload
                </div>
              </div>
              <div className="flex items-stretch justify-between gap-3.5 mt-10">
                <img
                  loading="lazy"
                  alt="img"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/00c7c088d53f33448defa11fbc2959e20bd160f34269fbcd379c2c8f6ac940c3?"
                  className="aspect-[0.89] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-slate-950 text-base font-semibold self-center my-auto">
                  Invoice
                </div>
              </div>
              <div className="flex items-stretch justify-between gap-3.5 mt-10">
                <img
                  loading="lazy"
                  alt="img"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ade8310a47e1e77802ae079d74a6f3f87647cb0cdeab1a569d3870cf57ee6372?"
                  className="aspect-[0.89] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-slate-950 text-base font-semibold self-center my-auto">
                  Schedule
                </div>
              </div>
              <div className="items-stretch flex justify-between gap-3.5 mt-10 px-px">
                <img
                  loading="lazy"
                  alt="img"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce7446789305c454b0d97469fea2bf2fa10a2a75f4392aa30f6b3398cdaa3462?"
                  className="aspect-[0.92] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-slate-950 text-base font-semibold self-center my-auto">
                  Calendar
                </div>
              </div>
              <div className="flex items-stretch justify-between gap-3.5 mt-10">
                <img
                  loading="lazy"
                  alt="img"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/edee0afb480fdc0fc8bd0992c9b5d58f5fb0739229e6a5a3aa09a6406f4b7554?"
                  className="aspect-[0.89] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-slate-950 text-base font-semibold self-center my-auto">
                  Notification
                </div>
              </div>
              <div className="flex items-stretch justify-between gap-3.5 mt-10">
                <img
                  loading="lazy"
                  alt="img"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f940df9d5b83d99ddc82bcb4c4f448f7fa69dc1d2c24d2a2e250f4227d57dcd?"
                  className="aspect-[0.92] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-slate-950 text-base font-semibold self-center my-auto">
                  Settings
                </div>
              </div>
            </div>
          </div>
        </div>
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
                <div className="text-indigo-500 text-center text-base leading-6 whitespace-nowrap mt-4 mb-9">
                  Drop your excel sheet here or{" "}
                  <span className="text-indigo-500">browse</span>
                </div>
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
