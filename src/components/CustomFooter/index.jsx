import React from "react";
import PropTypes from "prop-types";
import { getConfig } from "@edx/frontend-platform";
import logoHUIT from "assets/logo-ct.png";

import "./index.scss";

const CustomFooter = ({ links, contactInfo }) => {
  const config = getConfig();
  const logoUrl = config.LOGO_URL;
  const baseUrl = config.LMS_BASE_URL;
  const cvsLogo = `${baseUrl}/static/indigo/images/cvs.png`;
  const scsLogo = `${baseUrl}/static/indigo/images/logo_scs.png`;
  // Default links if not provided
  const defaultLinks = [
    { href: "/about", text: "About Us" },
    { href: "/blog", text: "Blog" },
    { href: "/donate", text: "Donate" },
    { href: "/tos", text: "Terms of Service" },
    { href: "/privacy", text: "Privacy Policy" },
    { href: "/help", text: "Help" },
    { href: "/contact", text: "Contact Us" },
  ];

  // Default contact info if not provided
  const defaultContactInfo = {
    address: "254 Nguyễn Văn Linh, P. Thanh Khê, Tp. Đà Nẵng, Việt Nam",
    phone: "(+84) 236.3650403",
    phoneHref: "tel:+842363650403",
    website: "tuyensinh.duytan.edu.vn",
    websiteHref: "http://tuyensinh.duytan.edu.vn",
  };

  const contact = { ...defaultContactInfo, ...contactInfo };
  const currentYear = new Date().getFullYear();

  return (
    <div className="wrapper wrapper-footer">
      <footer id="footer" className="tutor-container">
        <div className="footer-content">
          <div >
            {/* University Branding Section */}
            <div className="d-flex justify-content-between align-items-center mb-2 w-full">
              <a
                href="https://huit.edu.vn/"
                rel="noopener"
                target="_blank"
                aria-label="TRƯỜNG ĐẠI HỌC CÔNG THƯƠNG TP.HCM"
              >
                <img src={logoHUIT} alt="TRƯỜNG ĐẠI HỌC CÔNG THƯƠNG TP.HCM" width="300" />
              </a>

              <span className="copyright-site" style={{ textAlign: "start", fontSize: "15px" }}>
                © {currentYear} TRƯỜNG ĐẠI HỌC CÔNG THƯƠNG TP.HCM. All Rights Reserved.
              </span>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
};

CustomFooter.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      external: PropTypes.bool,
    })
  ),
  contactInfo: PropTypes.shape({
    address: PropTypes.string,
    phone: PropTypes.string,
    phoneHref: PropTypes.string,
    website: PropTypes.string,
    websiteHref: PropTypes.string,
  }),
};

CustomFooter.defaultProps = {
  links: null,
  contactInfo: null,
};

export default CustomFooter;
