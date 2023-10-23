import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <span>BLOG</span>
      </Link>
      <nav>
        <Link href="/about" target="_blank">
          About
        </Link>
        <hr></hr>
        <Link
          href={{
            pathname: "/obje",
            query: {
              name: "Next.js",
            },
            // If you would like to see suggestions about href object you can push Option + Esc on Mac, Alt + Esc on Windows.
          }}
        >
          Obje
        </Link>
      </nav>
    </header>
  );
}

export default Header;
