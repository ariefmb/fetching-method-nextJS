import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <ul className="flex flex-wrap gap-5">
        <li className="font-bold cursor-pointer px-3 py-1 text-white w-fit rounded-lg hover:drop-shadow-[0_0_7px_white] duration-200 ease-in-out active:hover:drop-shadow-[0_0_15px_white]">
          <Link href="/">Home</Link>
        </li>
        <li className="font-bold cursor-pointer px-3 py-1 text-white w-fit rounded-lg hover:drop-shadow-[0_0_7px_white] duration-200 ease-in-out active:hover:drop-shadow-[0_0_15px_white]">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="font-bold cursor-pointer px-3 py-1 text-white w-fit rounded-lg hover:drop-shadow-[0_0_7px_white] duration-200 ease-in-out active:hover:drop-shadow-[0_0_15px_white]">
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
