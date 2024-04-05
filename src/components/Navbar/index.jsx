import { useState } from "react";
import { Link } from "react-router-dom";
import { logo, menu, close } from '../../assets';
import { navLinks } from "../../constants";
import styles from './navbar.module.scss';
import clsx from "clsx";

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link
          to="/"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className={styles.logo}
          />
        </Link>

        <ul className={styles.links}>
          {navLinks?.map((item) => (
            <li
              key={item.id}
              className={clsx(styles.link, active === item.id && styles.active)}
              onClick={() => setActive(item.id)}
            >
              <a
                href={`#${item.id}`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <div
          className={styles.menu}
        >
          <div
            onClick={() => setToggle(!toggle)}
            className={styles.menuIcon}
            style={{ backgroundImage: `url(${toggle ? close : menu})`}}
          />

          <div className={clsx(styles.menuList, toggle && styles.active)}>
            <ul className={styles.links}>
              {navLinks?.map((item) => (
                <li
                  key={item.id}
                  className={clsx(styles.link, active === item.id && styles.active)}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(item.id);
                  }}
                >
                  <a
                    href={`#${item.id}`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;