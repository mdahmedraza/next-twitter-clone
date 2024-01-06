import { SparklesIcon } from "@heroicons/react/24/solid";
import Input from '../components/Input'
import Post from '../components/Post'

export default function Feed(){
    const posts=[
        {
            id: "1",
            name: "Khabib Nurmagomedov",
            username: "khabib_ufc-32",
            userImg: "https://i.guim.co.uk/img/media/6ce509c71d8e1b4cb77ea6aec7e2eb408ad6e1f1/0_281_5568_3341/master/5568.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=073ab119eb7edfa1c8e89dacbc5ecff0",
            img: "https://wallpaperaccess.com/full/1896598.jpg",
            text: "what a punch!",
            timestamp: "2 hours ago"
        },
        {
            id: "2",
            name: "Khabib Nurmagomedov",
            username: "khabib_ufc-32",
            userImg: "https://i.guim.co.uk/img/media/6ce509c71d8e1b4cb77ea6aec7e2eb408ad6e1f1/0_281_5568_3341/master/5568.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=073ab119eb7edfa1c8e89dacbc5ecff0",
            img: "https://statics.sportskeeda.com/editor/2019/10/c894b-15711782907290-800.jpg",
            text: "i am ready!",
            timestamp: "3 hours ago"
        },
        {
            id: "3",
            name: "Khabib Nurmagomedov",
            username: "khabib_ufc-32",
            userImg: "https://i.guim.co.uk/img/media/6ce509c71d8e1b4cb77ea6aec7e2eb408ad6e1f1/0_281_5568_3341/master/5568.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=073ab119eb7edfa1c8e89dacbc5ecff0",
            img: "https://i.guim.co.uk/img/media/6ce509c71d8e1b4cb77ea6aec7e2eb408ad6e1f1/0_281_5568_3341/master/5568.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=073ab119eb7edfa1c8e89dacbc5ecff0",
            text: "the believer!",
            timestamp: "5 hours ago"
        },
        {
            id: "4",
            name: "Khabib Nurmagomedov",
            username: "khabib_ufc-32",
            userImg: "https://i.guim.co.uk/img/media/6ce509c71d8e1b4cb77ea6aec7e2eb408ad6e1f1/0_281_5568_3341/master/5568.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=073ab119eb7edfa1c8e89dacbc5ecff0",
            img: "https://besthqwallpapers.com/Uploads/8-10-2019/107839/thumb2-khabib-nurmagomedov-ufc-russian-ufc-fighter-portrait-gray-stone-background.jpg",
            text: "the champion!",
            timestamp: "6 hours ago"
        },
        {
            id: '5',
            name: 'firon',
            username: 'firon image',
            userImg: 'https://th.bing.com/th/id/OIP.zGXlvZDe_geUNCx2BuPgYgHaE6?pid=ImgDet&rs=1',
            img: 'https://th.bing.com/th/id/OIP.zGXlvZDe_geUNCx2BuPgYgHaE6?pid=ImgDet&rs=1',
            text: 'the firon',
            timestamp: '4 hrs ago'
        }
    ]
    return(
        <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
            <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
                <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
                <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                    <SparklesIcon className='h-5' />
                </div>
            </div>
            <Input />
            {posts.map((post)=>(
                <Post key={post.id} post={post} />
            ))}
        </div>
    )
}