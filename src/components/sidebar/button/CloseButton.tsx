'use client'

import Image from 'next/image'

interface CloseButtonProps {
  onHandleClick: () => void
}

const CloseButton: React.FC<CloseButtonProps> = ({ onHandleClick }) => {
  const handleClick = () => {
    onHandleClick()
  }

  return (
    <div className="flex items-center  justify-center h-[1.75rem] w-[1.75rem] rounded-[0.375rem] hover:bg-[#2C2D3C] transition-all duration-500">
      <Image
        src="/images/Sidebar/sidebar.svg"
        width={14}
        height={14}
        alt="sidebar"
        onClick={handleClick}
      />
    </div>
  )
}

export default CloseButton
