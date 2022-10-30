/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable implicit-arrow-linebreak */
import { React, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaAngellist } from 'react-icons/fa';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';
import { removeUSER } from '../redux/user/user';
import logo from '../assets/images/apps-logo.webp';
import '../styles/nav.css';

const Nav = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navRef = useRef();
  const [isHide, setHide] = useState(false);
  const showHideNavbar = () => {
    navRef.current.classList.toggle('hidden');
  };

  const logoutUser = (e) => {
    e.preventDefault();
    dispatch(removeUSER());
    localStorage.removeItem('user');
    alert('USER SIGNED OUT SUCCESSFULLY!');
  };

  return (
    <>
      <div className="close-nav" onClick={() => setHide(!isHide)}>
        {isHide ? (
          <GiHamburgerMenu onClick={showHideNavbar} />
        ) : (
          <GrClose onClick={showHideNavbar} />
        )}
      </div>
      <nav className="nav" ref={navRef}>
        <img className="app-logo" src={logo} alt="" />
        <div className="nav-items">
          <button type="button" className="nav-item">
            <NavLink onClick={showHideNavbar} to="/">
              Tours
            </NavLink>
          </button>
          <button type="button" className="nav-item">
            <NavLink onClick={showHideNavbar} to="/tours/reserve">
              My reservations
            </NavLink>
          </button>
          <button type="button" className="nav-item">
            <NavLink onClick={showHideNavbar} to="/tours/reserve">
              Reserver Tour
            </NavLink>
          </button>
          <button type="button" className="nav-item">
            <NavLink onClick={showHideNavbar} to="/tours/create">
              Create Tour
            </NavLink>
          </button>
          <button type="button" className="nav-item">
            <NavLink onClick={showHideNavbar} to="/tours/delete">
              Delete Tour
            </NavLink>
          </button>
        </div>

        {user.length > 0 ? (
          <button
            type="button"
            className="sign-out-button"
            onClick={logoutUser}
          >
            Sign Out
          </button>
        ) : (
          ''
        )}

        <div className="nav-footer">
          <ul className="links-container">
            <li className="links">
              <NavLink to="/">
                <BsGithub className="links" />
              </NavLink>
            </li>
            <li className="links">
              <NavLink to="/">
                <BsLinkedin className="links" />
              </NavLink>
            </li>
            <li className="links">
              <NavLink to="/">
                <FaAngellist className="links" />
              </NavLink>
            </li>
            <li className="links">
              <NavLink to="/">
                <BsTwitter className="links" />
              </NavLink>
            </li>
          </ul>
          <h1 className="heading">&#169; 2015 PIAGIO & C.S.P.A - P.IVA</h1>
        </div>
      </nav>
    </>
  );
};

export default Nav;
