import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import News from "./News";
import {useState} from 'react';

export default function Widgets({newsResults, randomUsersResults}){
    const [articleNum, setArticleNum]=useState(3);
    const [randomUserNum, setRandomUserNum]=useState(3);
    return(
        <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
            <div className="w-[90%] xl:w-[75%] sticky top-0 b-white py-1.5 z-50">
                <div className="flex items-center p-3 rounded-full bg-red-300 relative">
                    <MagnifyingGlassIcon className="h-5 z-50 text-gray-500" />
                    <input className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:gb-white bg-gray-100" type="text" placeholder="search twitter" />
                </div>
            </div>
            <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
                <h4 className="font-bold text-xl px-4">what's happening.....</h4>
                {/*{newsResults.map((article)=>(*/}
                {newsResults.slice(0, articleNum).map((article)=>(
                    <News key={article.title} article={article} />
                ))}
                <button onClick={()=>setArticleNum(articleNum+3)} className="text-blue-300 pl-4 pb-3 hover:text-blue-400">show more</button>
            </div>
            <div className="sticky top-16 text-gray-700 space-y-3 bg-gray-100 pt-2 rounded-xl w-[90%] xl:w-[75%]">
                <h4 className="font-bold text-xl px-4">who to follow</h4>
                {/*{randomUsersResults.map((randomUser)=>(*/}
                {/*{randomUsersResults.slice(0, 3).map((randomUser)=>(*/}
                {randomUsersResults.slice(0, randomUserNum).map((randomUser)=>(
                    <div key={randomUser.login.username} className="flex  items-center px-4 py-2 cursor-pointer hover:bg-gray-200">
                        <img className="rounded-full" width="40" src={randomUser.picture.thumbnail} alt="picture" />
                        <div className="truncate ml-4 leading-5">
                            <h4 className="font-bold hover:underline text-[14px] truncate">{randomUser.login.username}</h4>
                            <h5 className="text-size-[13px] text-gray-500 truncate">{randomUser.name.first+" "+randomUser.name.last}</h5>
                        </div>
                        <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">Follow</button>
                    </div>
                ))}
                <button onClick={()=>setRandomUserNum(randomUserNum+3)} className="text-blue-300 pl-4 pb-3 hover:textblue-400">show more</button>
            </div>
        </div>
    )
}