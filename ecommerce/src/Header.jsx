import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketOutlined from "@mui/icons-material/ShoppingBasketOutlined";

const Header = () => {
  return (
    <nav className="header">
      {/* logo on left */}
      <Link to="/home">
        <img
          className="header_logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT13u0fnkcKWbESup_9R8XtFxHmsAmvAMEQPw&usqp=CAU"
          alt=""
        />
      </Link>
      {/* Search Box */}
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      {/* 3 links */}
      <div className="header_nav">
        {/* link1 */}
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLine1">Hello, Len</span>
            <span className="header_optionLine2">Sign In</span>
          </div>
        </Link>

        {/* link2 */}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLine1">Returns</span>
            <span className="header_optionLine2">& Orders</span>
          </div>
        </Link>
        {/* link3 */}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLine1">Your</span>
            <span className="header_optionLine2">Prime</span>
          </div>
        </Link>
        {/* link4 */}
        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            {/* Cart */}
            <ShoppingBasketOutlined className="h"/>
            {/* no */}
            <span className="header_optionLine2 header_basketCount"> 0 </span>
          </div>
        </Link>
      </div>
      {/* Cart */}
    </nav>
  );
};

export default Header;
