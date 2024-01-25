import React from "react";
import TableRow from "./TableRow";

const ExcelData = ({ excelData }) => {
  const widthColumns = ["w-1/12", "w-3/12", "w-2/12", "w-2/12"];
  return (
    <div>
      <div className="self-stretch flex flex-col items-stretch mt-28 px-12 max-md:max-w-full max-md:mt-10 max-md:px-5 ">
        <div className="text-black text-2xl font-semibold leading-8 max-md:max-w-full">
          Uploads
        </div>
        <table className="bg-neutral-100 flex flex-col mt-12 px-4 py-6 rounded-lg max-md:max-w-full max-md:mt-10">
          <thead>
            <tr className="flex w-full self-stretch justify-between gap-5 mt-4 pl-4 pr-7 py-3.5 rounded-lg max-md:max-w-full max-md:flex-wrap max-md:pr-5">
              {excelData.length &&
                Object.keys(excelData[0]).map((each, index) => (
                  <th
                    className={
                      "items-start pr-20 py-2 text-stone-800 text-sm capitalize font-semibold leading-normal" +
                      widthColumns[index]
                    }
                  >
                    {each}
                  </th>
                ))}
              <th className="items-start pr-20 py-2 text-stone-800 text-sm font-semibold leading-normal w-4/12">
                Selected tags
              </th>
            </tr>
          </thead>
          <tbody>
            {excelData.map((row) => (
              <TableRow row={row} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExcelData;
