import { ChartBarIcon, ChatBubbleBottomCenterIcon, EllipsisHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function Post({post}){
    return(
        <div className="flex p-3 cursor-pointer border-b border-gray-200">
            {/*user image */}
            <img className="h-11 w-11 rounded-full mr-4" src={post.userImg} alt="user-img" />
            {/*right side */}
            <div className="">
                {/*header */}
                <div className="flex items-center justify-between">
                    {/*post user info */}
                    <div className="flex space-x-1 items-center whitespace-nowrap">
                        <h4 className="font-bold text-size-[15px] sm:text-[16px] hover:underline">{post.name}</h4>
                        <span className="text-sm sm:text-[15px]">@{post.username}</span>
                        <span className="text-sm sm:text-[15px] hover:underline">{post.timestamp}</span>
                    </div>
                    {/*dot icon */}
                    <EllipsisHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2" />
                </div>
                {/*post text */}
                <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">{post.text}</p>
                {/*post image */}
                <img className="rounded-2xl mr-2" src={post.img} alt="image" />
                {/*icons */}
                <div className="flex justify-between text-gray-500 p-2">
                    <ChatBubbleBottomCenterIcon className="h-9 w-9 hoverEffect p-2 hover:text-blue-500 hover:bh-blue-100" />
                    <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bh-red-100" />
                    <HeartIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bh-red-100" />
                    <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bh-sky-100" />
                    <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bh-sky-100" />
                </div>
            </div>
            
        </div>
        
        
    )
}