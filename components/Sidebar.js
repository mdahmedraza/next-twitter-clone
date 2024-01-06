import Image from 'next/image'
import SidebarMenuItems from './SidebarMenuItems'
import { HomeIcon, EllipsisHorizontalIcon, HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, ClipboardIcon, UserIcon, EllipsisHorizontalCircleIcon } from '@heroicons/react/24/solid'

export default function Sidebar(){
    return(
        <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
            {/*twitter logo */}
            <div className="hoverEffect">
                <Image width='50' height='50' src="https://clipground.com/images/twitter-logo-clipart-9.jpg"></Image>
            {/*Error: Invalid src prop (https://clipground.com/images/twitter-logo-clipart-9.jpg) on `next/image`,
             hostname "clipground.com" is not configured under images in your `next.config.js`
            See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host
             soln is-
             go to next.config.js file, and add domain here for ex-
             const nextConfig = {
                reactStrictMode: true,
                images:{
                domains:["clipground.com"]
                }
            }
            so when we change something in this file we need to restart the server..
             */}
            </div>
            {/*menu */}
            <div className="">
                <SidebarMenuItems text="Home" Icon={HomeIcon} active />
                <SidebarMenuItems text="Explore" Icon={HashtagIcon} />
                <SidebarMenuItems text="Notification" Icon={BellIcon} />
                <SidebarMenuItems text="Messages" Icon={InboxIcon} />
                <SidebarMenuItems text="Bookmarks" Icon={BookmarkIcon} />
                <SidebarMenuItems text="Lists" Icon={ClipboardIcon} />
                <SidebarMenuItems text="Profile" Icon={UserIcon} />
                <SidebarMenuItems text="More" Icon={EllipsisHorizontalCircleIcon} />
            </div>
            {/*button*/}
            <button className="bg-blue-400 text-white rounded-full w-40 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>
            {/*mini profile */}
            <div className="hoverEffect text-gray-700 items-center justify-center xl:justify-start mt-auto">
                <img src="https://i.guim.co.uk/img/media/6ce509c71d8e1b4cb77ea6aec7e2eb408ad6e1f1/0_281_5568_3341/master/5568.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=073ab119eb7edfa1c8e89dacbc5ecff0" 
                alt='person' 
                className="h-10 w-10 rounded-full xl:mr-2"/>
                
                <div className='leading-5 hidden xl:inline'>
                    <h4 className="font-bold">khabib nurmagomedov</h4>
                    <p className="text-gray-500">@khabibnurmagomedov</p>
                </div>
                <EllipsisHorizontalIcon className='h-5 xl:ml-8 hidden xl:inline' />
            </div>
        </div>
    )
}