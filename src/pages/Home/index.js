import Baner from "componentes/Baner";
import Post from "componentes/Post";
import styles from './Home.module.css';
import posts from 'json/posts.json'
import Rodape from "componentes/Rodape";

export default function Home() {
    return(
        <main>
            <Baner/>
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post}/>
                    </li>
                ))}
            </ul>
            <Rodape/>
        </main>
    )
    
}