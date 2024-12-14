import style from "./AppMain.module.css";
import PostCard from "./PostCard";
import posts from "../data";
function AppMain() {

    function PrintPost() {
        return posts.map((curPost) => (
            curPost.published &&
            <PostCard
                image={curPost.image}
                title={curPost.title}
                content={curPost.content}
                tags={curPost.tags}
            />
        ))
    }

    function listTags() {
        const listTag = []

        posts.forEach((curPost) => {
            curPost.tags.forEach((curTag) => {
                if (!listTag.includes(curTag)) {
                    listTag.push(curTag)
                }
            })

        })
        return listTag.join(" ")
    }
    return (
        <div className="container">
            <section className={style.text}>
                <PrintPost />
            </section>
            <section>
               Lista Tag : {listTags()}
            </section>
        </div>
    )
}

export default AppMain;