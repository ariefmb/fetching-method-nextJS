"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "@/components/Text/Text.module.css";
import cardStyles from "@/components/Card/Card.module.css";

interface UserProps {
  dataUsers: Array<any>;
}

const Card = (props: UserProps) => {
  const { dataUsers } = props;
  const router = useRouter();

  return (
    <div className={cardStyles.wrapper}>
      <ul className={`text-xl ${styles.container}`}>
        {dataUsers.map((user: any) => (
          <div
            key={user.id}
            onClick={() => router.push(`/users/${user.id}`)}
            className={cardStyles.card}
          >
            <li>
              <p className="font-bold">{user.name}</p>
              <p>{user.email}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Card;
