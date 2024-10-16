import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me2.jpg`} alt="" />
      </Link>
      <header>
        <h2>Arefin Ahmed</h2>
        <p>
          <a href="mailto:ahmedarefinsajjad@gmail.com">mail@arefin.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Arefin and the rest is to be known.
      </p>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Arefin Ahmed <Link to="/">arefin.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
