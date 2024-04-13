import Link from "next/link";
import styles from "./NotFound.module.css";

const NotFoundComp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>404</h3>
        <p>|</p>
        <div className={styles.ops}>
          <h2 className="text-7xl">OOPSS..!!</h2>
          <p className="text-3xl">Page Not Found</p>
        </div>
      </div>
      <button className="hover:drop-shadow-[0_0_10px_white] duration-200 ease-in-out">
        <Link href="/"><span className={styles.arrow}>&lt;-</span> Back to Home Page</Link>
      </button>
    </div>
  );
};

export default NotFoundComp;
