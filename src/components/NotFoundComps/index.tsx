"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./NotFound.module.css";

export default function NotFoundComp() {
  const router = useRouter();
  
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);

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
    </div>
  );
}
