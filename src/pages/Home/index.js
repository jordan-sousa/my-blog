import Post from "componentes/Post";
import styles from './Home.module.css';
import posts from 'json/posts.json'

export default function Home() {
    return( 
        <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <Post post={post}/>
                </li>
            ))}
        </ul>       
    )
    
}