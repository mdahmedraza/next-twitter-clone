import { FaceSmileIcon, PhotoIcon } from "@heroicons/react/24/solid";

export default function Input(){
    return(
        <div className="flex border-b border-gray-200 p-3 space-x-3">
            <img src="https://i.guim.co.uk/img/media/6ce509c71d8e1b4cb77ea6aec7e2eb408ad6e1f1/0_281_5568_3341/master/5568.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=073ab119eb7edfa1c8e89dacbc5ecff0" 
            alt='khabib' 
            className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
            />
            <div className="w-full divide-y divide-gray-200">
                <div className="">
                    <textarea className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700" rows="2" placeholder="what's happening..." />
                </div>
                <div className="flex items-center justify-between pt-2.5">
                    <div className="flex">
                        <PhotoIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                        <FaceSmileIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                    </div>
                    <button className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50">Tweet</button>
                </div>
            </div>
        </div>
    )
}