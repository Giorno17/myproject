import datos from "./datos.json"
import { ComicsImage } from "./ComicsImage";
import styles from "./comicss.module.css"
export function Comics(){
    return (
        <ul className={styles.comicgrid}>
            {datos.map((datos) => (
                <ComicsImage key={datos.id} datos={datos} />
            ))}

        </ul>
    );
}