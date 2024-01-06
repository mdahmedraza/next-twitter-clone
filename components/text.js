/*
what's new here..........
-(1)--------------------NEXTJS IMAGE PROPERTY-------------------------
-(2)-------------------ICON PATH ADDRESS STRANGE ERROR----------------------
-(3)----------------------USING HEROICONS--------------------------------
-(4)--------------------IDEA OF GIVING SIZE ON ICON OR IMAGE--------------------------------
-(5)-------------USING CLASSNAME WITH GLOBALS.CSS----------------------------------
-(6)------FOR ACTIVE STATE IN SIDEBAR............................
-(7)---------FOR SMALL DEVICE IF YOU WANT TO HID SPAN AND ONLY SHOW ICON.............
-(8)--------------------------BASIC BUTTON........................................
-(9)-----------SIDEBAR HIDDEN IN SMALL DEVICE.............................
-(10)-------------GIVE MARGIN LEFT ON FEED JUST BECAUSE OF FIXED POSTION OF SIDEBAR..........
-(11)------IF YOU WANT HTML STRUCTURE IN ALL BROWSER OR DEFATULT FORM.........
-(12)--------------LINE SPACING PROPERTY IN NEXT JS.....................
-(13)----------FOR CREATING NEWS SECTION IN RIGHT SIDE.....................
-(14)-------CREATING IF WE CLICK BUTTON WE GIVE MORE THREE NEWS IN REGHT SIDE..........
-(15)---------FOR CREATING USERS SECTION IN RIGHT SIDEBAR.......................
-(16)---IF YOUR TEXT IS OUT OF BUDGET THAN USE (TRUNCATE)...................


-(1)--------------------NEXTJS IMAGE PROPERTY-------------------------
1. import Image from 'next/image'-in 'Sidebar.js'

-(2)-------------------ICON PATH ADDRESS STRANGE ERROR----------------------
2. we get strange error in 'Sidebar.js' for image purpose and there is soln there..

-(3)----------------------USING HEROICONS--------------------------------
3. 'heroicons' completely compareable with 'tailwindcss' because they have same owner...
        visit 'heroicons.com' go to documents in this for 'react'....
        copy this line in terminal-'npm install @heroicons/react'...
        to use this process-
        import { BeakerIcon } from '@heroicons/react/24/solid'
        or
        <BeakerIcon className="h-6 w-6 text-blue-500" />

-(4)--------------------IDEA OF GIVING SIZE ON ICON OR IMAGE--------------------------------
4. there is no more style in images  at that time we can maintain size 
    of icons or images like this-
    for ex-
    in Sidebar.js....
    -<Image width='50' height='50' src="https://th.bing.com/th/id/OIP.7sZJ1IXnYSOhIBLGutxu-gHaFY?pid=ImgDet&rs=1"></Image>
    -<EllipsisHorizontalIcon className='h-5' />
    in SidebarMenuItems.js...
    -<Icon className='h-7' />

-(5)-------------USING CLASSNAME WITH GLOBALS.CSS----------------------------------
5. for hover effect in 'left sidebar' create a class and apply it in all
-define className='hoverEffect' and apply in Sidebar.js in div of 'twitter logo' or 'mini profile' or
in SidebarMenuItems.js component on div...
or in the globals.css....
@layer components{
  .hoverEffect{
    @apply cursor-pointer hover:bg-gray-200 rounded-full w-[52px] xl:w-auto h-[52px] xl:h-auto xl:p-3
  }
}

-(6)------FOR ACTIVE STATE IN SIDEBAR...............................
for active state in Sidebar.js-
 <SidebarMenuItems text="Home" Icon={HomeIcon} active />
 or in SidebarMenuItem.js-
 export default function SidebarMenuItems({text, Icon, active}){
    or
<span className={`${active&&"font-bold"}`}>{text}</span>

-(7)---------FOR SMALL DEVICE IF YOU WANT TO HID SPAN AND ONLY SHOW ICON.............
and in small screen for mobil if you want to hide 'span' and only show 'icons'..
in 'SidebarMenuItem.js'-
<span className={`${active&&"font-bold"} hidden xl:inline`}>{text}</span>

-(8)--------------------------BASIC BUTTON........................................
button ex-
<button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>
-or if you want that in samall screen it is hide available in this code...

what is this? -in index.js......
 <main className="flex min-h-screen max-w-7xl mx-auto">

 -(9)-----------SIDEBAR HIDDEN IN SMALL DEVICE.............................
if you want 'sidebar' is hidden in small device...
in Sidebar.js in top-
<div className="hidden sm:flex flex-col">
some more properties in this.
<div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">

-(10)-------------GIVE MARGIN LEFT ON FEED JUST BECAUSE OF FIXED POSTION OF SIDEBAR..........
just because of fixed position of sidebar give margin-left on feed 
like this- in Feed.js.
<div className="xl:ml-[370px]">
or
'flex-grow' from initial point to whole area of right..
or in detail..
<div className="xl:ml-[370px] border-l border-r xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">

-(11)------IF YOU WANT HTML STRUCTURE IN ALL BROWSER OR DEFATULT FORM.........
if you want your 'html' structure is same in different browser in google='tailwind css froms'
and go to 'tailwindlabs/tailwindcss-forms', scroll down and in terminal run the command-
'npm install -D @tailwindcss/forms' and then go to 'tailwind.config.js' and add something in
pluggins- 'plugins: [require('@tailwindcss/forms')],' and we run terminal we should see something
better in the form bydefault.

-(12)--------------LINE SPACING PROPERTY IN NEXT JS.....................
-'tracking-wide' it is just line spacing in text...


-(13)----------FOR CREATING NEWS SECTION IN RIGHT SIDE.....................
-for creating  a news section i rightbar 
    go to 'google' search 'news api saurav' and copy the link and in 'index.js'
    in bottom of 'index.js'..
    export async function getServerSideProps(){
      const newsResult=await fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/us.json")
      .then((res)=>res.json());
      return{
          props:{
          newsResult,
        }
      }
    }
and pass it in 'Widgets' component....
export default function Home({newsResult}){
or
<Widgets newsResults={newsResults.articles} />
or in 'Widgets.js'....
export default function Widgets({newsResults}){
or (checking purpose....)
{newsResults.map((article)=>(
  <p>{article.title}</p>
))}
or (instead)....
{newsResults.map((article)=>(
  <News key={article.title} article={article} />
))}

-(14)-------CREATING IF WE CLICK BUTTON WE GIVE MORE THREE NEWS IN REGHT SIDE..........
-for update 'news' by 'three'
in 'widgets' file...
import {useState} from 'react';
or
const [articleNum, setArticleNum]=useState(3);
or
{newsResults.slice(0, articleNum).map((article)=>(
or
<button onClick={()=>setArticleNum(articleNum+3)} className="text-blue-300 pl-4 pb-3 hover:text-blue-400">show more</button>

-(15)---------FOR CREATING USERS SECTION IN RIGHT SIDEBAR.......................
-in right sidebar for creating random users...
go to website 'random user generator' https://randomuser.me..
in side go to documentation copy link for ex-
https://randomuser.me/api/?results=5000
in 'index.js'...
export async function getServerSideProps(){
  const newsResults=await fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/us.json")
  .then((res)=>res.json());
  const randomUsersResults=await fetch("https://randomuser.me/api/?results=30&inc=name,login,picture")
  .then((res)=>res.json())
  return{
    props:{
      newsResults,
      randomUsersResults
    }
  }
}
or
export default function Home({newsResults, randomUsersResults}){
or
<Widgets newsResults={newsResults.articles} randomUsersResults={randomUsersResults.results} />
or in 'Widgets.js'...
export default function Widgets({newsResults, randomUsersResults}){

-(16)---IF YOUR TEXT IS OUT OF BUDGET THAN USE (TRUNCATE)...................
<div className="truncate ml-4 leading-5">
  <h4 className="font-bold hover:underline text-[14px] truncate">{randomUser.login.username}</h4>
  <h5 className="text-size-[13px] text-gray-500 truncate">{randomUser.name.first+" "+randomUser.name.last}</h5>
</div>
  
*/