import styles from "./Comicimage.module.css";
export function ComicsImage({datos}){

    console.log(styles);
    const imageUrl ="https://image.tmdb.org/t/p/w300" + datos.poster_path

    return ( 
        
        <li className={styles.datoscad}>
        <img 
        width={230} 
        hwight={345}
        
        className={styles.comicimages} 
        src={imageUrl}
        alt={datos.title}
        />
        <div>{datos.title}</div>
        <div>{datos.overview}</div>
        <div>{datos.authors}</div>
        <div>{datos.release_date}</div>

        </li>
    );

}