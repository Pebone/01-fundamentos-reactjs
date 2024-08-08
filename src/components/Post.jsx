import styles from "./Post.module.css";
import { Comment } from "../components/Comment";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src="https://github.com/pebone.png" />
            <div className={styles.authorInfo}>
              <strong>Davi Pereira</strong>
              <span>Web Developer</span>
            </div>
          </div>
          <time title="08 de agosto de 2024" dateTime="2024-08-08">
            Publicado há 1h
          </time>
        </header>

        <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>
          <p>
            <a href="#">👉 jane.design/doctorcare</a>
          </p>
          <p>
            <a href="#">#novoprojeto</a> <a>#nlw</a> <a>#rocketseat</a>
          </p>
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea placeholder="Deixe um comentário" />

          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>
    </>
  );
}
