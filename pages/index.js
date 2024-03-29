
import Sidebar from "../components/Sidebar"
import Feed from '../components/Feed'
import Widgets from "@/components/Widgets"

export default function Home({newsResults, randomUsersResults}){
  return(
    <div>
      <main className="flex min-h-screen mx-auto">
        {/*sidebar*/}
        <Sidebar />
        {/*feed*/}
        <Feed />
        {/*widgets*/}
        <Widgets newsResults={newsResults.articles} randomUsersResults={randomUsersResults.results} />
        {/*modal*/}
      </main>
    </div>
  )
}
/*
export async function getServerSideProps(){
  const newsResults=await fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/us.json")
  .then((res)=>res.json());
  return{
    props:{
      newsResults,
    }
  }
}
*/
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