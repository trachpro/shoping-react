import React, { Component } from 'react';


class Menu extends Component {


    render() {

        return(
            <div className="header_agileits">
                <div className="logo">
                  <h1>
                    <a className="navbar-brand" href="index.html">
                      <span>KoKoRo</span>
                      <i>Adidas</i>
                    </a>
                  </h1>
                </div>
                <div className="overlay overlay-contentpush">
                  <button type="button" className="overlay-close">
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </button>

                  <nav>
                    <ul>
                      <li>
                        <a href="index.html" className="active">Home</a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="404.html">Team</a>
                      </li>
                      <li>
                        <a href="shop.html">Shop Now</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="mobile-nav-button">
                  <button id="trigger-overlay" type="button">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </button>
                </div>
                <div className="top_nav_right">
                  <div className="shoecart shoecart2 cart cart box_1">
                    <form action="#" method="post" className="last">
                      <input type="hidden" name="cmd" value="_cart" />
                      <input type="hidden" name="display" value="1" />
                      <button className="top_shoe_cart" type="submit" name="submit" value="">
                        <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                      </button>
                    </form>
                  </div>

                </div>
                <div className="search_w3ls_agileinfo">
                  <div className="cd-main-header">
                    <ul className="cd-header-buttons">
                      <li>
                        <a className="cd-search-trigger" href="#cd-search">
                          <span></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div id="cd-search" className="cd-search">
                    <form action="#" method="post">
                      <input name="Search" type="search" placeholder="Click enter after typing..." />
                    </form>
                  </div>
                </div>

                <div className="clearfix"></div>
              </div>
        )
    }
}

export default Menu;