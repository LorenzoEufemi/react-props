import style from "./AppMain.module.css";
import PostCard from "./PostCard";

function AppMain() {

    return (
        <div className="container">
            <section className={style.text}>
                <PostCard />
            </section>

        </div>
    )
}

export default AppMain;