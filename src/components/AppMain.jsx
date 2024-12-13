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
        tags={curPost.tags.join(" ")}
        />
    ))
}

    return (
        <div className="container">
            <section className={style.text}>
                <PrintPost />
            </section>

        </div>
    )
}

export default AppMain;