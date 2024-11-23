import React from 'react'
import Image from 'next/image'

import UserAvatar from './Avatar/UserAvatar.tsx'

const Sidebar = () => {
  //   const [searchValue, setSearchValue] = useState("");

  //   const handleSearchChange = (e) => {
  //     setSearchValue(e.target.value);
  //   };

  return (
    <div className="w-[14rem] h-screen bg-stamind-black-850 flex flex-col justify-between">
      <div className="px-[1rem]">
        <div className="py-[0.75rem]">
          <div className="flex items-center  justify-between">
            <UserAvatar />
            <div className="flex items-center  justify-center h-[1.75rem] w-[1.75rem] rounded-[0.375rem] hover:bg-[#2C2D3C] transition-all duration-500">
              <Image
                src="/images/Sidebar/sidebar.svg"
                width={14}
                height={14}
                alt="sidebar"
              />
            </div>
          </div>
          <div className="flex items-center  justify-between mt-[0.75rem] ">
            <input
              type="text"
              placeholder="Search..."
              className="w-[9.5rem] h-[1.3rem] bg-stamind-black-850 border border-transparent focus:border-primary-stamind-blue-800 focus:outline-none placeholder:text-[#9E9E9E] placeholder:text-[15px] caret-[#2058AF]"
            />
            <Image
              className=""
              src="/images/Sidebar/search-1.svg"
              width={16}
              height={16}
              alt="search"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="w-[5.75rem] h-[4.5rem] rounded-[0.25rem] border border-[#666666] flex flex-col justify-center items-center">
            <Image
              className="mb-[0.625rem]"
              src="/images/Sidebar/note.svg"
              width={16}
              height={16}
              alt="note"
            />
            <div className="text-[13px]">Note</div>
          </div>
          <div className="w-[5.75rem] h-[4.5rem] rounded-[0.25rem] border border-[#666666] flex flex-col justify-center items-center">
            <Image
              className="mb-[0.625rem]"
              src="/images/Sidebar/code.svg"
              width={16}
              height={16}
              alt="code"
            />
            <div className="text-[13px]">Code</div>
          </div>
        </div>
        <div className="mt-[1rem]">
          <div className="flex items-center justify-between w-[12rem] px-[0.5rem] py-[0.25rem]">
            <div className="flex items-center h-[1.5rem] w-[10.625rem] px-[0.5rem] text-[12px] text-[#9E9E9E] rounded-[0.375rem] hover:bg-[#2C2D3C] transition-all duration-500">
              Personal
            </div>
            <Image
              className="ms-[0.625rem]"
              src="/images/Sidebar/folder-add.svg"
              width={16}
              height={16}
              alt="folder"
            ></Image>
          </div>
          <div className="w-[12rem] h-[16rem] flex flex-col items-center justify-center ">
            <div>
              <div className="text-center text-[15px] font-normal leading-[22px] text-[#4D4F69]">
                Add a
              </div>
              <div className="text-[#4D4F69]">Note or Code</div>
              <Image
                src="/images/Sidebar/edit.svg"
                className="mx-auto"
                width={48}
                height={48}
                alt="edit"
              />
            </div>
          </div>
          {/* <div className="flex items-center space-x-1 px-[0.5rem] py-[0.25rem]">
            <Image src="/images/Sidebar/folder-fill.svg" width={16} height={16}></Image>
            <div>Folder Label</div>
            <ArrowDropDownIcon className="text-[#9E9E9E] text-[1.5rem]" />
          </div> */}
        </div>
      </div>

      <div className="flex items-center justify-between px-[1.4rem] pb-[1.4rem]">
        <Image
          src="/images/Sidebar/question.svg"
          width={16}
          height={16}
          alt="question"
        />
        <Image
          src="/images/Sidebar/three-dots.svg"
          width={16}
          height={16}
          alt="three-dots"
        />
        <Image
          src="/images/Sidebar/add-space.svg"
          width={16}
          height={16}
          alt="add-space"
        />
      </div>
    </div>
  )
}

export default Sidebar
