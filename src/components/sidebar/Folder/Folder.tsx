'use client'

import { useState } from 'react'

import Image from 'next/image'

interface Folder {
  id: number
  name: string
}

const Folder = () => {
  const [folderList, setfolderList] = useState<Folder[]>([])

  function addFolder() {
    const newFolder: Folder = {
      id: folderList.length + 1,
      name: '',
    }
    setfolderList([...folderList, newFolder])
  }

  return (
    <>
      <div className="flex items-center justify-between w-[12rem] px-[0.5rem]">
        <div className="flex items-center h-[1.5rem] w-[10.625rem] px-[0.5rem] text-[12px] text-[#9E9E9E] rounded-[0.375rem] hover:bg-[#2C2D3C] transition-all duration-500">
          Personal
        </div>
        <Image
          className="ms-[0.625rem]"
          src="/images/Sidebar/folder-add.svg"
          width={16}
          height={16}
          alt="folder"
          onClick={addFolder}
        ></Image>
      </div>
      {folderList.map(() => (
        <div className="flex items-center  w-[12rem] h-[1.6875rem] px-[0.5rem] ">
          <div className="flex items-center  w-[8rem] h-[1.125rem] ms-[0.375rem]">
            <Image
              src="/images/Sidebar/folder-fill.svg"
              width={16}
              height={16}
              alt="folder"
              onClick={addFolder}
            ></Image>
            <div className=" w-[4.8125rem] mx-[0.5rem] text-[13px] text-[#9E9E9E] rounded-[0.375rem] hover:bg-[#2C2D3C] transition-all duration-500">
              Folder Label
            </div>
            <Image
              src="/images/Sidebar/add-space.svg"
              width={7}
              height={6}
              alt="folder"
              onClick={addFolder}
            ></Image>
          </div>
        </div>
      ))}
    </>
  )
}

export default Folder
