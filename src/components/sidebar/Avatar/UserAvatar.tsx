'use client'
import Avatar from '@mui/material/Avatar'

const UserAvatar = () => {
  return (
    <div className="flex px-[0.25rem] py-[0.4rem] w-[7.9375rem] rounded-[0.375rem] hover:bg-[#2C2D3C] transition-all duration-500 ">
      <Avatar alt="User Name" sx={{ width: 18, height: 18 }} />
      <div className="ms-[0.5rem] text-[0.8rem]">My Workspace</div>
    </div>
  )
}

export default UserAvatar
