import Link from "next/link";

const Header = () => {
  return (
    <header>
      <ul className="flex flex-wrap gap-5 ml-44 mt-10">
        <li className="text-black font-bold cursor-pointer p-3 bg-red-200 w-fit rounded-2xl hover:bg-red-400 duration-200 ease-in-out active:bg-red-600">
          <Link href="/">Home</Link>
        </li>
        <li className="text-black font-bold cursor-pointer p-3 bg-red-200 w-fit rounded-2xl hover:bg-red-400 duration-200 ease-in-out active:bg-red-600">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="text-black font-bold cursor-pointer p-3 bg-red-200 w-fit rounded-2xl hover:bg-red-400 duration-200 ease-in-out active:bg-red-600">
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
