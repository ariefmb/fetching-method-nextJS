import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <ul className="flex flex-wrap gap-5">
        <li className="font-bold cursor-pointer p-3 text-white w-fit rounded-2xl hover:bg-red-400 duration-200 ease-in-out active:bg-red-600">
          <Link href="/">Home</Link>
        </li>
        <li className="font-bold cursor-pointer p-3 text-white w-fit rounded-2xl hover:bg-red-400 duration-200 ease-in-out active:bg-red-600">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="font-bold cursor-pointer p-3 text-white w-fit rounded-2xl hover:bg-red-400 duration-200 ease-in-out active:bg-red-600">
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
