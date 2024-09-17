import Typing from "../component/typed"
import { useLoading } from "../utils/loader"
import Skeleton from "react-loading-skeleton"
export default function About() {
    const isLoading = useLoading()
    return (
        <>
            <div className="container my-10">
               {isLoading ? <Skeleton width={500} height={30} count={10} containerClassName="container mt-16"/> : 
                <div className="content mt-24 mb-10  max-w-2xl">
                        <Typing />
                    <h3 className="mb-5 text-xl">
                        Voldeblog is a home for human stories and ideas. Here, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world—without building a mailing list or a following first. The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right audience for whatever you have to say.
                    </h3>


                    <h3 className="text-xl"> We believe that what you read and write matters. Words can divide or empower us, inspire or discourage us. In a world where the most sensational and surface-level stories often win, we’re building a system that rewards depth, nuance, and time well spent. A space for thoughtful conversation more than drive-by takes, and substance over packaging
                    </h3>
                </div>}
            </div>
        </>
    )
}