"use client";

import React, { useState, useEffect } from "react";
import * as StyleX from "@stylexjs/stylex";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";

const styles = StyleX.create({
  centerChild: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navBar: {
    height: "10vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: {
      default: 0,
      "@media (max-width: 431px)": 999,
      "@media (max-width: 768px)": 999,
    },
    width: "90%",
  },
  logoDiv: {
    width: "30%",
    height: "100%",
  },
  logo: {
    width: {
      default: "200px",
      "@media (max-width: 768px)": "140px",
      "@media (max-width: 431px)": "100px",
    },
    height: "100%",
  },
  menuIcon: {
    display: {
      default: "none",
      "@media (max-width: 768px)": "flex",
    },
    float: "right",
  },
  closeIcon: {
    padding: "15px 10px",
    display: {
      default: "none",
      "@media (max-width: 768px)": "flex",
    },
  },
  navItems: (current, path) => ({
    fontSize: {
      default: 16,
      "@media (max-width: 431px)": "12px",
      "@media (max-width: 768px)": "14px",
    },
    fontWeight: "600",
    color: {
      default: current == path ? "#1a1a1a" : "#1a1a1a",
      ":hover": "#1a1a1a",
    },
    transition: "0.3s ease",
    cursor: "pointer",
    justifyContent: {
      default: "space-between",
      "@media (max-width: 768px)": "center",
      "@media (max-width: 431px)": "center",
    },
    alignItems: "center",
  }),
  tabsCon: {
    height: {
      default: "100%",
      "@media (max-width: 431px)": "30%",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: {
      default: "row",
      "@media (max-width: 768px)": "column",
    },
    padding: "10px 0",
    gap: 40,
  },
  loginBtn: {
    padding: "10px",
    fontSize: {
      default: 16,
      "@media (max-width: 768px)": "14px",
      "@media (max-width: 431px)": "10px",
    },
    fontWeight: "600",
    borderRadius: 50,
    transition: "0.5s ease",
    cursor: "pointer",
    color: "#1a1a1a",
    background: {
      default: "#fff",
      ":hover": "#d3d3d340",
    },
    display: "flex",
    alignItems: "center",
    gap: 4,
    border: "1px solid #d3d3d3",
    width: "100px",
    justifyContent: "center",
  },
  nav: (show) => ({
    display: "flex",
    flexDirection: {
      default: "row",
      "@media (max-width: 768px)": "column",
    },
    position: {
      default: "relative",
      "@media (max-width: 768px)": "fixed",
    },
    top: {
      default: 0,
      "@media (max-width: 768px)": show ? 0 : "-100%",
    },
    right: 0,
    zIndex: 11,
    width: {
      "@media (max-width: 431px)": "100%",
      "@media (max-width: 768px)": "100%",
    },
    height: "auto",
    backgroundColor: {
      default: "transparent",
      "@media (max-width: 768px)": "#fff",
    },
    transition: "0.5s ease-out",
    padding: 0,
    margin: 0,
    boxShadow: {
      default: "none",
      "@media (max-width: 768px)": "0 0 20px 0 #999",
    },
  }),
  logoText: {
    color: "#000",
    textDecoration: "none",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    fontSize: 32,
  },
});

const Navbar = () => {
  const router = useRouter();
  const path = usePathname();

  const [menuVisible, setMenuVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#fff",
          zIndex: 9,
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          boxShadow: "0 0 10px 5px #d3d3d360",
        }}
      >
        <div {...StyleX.props(styles.navBar)}>
          <Link href='/' {...StyleX.props(styles.logoText)}>
            My Saloon
          </Link>
          <input
            type='checkbox'
            id='sidebar-active'
            style={{ display: "none" }}
            onChange={toggleMenu}
          />
          <label htmlFor='sidebar-active' {...StyleX.props(styles.menuIcon)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='35'
              viewBox='0 -960 960 960'
              width='35'
            >
              <path
                d='M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z'
                fill='#000'
              />
            </svg>
          </label>
          <ul {...StyleX.props(styles.nav(menuVisible))}>
            <label htmlFor='sidebar-active' {...StyleX.props(styles.closeIcon)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='35'
                viewBox='0 -960 960 960'
                width='35'
              >
                <path
                  d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z'
                  fill='#000'
                />
              </svg>
            </label>
            <div {...StyleX.props(styles.tabsCon)}>
              <div
                {...StyleX.props(
                  styles.navItems(path, "/"),
                  styles.centerChild
                )}
                onClick={() => router.replace("/")}
              >
                Home
              </div>

              <div
                {...StyleX.props(
                  styles.navItems(path, "/service"),
                  styles.centerChild
                )}
                onClick={() => router.replace("/service")}
              >
                Service
              </div>
              <div
                {...StyleX.props(
                  styles.navItems(path, "/contact"),
                  styles.centerChild
                )}
                onClick={() => router.replace("/contact")}
              >
                Contact
              </div>
              <div
                {...StyleX.props(
                  styles.navItems(path, "/about"),
                  styles.centerChild
                )}
                onClick={() => router.replace("/about")}
              >
                About
              </div>
              <div
                {...StyleX.props(
                  styles.navItems(path, "/saloon"),
                  styles.centerChild
                )}
                onClick={() => router.replace("/saloon")}
              >
                Saloon
              </div>
              <div
                {...StyleX.props(
                  styles.navItems(path, "/appointment"),
                  styles.centerChild
                )}
                onClick={() => router.replace("/appointment")}
              >
                Appointment
              </div>
              <div
                {...StyleX.props(styles.loginBtn)}
                onClick={() => router.replace("/signIn")}
              >
                Sign In
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
