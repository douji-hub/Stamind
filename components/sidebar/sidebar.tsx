import React from "react";
import Avatar from "@mui/material/Avatar";

import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import SearchIcon from "@mui/icons-material/Search";

import ArticleIcon from "@mui/icons-material/Article";
import CodeIcon from "@mui/icons-material/Code";
import FolderIcon from "@mui/icons-material/Folder";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

const Sidebar = () => {
  //   const [searchValue, setSearchValue] = useState("");

  //   const handleSearchChange = (e) => {
  //     setSearchValue(e.target.value);
  //   };

  return (
    <div className="w-[14rem] h-screen bg-black-stamind-black-850 flex flex-col justify-between">
      <div className="px-[1rem]">
        <div className="py-[0.75rem]">
          <div className="flex items-center  justify-between">
            <div className="flex py-[0.4rem] w-[7.9375rem]">
              <Avatar
                alt="User Name"
                src="/testUser.jpeg"
                sx={{ width: 18, height: 18 }}
              />
              <div className="ms-[0.5rem] text-[0.8rem]">My Workspace</div>
            </div>
            <FormatAlignLeftIcon className="text-[0.8rem]" />
          </div>
          <div className="flex items-center  justify-between mt-[0.75rem] ">
            <input
              type="text"
              placeholder="Search..."
              className="w-[9.5rem] h-[1.3rem] bg-black-stamind-black-850 border border-transparent focus:border-primary-stamind-blue-800 focus:outline-none placeholder:text-[#9E9E9E] placeholder:text-[15px]"
            />
            <SearchIcon className="text-[#9E9E9E] text-[0.9rem]" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="w-[5.75rem] h-[4.5rem] rounded-[0.25rem] border border-[#666666] flex flex-col justify-center items-center">
            <ArticleIcon className="text-[#9E9E9E]" />
            <div className="text-[13px]">Note</div>
          </div>
          <div className="w-[5.75rem] h-[4.5rem] rounded-[0.25rem] border border-[#666666] flex flex-col justify-center items-center">
            <CodeIcon className="text-[#9E9E9E]" />
            <div className="text-[13px]">Code</div>
          </div>
        </div>
        <div className="mt-[1rem]">
          <div className="flex items-center justify-between px-[0.5rem] py-[0.25rem]">
            <div className="text-[12px] text-[#9E9E9E] ">Personal</div>
            <FolderIcon className="text-[#9E9E9E] text-[1rem]" />
          </div>
          <div className="flex items-center space-x-1 px-[0.5rem] py-[0.25rem]">
            <FolderIcon className="text-[#9E9E9E] text-[1.2rem]" />
            <div>Folder Label</div>
            <ArrowDropDownIcon className="text-[#9E9E9E] text-[1.5rem]" />
          </div>
          <div className="flex items-center space-x-1 py-[0.34rem] ps-[1.5rem]">
            <ArticleIcon className="text-[#9E9E9E]" />
            <div>Folder Label</div>
          </div>
          <div className="flex items-center space-x-1 py-[0.34rem] ps-[1.5rem]">
            <ArticleIcon className="text-[#9E9E9E]" />
            <div>Folder Label</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-[1rem] pb-[1rem]">
        <ContactSupportIcon className="text-[#9E9E9E] text-[1rem]" />
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
        </div>
        <LibraryAddIcon className="text-[#9E9E9E] text-[1rem]" />
      </div>
    </div>
  );
};

export default Sidebar;
