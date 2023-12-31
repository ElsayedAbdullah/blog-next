"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Contact", path: "/contact" },
  { id: 4, title: "Blog", path: "/blog" },
];

function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  // Temporary
  const session = false;
  const isAdmin = false;

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContent}>
        <div className={styles.logo}>
          <Link href="/">Syd Dev</Link>
        </div>
        {open && (
          <ul className={styles.menu}>
            {links.map((link) => (
              <li className={styles.menuItem} key={link.id}>
                <Link
                  className={`${pathname === link.path && styles.active}`}
                  href={link.path}
                >
                  {link.title}
                </Link>
              </li>
            ))}

            {session ? (
              isAdmin && (
                <>
                  <li className={styles.menuItem}>
                    <Link
                      className={`${pathname === "/admin" && styles.active}`}
                      href="/admin"
                    >
                      Admin
                    </Link>
                  </li>
                  <button className={styles.logout}>Logout</button>
                </>
              )
            ) : (
              <li className={styles.menuItem}>
                <Link
                  className={`${pathname === "/login" && styles.active}`}
                  href="/login"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        )}

        <button className={styles.menuBtn} onClick={() => setOpen(!open)}>
          Menu
        </button>
      </div>
    </div>
  );
}

export default Navbar;
