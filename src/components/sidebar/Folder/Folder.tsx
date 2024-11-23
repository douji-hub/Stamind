import Image from 'next/image'

const Folder = () => {
  return (
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
  )
}

export default Folder
