import style from "./PostCard.module.css"
import ButtonCard from "./ButtonCard";

function PostCard({title, image, content, tags, published}) {
    return (
        <div className={style.card}>
            <div className={style.img}>{
                image ? (<img src={image} alt="" />) : ' Nessun immagine'
            }</div>

            <div className={style.content}>
                <h4 className={style.title}>{title} <span className={tags[0]}>{tags[0]}</span> <span className={tags[1]}>{tags[1]}</span></h4>
                <p className={style.description}>{content}</p>
                <ButtonCard />
            </div>

        </div>
    )
}

export default PostCard;