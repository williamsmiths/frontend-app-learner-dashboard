import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { getConfig } from "@edx/frontend-platform";
import { AppContext } from "@edx/frontend-platform/react";
import { useIntl } from "@edx/frontend-platform/i18n";
import classNames from "classnames";

import "./index.scss";

const CustomHeader = ({ mainMenuItems, secondaryMenuItems, userMenuItems }) => {
  const { authenticatedUser } = React.useContext(AppContext);
  const { formatMessage } = useIntl();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const userMenuRef = useRef(null);

  const logoUrl = getConfig().LOGO_URL;
  const siteName = getConfig().SITE_NAME;
  const logoAltText = `${siteName} Dashboard`;

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsUserMenuOpen(false); // Close user menu when opening mobile menu
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
    setIsMobileMenuOpen(false); // Close mobile menu when opening user menu
  };

  const handleMenuItemClick = (item, event) => {
    // Close menus after clicking
    setIsMobileMenuOpen(false);
    setIsUserMenuOpen(false);

    // If there's a custom onClick handler, call it but still allow navigation
    if (item.onClick) {
      item.onClick(event);
    }
    // Let the default link behavior happen (navigation) regardless
  };

  // Helper function to resolve href based on current context
  const resolveHref = (href) => {
    if (!href) return "#";

    // If href is root "/", stay on current page (learner dashboard)
    if (href === "/") {
      return window.location.pathname;
    }

    // If href starts with http/https, use as is (external links)
    if (href.startsWith("http://") || href.startsWith("https://")) {
      return href;
    }

    // For other relative paths, use as is
    return href;
  };

  const renderMenuItem = (item, key, isMobile = false) => {
    const className = classNames("custom-header__menu-item underline-none", {
      "custom-header__menu-item--mobile": isMobile,
      "custom-header__menu-item--active": item.isActive,
    });

    return (
      <li key={key} className={className}>
        <a
          href={resolveHref(item.href)}
          className="custom-header__menu-link underline-none"
          onClick={(e) => handleMenuItemClick(item, e)}
          role="menuitem"
        >
          {item.content}
        </a>
      </li>
    );
  };

  const renderUserMenuSection = (section, sectionKey) => (
    <div key={sectionKey} className="custom-header__user-menu-section">
      {section.heading && <h6 className="custom-header__user-menu-heading">{section.heading}</h6>}
      <ul className="custom-header__user-menu-list">
        {section.items?.map((item, itemKey) => (
          <li key={itemKey} className="custom-header__user-menu-item">
            <a
              href={resolveHref(item.href)}
              className="custom-header__user-menu-link"
              onClick={(e) => handleMenuItemClick(item, e)}
              role="menuitem"
            >
              {item.content}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <header className="custom-header" role="banner">
      <div className="custom-header__container">
        {/* Logo */}
        <div className="custom-header__logo">
          <a href="/learner-dashboard/" aria-label={logoAltText}>
            {logoUrl ? (
              <img src={logoUrl} alt={logoAltText} className="custom-header__logo-image" />
            ) : (
              <span className="custom-header__logo-text">{siteName}</span>
            )}
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="custom-header__nav-desktop" role="navigation">
          {/* Main Menu */}
          <ul className="custom-header__main-menu">
            {mainMenuItems?.map((item, index) => renderMenuItem(item, index))}
          </ul>

          {/* Secondary Menu */}
          {secondaryMenuItems && secondaryMenuItems.length > 0 && (
            <ul className="custom-header__secondary-menu">
              {secondaryMenuItems.map((item, index) => renderMenuItem(item, index))}
            </ul>
          )}
        </nav>

        {/* User Menu (Desktop) */}
        {authenticatedUser && (
          <div className="custom-header__user-container custom-header__user-container--desktop" ref={userMenuRef}>
            <button
              className="custom-header__user-toggle"
              onClick={toggleUserMenu}
              aria-expanded={isUserMenuOpen}
              aria-haspopup="true"
              aria-label="User menu"
            >
              {/* <span className="custom-header__user-avatar">
                {authenticatedUser.avatar ? (
                  <img
                    src={authenticatedUser.avatar}
                    alt={`${authenticatedUser.username} avatar`}
                    className="custom-header__avatar-image"
                  />
                ) : (
                  <div className="custom-header__avatar-placeholder">
                    {authenticatedUser.username?.charAt(0).toUpperCase()}
                  </div>
                )}
              </span> */}
              <span className="custom-header__username">{authenticatedUser.username}</span>
              <svg
                className={classNames("custom-header__dropdown-arrow", {
                  "custom-header__dropdown-arrow--open": isUserMenuOpen,
                })}
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {isUserMenuOpen && (
              <div className="custom-header__user-menu" role="menu">
                {userMenuItems?.map((section, index) => renderUserMenuSection(section, index))}
              </div>
            )}
          </div>
        )}

        {/* Mobile Menu Toggle */}
        <button
          className="custom-header__mobile-toggle"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={classNames("custom-header__hamburger", {
              "custom-header__hamburger--open": isMobileMenuOpen,
            })}
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="custom-header__mobile-menu" ref={mobileMenuRef} role="navigation">
          <div className="custom-header__mobile-content">
            {/* User Info (Mobile) */}
            {authenticatedUser && (
              <div className="custom-header__mobile-user">
                <div className="custom-header__mobile-user-info">
                  <div className="custom-header__user-avatar">
                    {authenticatedUser.avatar ? (
                      <img
                        src={authenticatedUser.avatar}
                        alt={`${authenticatedUser.username} avatar`}
                        className="custom-header__avatar-image"
                      />
                    ) : (
                      <div className="custom-header__avatar-placeholder">
                        {authenticatedUser.username?.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <span className="custom-header__mobile-username">{authenticatedUser.username}</span>
                </div>
              </div>
            )}

            {/* Main Menu (Mobile) */}
            <ul className="custom-header__mobile-main-menu">
              {mainMenuItems?.map((item, index) => renderMenuItem(item, index, true))}
            </ul>

            {/* Secondary Menu (Mobile) */}
            {secondaryMenuItems && secondaryMenuItems.length > 0 && (
              <>
                <hr className="custom-header__mobile-divider" />
                <ul className="custom-header__mobile-secondary-menu">
                  {secondaryMenuItems.map((item, index) => renderMenuItem(item, index, true))}
                </ul>
              </>
            )}

            {/* User Menu (Mobile) */}
            {authenticatedUser && userMenuItems && (
              <>
                <hr className="custom-header__mobile-divider" />
                <div className="custom-header__mobile-user-menu">
                  {userMenuItems.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="custom-header__mobile-user-section">
                      {section.heading && <h6 className="custom-header__mobile-user-heading">{section.heading}</h6>}
                      <ul className="custom-header__mobile-user-list">
                        {section.items?.map((item, itemIndex) => (
                          <li key={itemIndex} className="custom-header__mobile-user-item">
                            <a
                              href={resolveHref(item.href)}
                              className="custom-header__mobile-user-link"
                              onClick={(e) => handleMenuItemClick(item, e)}
                              role="menuitem"
                            >
                              {item.content}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

CustomHeader.propTypes = {
  mainMenuItems: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      href: PropTypes.string,
      content: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      isActive: PropTypes.bool,
    })
  ),
  secondaryMenuItems: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      href: PropTypes.string,
      content: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })
  ),
  userMenuItems: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string,
          href: PropTypes.string,
          content: PropTypes.string.isRequired,
          onClick: PropTypes.func,
        })
      ),
    })
  ),
};

CustomHeader.defaultProps = {
  mainMenuItems: [],
  secondaryMenuItems: [],
  userMenuItems: [],
};

export default CustomHeader;
