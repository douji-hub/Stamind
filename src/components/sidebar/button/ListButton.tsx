'use client'
import { useState } from 'react'

import Image from 'next/image'

const ListButton = () => {
  const [ListState, setListState] = useState<boolean>(false)

  const list: Array<{ image: string; name: string }> = [
    {
      image: '/images/Sidebar/Duplicate.svg',
      name: 'Rename',
    },
    {
      image: '/images/Sidebar/Duplicate.svg',
      name: 'Duplicate',
    },
    {
      image: '/images/Sidebar/Duplicate.svg',
      name: 'Color & Icon',
    },
    {
      image: '/images/Sidebar/arrow-move.svg',
      name: 'Move',
    },
    {
      image: '/images/Sidebar/trash.svg',
      name: 'Delete',
    },
    {
      image: '/images/Sidebar/Duplicate.svg',
      name: 'Share',
    },
  ]

  const handleClick = () => {
    setListState(!ListState)
  }

  return (
    <div
      className="relative flex items-center justify-center h-[1.5rem] w-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      onClick={handleClick}
    >
      <Image
        className=""
        src="/images/Sidebar/three-dots.svg"
        width={14}
        height={14}
        alt="folder"
      ></Image>
      <div
        className={`absolute top-[50%] left-[50%]  w-[8rem] h-[14.5rem] bg-stamind-grey-400 rounded-[0.5rem] transition-opacity duration-300 ${ListState ? 'opacity-100' : 'opacity-0 '} `}
      >
        {list.map((item: { image: string; name: string }, index: number) => (
          <>
            <div
              key={index}
              className="flex flex-col items-center  w-[7rem] h-[2rem] pt-[0.5rem] pl-[0.5rem] pb-[0.5rem] pr-[1.5rem]"
            >
              <div className="flex items-center justify-between w-[4.875rem] h-[1rem]">
                <Image
                  className=""
                  src={item.image}
                  width={14}
                  height={14}
                  alt={item.name}
                ></Image>
                <div className="w-[3rem] text-[13px] text-nowrap">
                  {item.name}
                </div>
              </div>
            </div>
            {(index == 2 || index == 4) && (
              <div className="flex justify-center items-center w-[7rem] h-[1rem]">
                <div className="w-[5.875rem] opacity-[0.1] border-t border-gray-300 border-[0.5px] "></div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  )
}

export default ListButton
