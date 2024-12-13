import style from "./PostCard.module.css"
import ButtonCard from "./ButtonCard";

function PostCard() {
    return (
        <div className={style.card}>
            <div className={style.img}>600 x 400</div>
            <div className={style.content}>
                <h4 className={style.title}>Titolo del Post</h4>
                <p className={style.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime facilis mollitia sed atque voluptate aliquid expedita perspiciatis inventore. Provident est molestias velit beatae odio dolorem quia deserunt dicta maxime enim?</p>
                <ButtonCard />
            </div>

        </div>
    )
}

export default PostCard;