import { Comics } from "./Comics";
import styles from "./App.module.css"
import Osoo1 from "./assets/img/Osoo1.png"

export function App(){
    return (
        <div>
            <header>
                <h1 className={styles.title}>BEAR COMICS & MOVIES</h1>
            </header>
        <div className={styles.imageContainer}>
            <img src={Osoo1} width="300" height="290"  alt="Bear" className={styles.image} >
            </img>
        </div>
            <main>
                <Comics/>
            </main>
            
            
            </div>
    );
}