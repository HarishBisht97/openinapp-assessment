import React, { useState } from "react";

const TableRow = ({ row }) => {
  const [tags, setTags] = useState([]);
  console.log("row", row);
  const tagsList = row["select tags"].split(", ");
  console.log("tagsList", tagsList);

  const handleSelectChange = (event) => {
    const selectedTag = event.target.value;
    if (!tags.includes(selectedTag)) {
      setTags([...tags, selectedTag]);
    }
  };

  return (
    <div className="bg-white self-stretch flex w-full items-start justify-between gap-5 mt-4 pl-4 pr-7 py-3.5 rounded-lg max-md:max-w-full max-md:flex-wrap max-md:pr-5">
      <div className="items-start text-stone-800 text-sm leading-6 whitespace-nowrap my-auto w-1/12">
        {row.id}
      </div>
      <div className="items-start text-blue-400 text-sm leading-6 underline my-auto w-3/12 ">
        {row.links}
      </div>
      <div className="items-start text-stone-800 text-sm leading-6 self-center my-auto w-2/12 ">
        {row.prefix}
      </div>
      <div className="items-start border border-[color:var(--Light-Beerus-Beerus,#F2F2F2)] bg-white  flex gap-3 px-6 py-1 rounded-lg border-solid max-md:px-5 w-2/12">
        <select
          className="text-stone-800 text-sl leading-6"
          onChange={handleSelectChange}
        >
          {tagsList.map((each) => (
            <option value={each}>{each}</option>
          ))}
          <option value="" selected>
            Select Tags
          </option>
        </select>
      </div>
      <div className="items-start content-start flex-wrap self-center flex gap-2 my-auto w-4/12">
        {tags.map((tag) => (
          <div className="items-stretch rounded bg-indigo-500 flex justify-between gap-1 px-1.5 py-1">
            <div className="text-white text-center text-xs font-semibold leading-4 tracking-wide uppercase grow whitespace-nowrap">
              {tag}
            </div>
            <img
              loading="lazy"
              alt="table-img"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2223a295739638cc7088e29ed4b7027de98ed94ce4bfefc14839c04f6b0adec7?"
              className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableRow;
