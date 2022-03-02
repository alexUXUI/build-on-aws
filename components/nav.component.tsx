import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import cs from "classnames";
import styles from "../styles/Nav.module.css";
import config from "../config/nav.json";

const useViewportResize = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 700) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isMobile,
  };
};

type NavLink = {
  name: string;
  url: string;
};

// open close mobile hambuger icon
const Hamburger = ({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}) => {
  return (
    <svg
      className={styles.mobileNavButton}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      viewBox="0 0 100 80"
      width="40"
      height="40"
    >
      <rect width="100" height="10" y="10"></rect>
      <rect y="35" width="100" height="10"></rect>
      <rect y="60" width="100" height="10"></rect>
    </svg>
  );
};

export const Nav = () => {
  // ref to next router
  const router = useRouter();

  // highights the current link in the nav
  const selectedRoute = (route: string) => {
    return router.pathname === route ? styles.selected : "";
  };

  // checks the viewport to see if we're mobile or desktop
  const { isMobile } = useViewportResize();

  // state for the mobile nav menu
  const [isOpen, setIsOpen] = useState(false);

  // react ref to the nav menu
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // close the menu when we click outside of it
  const handleClickOutside = (e: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains((e as any).target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // close the menu when the user clicks the esc key
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  if (isMobile) {
    return (
      <nav ref={mobileMenuRef} className={styles.mobileNav}>
        <div className={styles.navHeader}>
          <h2 className={styles.navLogo}>
            <Link href="/">Build On AWS</Link>
          </h2>
          <Hamburger setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
        <div
          className={cs(styles.mobileMenu, {
            [styles.mobileNavOpen]: isOpen,
            [styles.mobileNavClosed]: !isOpen,
          })}
        >
          {isOpen ? (
            <ul className={styles.mobileNavLinks}>
              {config.nav.map((item: NavLink, index: number) => (
                <li key={index} className={styles.navItem}>
                  <a href={item.url} className={selectedRoute(item.url)}>
                    <h2>{item.name}</h2>
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </nav>
    );
  }

  return (
    <nav className={styles.desktopNav}>
      <ul>
        {config.nav.map((item: NavLink, index: number) => (
          <li key={index} className={styles.navItem}>
            <a href={item.url} className={selectedRoute(item.url)}>
              <h2>{item.name}</h2>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
