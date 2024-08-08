import { Header } from "./components/Header";
import { Post } from "./components/Post";
import styles from "./App.module.css";

import "../src/global.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Header></Header>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nostrum accusantium voluptatibus aspernatur? Vero earum optio culpa repudiandae, vel tenetur ipsam nostrum alias dolores inventore dignissimos qui, pariatur non corrupti."
          ></Post>

          <Post
            author="Gabriel Buzzi"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nostrum accusantium voluptatibus aspernatur? Vero earum optio culpa repudiandae, vel tenetur ipsam nostrum alias dolores inventore dignissimos qui, pariatur non corrupti."
          ></Post>
        </main>
      </div>
    </>
  );
}

export default App;
