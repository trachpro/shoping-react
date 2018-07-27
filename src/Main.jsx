import React, { Component } from 'react';

export default class Home extends Component {

	render() {

		return (
			<div>
				<div className="banner_top innerpage" id="home">
					<div className="wrapper_top_w3layouts">
						<div className="header_agileits">
							<div className="logo inner_page_log">
								<h1>
									<a className="navbar-brand" href="index.html">
										<span>Downy</span>
										<i>Shoes</i>
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
					<div className="services-breadcrumb_w3ls_agileinfo">
						<div className="inner_breadcrumb_agileits_w3">

							<ul className="short">
								<li>
									<a href="index.html">Home</a>
									<i>|</i>
								</li>
								<li>Shop</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="ads-grid_shop">
					<div className="shop_inner_inf">

						<div className="side-bar col-md-3">
							<div className="search-hotel">
								<h3 className="agileits-sear-head">Search Here..</h3>
								<form action="#" method="post">
									<input type="search" placeholder="Product name..." name="search" required="" />
									<input type="submit" value=" " />
								</form>
							</div>
							<div className="range">
								<h3 className="agileits-sear-head">Price range</h3>
								<ul className="dropdown-menu6">
									<li>

										<div id="slider-range"></div>
										<input type="text" id="amount" style="border: 0; color: #ffffff; font-weight: normal;" />
									</li>
								</ul>
							</div>
							<div className="left-side">
								<h3 className="agileits-sear-head">Occasion</h3>
								<ul>
									<li>
										<input type="checkbox" className="checked" />
										<span className="span">Casuals</span>
									</li>
									<li>
										<input type="checkbox" className="checked" />
										<span className="span">Party</span>
									</li>
									<li>
										<input type="checkbox" className="checked" />
										<span className="span">Wedding</span>
									</li>
									<li>
										<input type="checkbox" className="checked" />
										<span className="span">Ethnic</span>
									</li>
								</ul>
							</div>
							<div className="left-side">
								<h3 className="agileits-sear-head">Discount</h3>
								<ul>
									<li>
										<input type="checkbox" className="checked" />
										<span className="span">5% or More</span>
									</li>
									<li>
										<input type="checkbox" className="checked" />
										<span className="span">10% or More</span>
									</li>
									<li>
										<input type="checkbox" className="checked" />
										<span className="span">20% or More</span>
									</li>
									<li>
										<input type="checkbox" className="checked" />
										<span className="span">30% or More</span>
									</li>
									<li>
										<input type="checkbox" className="checked" />
										<span className="span">50% or More</span>
									</li>
									<li>
										<input type="checkbox" className="checked" />
										<span className="span">60% or More</span>
									</li>
								</ul>
							</div>
							<div className="customer-rev left-side">
								<h3 className="agileits-sear-head">Customer Review</h3>
								<ul>
									<li>
										<a >
											<i className="fa fa-star" aria-hidden="true"></i>
											<i className="fa fa-star" aria-hidden="true"></i>
											<i className="fa fa-star" aria-hidden="true"></i>
											<i className="fa fa-star" aria-hidden="true"></i>
											<i className="fa fa-star" aria-hidden="true"></i>
											<span>5.0</span>
										</a>
									</li>
									<li>
										<a >
											<i className="fa fa-star" aria-hidden="true"></i>
											<i className="fa fa-star" aria-hidden="true"></i>
											<i className="fa fa-star" aria-hidden="true"></i>
											<i className="fa fa-star" aria-hidden="true"></i>
											<i className="fa fa-star-o" aria-hidden="true"></i>
											<span>4.0</span>
										</a>
									</li>
									<li>
										<a >
											<i className="fa fa-star" aria-hidden="true"></i>
											<i className="fa fa-star" aria-hidden="true"></i>
											<i className="fa fa-star" aria-hidden="true"></i>
											<i className="fa fa-star-half-o" aria-hidden="true"></i>
											<i className="fa fa-star-o" aria-hidden="true"></i>
											<span>3.5</span>
										</a>
									</li>
									<li>
										<a >
											<i className="fa fa-star" aria-hidden="true"></i>
											<i className="fa fa-star" aria-hidden="true"></i>
											<i className="fa fa-star" aria-hidden="true"></i>
											<i className="fa fa-star-o" aria-hidden="true"></i>
											<i className="fa fa-star-o" aria-hidden="true"></i>
											<span>3.0</span>
										</a>
									</li>
									<li>
										<a >
											<i className="fa fa-star" aria-hidden="true"></i>
											<i className="fa fa-star" aria-hidden="true"></i>
											<i className="fa fa-star-half-o" aria-hidden="true"></i>
											<i className="fa fa-star-o" aria-hidden="true"></i>
											<i className="fa fa-star-o" aria-hidden="true"></i>
											<span>2.5</span>
										</a>
									</li>
								</ul>
							</div>
							<div className="deal-leftmk left-side">
								<h3 className="agileits-sear-head">Special Deals</h3>
								<div className="special-sec1">
									<div className="col-xs-4 img-deals">
										<img src="images/s4.jpg" alt="">
						</div>
										<div className="col-xs-8 img-deal1">
											<h3>Shuberry Heels</h3>
											<a href="single.html">$180.00</a>
										</div>
										<div className="clearfix"></div>
									</div>
									<div className="special-sec1">
										<div className="col-xs-4 img-deals">
											<img src="images/s2.jpg" alt="">
						</div>
											<div className="col-xs-8 img-deal1">
												<h3>Chikku Loafers</h3>
												<a href="single.html">$99.00</a>
											</div>
											<div className="clearfix"></div>
										</div>
										<div className="special-sec1">
											<div className="col-xs-4 img-deals">
												<img src="images/s1.jpg" alt="">
						</div>
												<div className="col-xs-8 img-deal1">
													<h3>Bella Toes</h3>
													<a href="single.html">$165.00</a>
												</div>
												<div className="clearfix"></div>
											</div>
											<div className="special-sec1">
												<div className="col-xs-4 img-deals">
													<img src="images/s5.jpg" alt="">
						</div>
													<div className="col-xs-8 img-deal1">
														<h3>Red Bellies</h3>
														<a href="single.html">$225.00</a>
													</div>
													<div className="clearfix"></div>
												</div>
												<div className="special-sec1">
													<div className="col-xs-4 img-deals">
														<img src="images/s3.jpg" alt="">
						</div>
														<div className="col-xs-8 img-deal1">
															<h3>(SRV) Sneakers</h3>
															<a href="single.html">$169.00</a>
														</div>
														<div className="clearfix"></div>
													</div>
												</div>

											</div>
											<div className="left-ads-display col-md-9">
												<div className="wrapper_top_shop">
													<div className="col-md-6 shop_left">
														<img src="images/banner3.jpg" alt="">
															<h6>40% off</h6>
					</div>
														<div className="col-md-6 shop_right">
															<img src="images/banner2.jpg" alt="">
																<h6>50% off</h6>
					</div>
															<div className="clearfix"></div>
															<div className="product-sec1">
																<div className="col-md-4 product-men">
																	<div className="product-shoe-info shoe">
																		<div className="men-pro-item">
																			<div className="men-thumb-item">
																				<img src="images/s1.jpg" alt="">
																					<div className="men-cart-pro">
																						<div className="inner-men-cart-pro">
																							<a href="single.html" className="link-product-add-cart">Quick View</a>
																						</div>
																					</div>
																					<span className="product-new-top">New</span>
									</div>
																				<div className="item-info-product">
																					<h4>
																						<a href="single.html">Bella Toes </a>
																					</h4>
																					<div className="info-product-price">
																						<div className="grid_meta">
																							<div className="product_price">
																								<div className="grid-price ">
																									<span className="money ">$675.00</span>
																								</div>
																							</div>
																							<ul className="stars">
																								<li>
																									<a >
																										<i className="fa fa-star" aria-hidden="true"></i>
																									</a>
																								</li>
																								<li>
																									<a >
																										<i className="fa fa-star" aria-hidden="true"></i>
																									</a>
																								</li>
																								<li>
																									<a >
																										<i className="fa fa-star" aria-hidden="true"></i>
																									</a>
																								</li>
																								<li>
																									<a >
																										<i className="fa fa-star-half-o" aria-hidden="true"></i>
																									</a>
																								</li>
																								<li>
																									<a >
																										<i className="fa fa-star-o" aria-hidden="true"></i>
																									</a>
																								</li>
																							</ul>
																						</div>
																						<div className="shoe single-item hvr-outline-out">
																							<form action="#" method="post">
																								<input type="hidden" name="cmd" value="_cart" />
																								<input type="hidden" name="add" value="1" />
																								<input type="hidden" name="shoe_item" value="Bella Toes" />
																								<input type="hidden" name="amount" value="675.00" />
																								<button type="submit" className="shoe-cart pshoe-cart">
																									<i className="fa fa-cart-plus" aria-hidden="true"></i>
																								</button>

																								<a data-toggle="modal" data-target="#myModal1"></a>
																							</form>

																						</div>
																					</div>
																					<div className="clearfix"></div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="col-md-4 product-men">
																		<div className="product-shoe-info shoe">
																			<div className="men-pro-item">
																				<div className="men-thumb-item">
																					<img src="images/s2.jpg" alt="">
																						<div className="men-cart-pro">
																							<div className="inner-men-cart-pro">
																								<a href="single.html" className="link-product-add-cart">Quick View</a>
																							</div>
																						</div>
																						<span className="product-new-top">New</span>
									</div>
																					<div className="item-info-product">
																						<h4>
																							<a href="single.html">Chikku Loafers </a>
																						</h4>
																						<div className="info-product-price">
																							<div className="grid_meta">
																								<div className="product_price">
																									<div className="grid-price ">
																										<span className="money ">$405.00</span>
																									</div>
																								</div>
																								<ul className="stars">
																									<li>
																										<a >
																											<i className="fa fa-star" aria-hidden="true"></i>
																										</a>
																									</li>
																									<li>
																										<a >
																											<i className="fa fa-star" aria-hidden="true"></i>
																										</a>
																									</li>
																									<li>
																										<a >
																											<i className="fa fa-star" aria-hidden="true"></i>
																										</a>
																									</li>
																									<li>
																										<a >
																											<i className="fa fa-star-half-o" aria-hidden="true"></i>
																										</a>
																									</li>
																									<li>
																										<a >
																											<i className="fa fa-star-o" aria-hidden="true"></i>
																										</a>
																									</li>
																								</ul>
																							</div>
																							<div className="shoe single-item hvr-outline-out">
																								<form action="#" method="post">
																									<input type="hidden" name="cmd" value="_cart" />
																									<input type="hidden" name="add" value="1" />
																									<input type="hidden" name="shoe_item" value="Chikku Loafers" />
																									<input type="hidden" name="amount" value="405.00" />
																									<button type="submit" className="shoe-cart pshoe-cart">
																										<i className="fa fa-cart-plus" aria-hidden="true"></i>
																									</button>

																									<a data-toggle="modal" data-target="#myModal1"></a>
																								</form>

																							</div>
																						</div>
																						<div className="clearfix"></div>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div className="col-md-4 product-men">
																			<div className="product-shoe-info shoe">
																				<div className="men-pro-item">
																					<div className="men-thumb-item">
																						<img src="images/s3.jpg" alt="">
																							<div className="men-cart-pro">
																								<div className="inner-men-cart-pro">
																									<a href="single.html" className="link-product-add-cart">Quick View</a>
																								</div>
																							</div>
																							<span className="product-new-top">New</span>
									</div>
																						<div className="item-info-product">
																							<h4>
																								<a href="single.html">(SRV) Sneakers </a>
																							</h4>
																							<div className="info-product-price">
																								<div className="grid_meta">
																									<div className="product_price">
																										<div className="grid-price ">
																											<span className="money ">$375.00</span>
																										</div>
																									</div>
																									<ul className="stars">
																										<li>
																											<a >
																												<i className="fa fa-star" aria-hidden="true"></i>
																											</a>
																										</li>
																										<li>
																											<a >
																												<i className="fa fa-star" aria-hidden="true"></i>
																											</a>
																										</li>
																										<li>
																											<a >
																												<i className="fa fa-star" aria-hidden="true"></i>
																											</a>
																										</li>
																										<li>
																											<a >
																												<i className="fa fa-star-half-o" aria-hidden="true"></i>
																											</a>
																										</li>
																										<li>
																											<a >
																												<i className="fa fa-star-o" aria-hidden="true"></i>
																											</a>
																										</li>
																									</ul>
																								</div>
																								<div className="shoe single-item hvr-outline-out">
																									<form action="#" method="post">
																										<input type="hidden" name="cmd" value="_cart" />
																										<input type="hidden" name="add" value="1" />
																										<input type="hidden" name="shoe_item" value="(SRV) Sneakers" />
																										<input type="hidden" name="amount" value="375.00" />
																										<button type="submit" className="shoe-cart pshoe-cart">
																											<i className="fa fa-cart-plus" aria-hidden="true"></i>
																										</button>

																										<a data-toggle="modal" data-target="#myModal1"></a>
																									</form>

																								</div>
																							</div>
																							<div className="clearfix"></div>
																						</div>
																					</div>
																				</div>
																			</div>
																			<div className="col-md-4 product-men women_two">
																				<div className="product-shoe-info shoe">
																					<div className="men-pro-item">
																						<div className="men-thumb-item">
																							<img src="images/s4.jpg" alt="">
																								<div className="men-cart-pro">
																									<div className="inner-men-cart-pro">
																										<a href="single.html" className="link-product-add-cart">Quick View</a>
																									</div>
																								</div>
																								<span className="product-new-top">New</span>
									</div>
																							<div className="item-info-product">
																								<h4>
																									<a href="single.html">Shuberry Heels </a>
																								</h4>
																								<div className="info-product-price">
																									<div className="grid_meta">
																										<div className="product_price">
																											<div className="grid-price ">
																												<span className="money ">$575.00</span>
																											</div>
																										</div>
																										<ul className="stars">
																											<li>
																												<a >
																													<i className="fa fa-star" aria-hidden="true"></i>
																												</a>
																											</li>
																											<li>
																												<a >
																													<i className="fa fa-star" aria-hidden="true"></i>
																												</a>
																											</li>
																											<li>
																												<a >
																													<i className="fa fa-star" aria-hidden="true"></i>
																												</a>
																											</li>
																											<li>
																												<a >
																													<i className="fa fa-star" aria-hidden="true"></i>
																												</a>
																											</li>
																											<li>
																												<a >
																													<i className="fa fa-star-half-o" aria-hidden="true"></i>
																												</a>
																											</li>
																										</ul>
																									</div>
																									<div className="shoe single-item hvr-outline-out">
																										<form action="#" method="post">
																											<input type="hidden" name="cmd" value="_cart" />
																											<input type="hidden" name="add" value="1" />
																											<input type="hidden" name="shoe_item" value="Shuberry Heels" />
																											<input type="hidden" name="amount" value="575.00" />
																											<button type="submit" className="shoe-cart pshoe-cart">
																												<i className="fa fa-cart-plus" aria-hidden="true"></i>
																											</button>

																											<a data-toggle="modal" data-target="#myModal1"></a>
																										</form>

																									</div>
																								</div>
																								<div className="clearfix"></div>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div className="col-md-4 product-men women_two">
																					<div className="product-shoe-info shoe">
																						<div className="men-pro-item">
																							<div className="men-thumb-item">
																								<img src="images/s5.jpg" alt="">
																									<div className="men-cart-pro">
																										<div className="inner-men-cart-pro">
																											<a href="single.html" className="link-product-add-cart">Quick View</a>
																										</div>
																									</div>
																									<span className="product-new-top">New</span>
									</div>
																								<div className="item-info-product">
																									<h4>
																										<a href="single.html">Red Bellies </a>
																									</h4>
																									<div className="info-product-price">
																										<div className="grid_meta">
																											<div className="product_price">
																												<div className="grid-price ">
																													<span className="money ">$325.00</span>
																												</div>
																											</div>
																											<ul className="stars">
																												<li>
																													<a >
																														<i className="fa fa-star" aria-hidden="true"></i>
																													</a>
																												</li>
																												<li>
																													<a >
																														<i className="fa fa-star" aria-hidden="true"></i>
																													</a>
																												</li>
																												<li>
																													<a >
																														<i className="fa fa-star" aria-hidden="true"></i>
																													</a>
																												</li>
																												<li>
																													<a >
																														<i className="fa fa-star-half-o" aria-hidden="true"></i>
																													</a>
																												</li>
																												<li>
																													<a >
																														<i className="fa fa-star-o" aria-hidden="true"></i>
																													</a>
																												</li>
																											</ul>
																										</div>
																										<div className="shoe single-item hvr-outline-out">
																											<form action="#" method="post">
																												<input type="hidden" name="cmd" value="_cart" />
																												<input type="hidden" name="add" value="1" />
																												<input type="hidden" name="shoe_item" value="Red Bellies" />
																												<input type="hidden" name="amount" value="325.00" />
																												<button type="submit" className="shoe-cart pshoe-cart">
																													<i className="fa fa-cart-plus" aria-hidden="true"></i>
																												</button>

																												<a data-toggle="modal" data-target="#myModal1"></a>
																											</form>

																										</div>
																									</div>
																									<div className="clearfix"></div>
																								</div>
																							</div>
																						</div>
																					</div>
																					<div className="col-md-4 product-men women_two">
																						<div className="product-shoe-info shoe">
																							<div className="men-pro-item">
																								<div className="men-thumb-item">
																									<img src="images/s6.jpg" alt="">
																										<div className="men-cart-pro">
																											<div className="inner-men-cart-pro">
																												<a href="single.html" className="link-product-add-cart">Quick View</a>
																											</div>
																										</div>
																										<span className="product-new-top">New</span>
									</div>
																									<div className="item-info-product">
																										<h4>
																											<a href="single.html">Catwalk Flats</a>
																										</h4>
																										<div className="info-product-price">
																											<div className="grid_meta">
																												<div className="product_price">
																													<div className="grid-price ">
																														<span className="money ">$425.00</span>
																													</div>
																												</div>
																												<ul className="stars">
																													<li>
																														<a >
																															<i className="fa fa-star" aria-hidden="true"></i>
																														</a>
																													</li>
																													<li>
																														<a >
																															<i className="fa fa-star" aria-hidden="true"></i>
																														</a>
																													</li>
																													<li>
																														<a >
																															<i className="fa fa-star" aria-hidden="true"></i>
																														</a>
																													</li>
																													<li>
																														<a >
																															<i className="fa fa-star" aria-hidden="true"></i>
																														</a>
																													</li>
																													<li>
																														<a >
																															<i className="fa fa-star-half-o" aria-hidden="true"></i>
																														</a>
																													</li>
																												</ul>
																											</div>
																											<div className="shoe single-item hvr-outline-out">
																												<form action="#" method="post">
																													<input type="hidden" name="cmd" value="_cart" />
																													<input type="hidden" name="add" value="1" />
																													<input type="hidden" name="shoe_item" value="Catwalk Flats" />
																													<input type="hidden" name="amount" value="425.00" />
																													<button type="submit" className="shoe-cart pshoe-cart">
																														<i className="fa fa-cart-plus" aria-hidden="true"></i>
																													</button>

																													<a data-toggle="modal" data-target="#myModal1"></a>
																												</form>

																											</div>
																										</div>
																										<div className="clearfix"></div>
																									</div>
																								</div>
																							</div>
																						</div>
																						<div className="col-md-4 product-men">
																							<div className="product-shoe-info shoe">
																								<div className="men-pro-item">
																									<div className="men-thumb-item">
																										<img src="images/s7.jpg" alt="">
																											<div className="men-cart-pro">
																												<div className="inner-men-cart-pro">
																													<a href="single.html" className="link-product-add-cart">Quick View</a>
																												</div>
																											</div>
																											<span className="product-new-top">New</span>
									</div>
																										<div className="item-info-product">
																											<h4>
																												<a href="single.html">Running Shoes</a>
																											</h4>
																											<div className="info-product-price">
																												<div className="grid_meta">
																													<div className="product_price">
																														<div className="grid-price ">
																															<span className="money ">$875.00</span>
																														</div>
																													</div>
																													<ul className="stars">
																														<li>
																															<a >
																																<i className="fa fa-star" aria-hidden="true"></i>
																															</a>
																														</li>
																														<li>
																															<a >
																																<i className="fa fa-star" aria-hidden="true"></i>
																															</a>
																														</li>
																														<li>
																															<a >
																																<i className="fa fa-star" aria-hidden="true"></i>
																															</a>
																														</li>
																														<li>
																															<a >
																																<i className="fa fa-star" aria-hidden="true"></i>
																															</a>
																														</li>
																														<li>
																															<a >
																																<i className="fa fa-star-half-o" aria-hidden="true"></i>
																															</a>
																														</li>
																													</ul>
																												</div>
																												<div className="shoe single-item hvr-outline-out">
																													<form action="#" method="post">
																														<input type="hidden" name="cmd" value="_cart" />
																														<input type="hidden" name="add" value="1" />
																														<input type="hidden" name="shoe_item" value="Running Shoes" />
																														<input type="hidden" name="amount" value="875.00" />
																														<button type="submit" className="shoe-cart pshoe-cart">
																															<i className="fa fa-cart-plus" aria-hidden="true"></i>
																														</button>

																														<a data-toggle="modal" data-target="#myModal1"></a>
																													</form>

																												</div>
																											</div>
																											<div className="clearfix"></div>
																										</div>
																									</div>
																								</div>
																							</div>
																							<div className="col-md-4 product-men">
																								<div className="product-shoe-info shoe">
																									<div className="men-pro-item">
																										<div className="men-thumb-item">
																											<img src="images/s8.jpg" alt="">
																												<div className="men-cart-pro">
																													<div className="inner-men-cart-pro">
																														<a href="single.html" className="link-product-add-cart">Quick View</a>
																													</div>
																												</div>
																												<span className="product-new-top">New</span>
									</div>
																											<div className="item-info-product">
																												<h4>
																													<a href="single.html">Sukun Casuals</a>
																												</h4>
																												<div className="info-product-price">
																													<div className="grid_meta">
																														<div className="product_price">
																															<div className="grid-price ">
																																<span className="money ">$505.00</span>
																															</div>
																														</div>
																														<ul className="stars">
																															<li>
																																<a >
																																	<i className="fa fa-star" aria-hidden="true"></i>
																																</a>
																															</li>
																															<li>
																																<a >
																																	<i className="fa fa-star" aria-hidden="true"></i>
																																</a>
																															</li>
																															<li>
																																<a >
																																	<i className="fa fa-star" aria-hidden="true"></i>
																																</a>
																															</li>
																															<li>
																																<a >
																																	<i className="fa fa-star" aria-hidden="true"></i>
																																</a>
																															</li>
																															<li>
																																<a >
																																	<i className="fa fa-star-half-o" aria-hidden="true"></i>
																																</a>
																															</li>
																														</ul>
																													</div>
																													<div className="shoe single-item hvr-outline-out">
																														<form action="#" method="post">
																															<input type="hidden" name="cmd" value="_cart" />
																															<input type="hidden" name="add" value="1" />
																															<input type="hidden" name="shoe_item" value="Sukun Casuals" />
																															<input type="hidden" name="amount" value="505.00" />
																															<button type="submit" className="shoe-cart pshoe-cart">
																																<i className="fa fa-cart-plus" aria-hidden="true"></i>
																															</button>

																															<a data-toggle="modal" data-target="#myModal1"></a>
																														</form>

																													</div>
																												</div>
																												<div className="clearfix"></div>
																											</div>
																										</div>
																									</div>
																								</div>
																								<div className="col-md-4 product-men">
																									<div className="product-shoe-info shoe">
																										<div className="men-pro-item">
																											<div className="men-thumb-item">
																												<img src="images/s9.jpg" alt="">
																													<div className="men-cart-pro">
																														<div className="inner-men-cart-pro">
																															<a href="single.html" className="link-product-add-cart">Quick View</a>
																														</div>
																													</div>
																													<span className="product-new-top">New</span>
									</div>
																												<div className="item-info-product">
																													<h4>
																														<a href="single.html">Bank Sneakers</a>
																													</h4>
																													<div className="info-product-price">
																														<div className="grid_meta">
																															<div className="product_price">
																																<div className="grid-price ">
																																	<span className="money ">$635.00</span>
																																</div>
																															</div>
																															<ul className="stars">
																																<li>
																																	<a >
																																		<i className="fa fa-star" aria-hidden="true"></i>
																																	</a>
																																</li>
																																<li>
																																	<a >
																																		<i className="fa fa-star" aria-hidden="true"></i>
																																	</a>
																																</li>
																																<li>
																																	<a >
																																		<i className="fa fa-star" aria-hidden="true"></i>
																																	</a>
																																</li>
																																<li>
																																	<a >
																																		<i className="fa fa-star" aria-hidden="true"></i>
																																	</a>
																																</li>
																																<li>
																																	<a >
																																		<i className="fa fa-star-half-o" aria-hidden="true"></i>
																																	</a>
																																</li>
																															</ul>
																														</div>
																														<div className="shoe single-item hvr-outline-out">
																															<form action="#" method="post">
																																<input type="hidden" name="cmd" value="_cart" />
																																<input type="hidden" name="add" value="1" />
																																<input type="hidden" name="shoe_item" value="Bank Sneakers" />
																																<input type="hidden" name="amount" value="635.00" />
																																<button type="submit" className="shoe-cart pshoe-cart">
																																	<i className="fa fa-cart-plus" aria-hidden="true"></i>
																																</button>

																																<a data-toggle="modal" data-target="#myModal1"></a>
																															</form>

																														</div>
																													</div>
																													<div className="clearfix"></div>
																												</div>
																											</div>
																										</div>
																									</div>
																									<div className="clearfix"></div>

																								</div>

																								<div className="col-md-6 shop_left shp">
																									<img src="images/banner4.jpg" alt="">
																										<h6>21% off</h6>
					</div>
																									<div className="col-md-6 shop_right shp">
																										<img src="images/banner1.jpg" alt="">
																											<h6>31% off</h6>
					</div>
																										<div className="clearfix"></div>
																									</div>
																								</div>
																								<div className="clearfix"></div>
																							</div>
																						</div>
																						<div className="mid_slider_w3lsagile">
																							<div className="col-md-3 mid_slider_text">
																								<h5>Some More Shoes</h5>
																							</div>
																							<div className="col-md-9 mid_slider_info">
																								<div id="myCarousel" className="carousel slide" data-ride="carousel">
																									<ol className="carousel-indicators">
																										<li data-target="#myCarousel" data-slide-to="0" className=""></li>
																										<li data-target="#myCarousel" data-slide-to="1" className="active"></li>
																										<li data-target="#myCarousel" data-slide-to="2" className=""></li>
																										<li data-target="#myCarousel" data-slide-to="3" className=""></li>
																									</ol>
																									<div className="carousel-inner" role="listbox">
																										<div className="item">
																											<div className="row">
																												<div className="col-md-3 col-sm-3 col-xs-3 slidering">
																													<div className="thumbnail">
																														<img src="images/g1.jpg" alt="" />
																													</div>
																												</div>
																												<div className="col-md-3 col-sm-3 col-xs-3 slidering">
																													<div className="thumbnail">
																														<img src="images/g2.jpg" alt="" />
																													</div>
																												</div>
																												<div className="col-md-3 col-sm-3 col-xs-3 slidering">
																													<div className="thumbnail">
																														<img src="images/g3.jpg" alt="" />
																													</div>
																												</div>
																												<div className="col-md-3 col-sm-3 col-xs-3 slidering">
																													<div className="thumbnail">
																														<img src="images/g4.jpg" alt="" />
																													</div>
																												</div>
																											</div>
																										</div>
																										<div className="item active">
																											<div className="row">
																												<div className="col-md-3 col-sm-3 col-xs-3 slidering">
																													<div className="thumbnail">
																														<img src="images/g5.jpg" alt="" />
																													</div>
																												</div>
																												<div className="col-md-3 col-sm-3 col-xs-3 slidering">
																													<div className="thumbnail">
																														<img src="images/g6.jpg" alt="" />
																													</div>
																												</div>
																												<div className="col-md-3 col-sm-3 col-xs-3 slidering">
																													<div className="thumbnail">
																														<img src="images/g2.jpg" alt="" />
																													</div>
																												</div>
																												<div className="col-md-3 col-sm-3 col-xs-3 slidering">
																													<div className="thumbnail">
																														<img src="images/g1.jpg" alt="" />
																													</div>
																												</div>
																											</div>
																										</div>
																										<div className="item">
																											<div className="row">
																												<div className="col-md-3 col-sm-3 col-xs-3 slidering">
																													<div className="thumbnail">
																														<img src="images/g1.jpg" alt="" />
																													</div>
																												</div>
																												<div className="col-md-3 col-sm-3 col-xs-3 slidering">
																													<div className="thumbnail">
																														<img src="images/g2.jpg" alt="" />
																													</div>
																												</div>
																												<div className="col-md-3 col-sm-3 col-xs-3 slidering">
																													<div className="thumbnail">
																														<img src="images/g3.jpg" alt="" />
																													</div>
																												</div>
																												<div className="col-md-3 col-sm-3 col-xs-3 slidering">
																													<div className="thumbnail">
																														<img src="images/g4.jpg" alt="" />
																													</div>
																												</div>
																											</div>
																										</div>
																										<div className="item">
																											<div className="row">
																												<div className="col-md-3 col-sm-3 col-xs-3 slidering">
																													<div className="thumbnail">
																														<img src="images/g1.jpg" alt="" />
																													</div>
																												</div>
																												<div className="col-md-3 col-sm-3 col-xs-3 slidering">
																													<div className="thumbnail">
																														<img src="images/g2.jpg" alt="" />
																													</div>
																												</div>
																												<div className="col-md-3 col-sm-3 col-xs-3 slidering">
																													<div className="thumbnail">
																														<img src="images/g3.jpg" alt="" />
																													</div>
																												</div>
																												<div className="col-md-3 col-sm-3 col-xs-3 slidering">
																													<div className="thumbnail">
																														<img src="images/g4.jpg" alt="" />
																													</div>
																												</div>
																											</div>
																										</div>
																									</div>
																									<a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
																										<span className="fa fa-chevron-left" aria-hidden="true"></span>
																										<span className="sr-only">Previous</span>
																									</a>
																									<a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
																										<span className="fa fa-chevron-right" aria-hidden="true"></span>
																										<span className="sr-only">Next</span>
																									</a>

																								</div>
																							</div>

																							<div className="clearfix"> </div>
																						</div>
																						<div className="newsletter_w3layouts_agile">
																							<div className="col-sm-6 newsleft">
																								<h3>Sign up for Newsletter !</h3>
																							</div>
																							<div className="col-sm-6 newsright">
																								<form action="#" method="post">
																									<input type="email" placeholder="Enter your email..." name="email" required="" />
																									<input type="submit" value="Submit" />
																								</form>
																							</div>

																							<div className="clearfix"></div>
																						</div>
																						<div className="footer_agileinfo_w3">
																							<div className="footer_inner_info_w3ls_agileits">
																								<div className="col-md-3 footer-left">
																									<h2>
																										<a href="index.html">
																											<span>D</span>owny Shoes </a>
																									</h2>
																									<p>Lorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
																									<ul className="social-nav model-3d-0 footer-social social two">
																										<li>
																											<a className="facebook">
																												<div className="front">
																													<i className="fa fa-facebook" aria-hidden="true"></i>
																												</div>
																												<div className="back">
																													<i className="fa fa-facebook" aria-hidden="true"></i>
																												</div>
																											</a>
																										</li>
																										<li>
																											<a className="twitter">
																												<div className="front">
																													<i className="fa fa-twitter" aria-hidden="true"></i>
																												</div>
																												<div className="back">
																													<i className="fa fa-twitter" aria-hidden="true"></i>
																												</div>
																											</a>
																										</li>
																										<li>
																											<a className="instagram">
																												<div className="front">
																													<i className="fa fa-instagram" aria-hidden="true"></i>
																												</div>
																												<div className="back">
																													<i className="fa fa-instagram" aria-hidden="true"></i>
																												</div>
																											</a>
																										</li>
																										<li>
																											<a className="pinterest">
																												<div className="front">
																													<i className="fa fa-linkedin" aria-hidden="true"></i>
																												</div>
																												<div className="back">
																													<i className="fa fa-linkedin" aria-hidden="true"></i>
																												</div>
																											</a>
																										</li>
																									</ul>
																								</div>
																								<div className="col-md-9 footer-right">
																									<div className="sign-grds">
																										<div className="col-md-4 sign-gd">
																											<h4>Our
							<span>Information</span>
																											</h4>
																											<ul>
																												<li>
																													<a href="index.html">Home</a>
																												</li>
																												<li>
																													<a href="about.html">About</a>
																												</li>
																												<li>
																													<a href="404.html">Services</a>
																												</li>
																												<li>
																													<a href="404.html">Short Codes</a>
																												</li>
																												<li>
																													<a href="contact.html">Contact</a>
																												</li>
																											</ul>
																										</div>

																										<div className="col-md-5 sign-gd-two">
																											<h4>Store
							<span>Information</span>
																											</h4>
																											<div className="address">
																												<div className="address-grid">
																													<div className="address-left">
																														<i className="fa fa-phone" aria-hidden="true"></i>
																													</div>
																													<div className="address-right">
																														<h6>Phone Number</h6>
																														<p>+1 234 567 8901</p>
																													</div>
																													<div className="clearfix"> </div>
																												</div>
																												<div className="address-grid">
																													<div className="address-left">
																														<i className="fa fa-envelope" aria-hidden="true"></i>
																													</div>
																													<div className="address-right">
																														<h6>Email Address</h6>
																														<p>Email :
										<a href="mailto:example@email.com"> mail@example.com</a>
																														</p>
																													</div>
																													<div className="clearfix"> </div>
																												</div>
																												<div className="address-grid">
																													<div className="address-left">
																														<i className="fa fa-map-marker" aria-hidden="true"></i>
																													</div>
																													<div className="address-right">
																														<h6>Location</h6>
																														<p>Broome St, NY 10002,California, USA.
																					
									</p>
																													</div>
																													<div className="clearfix"> </div>
																												</div>
																											</div>
																										</div>
																										<div className="col-md-3 sign-gd flickr-post">
																											<h4>Flickr
							<span>Posts</span>
																											</h4>
																											<ul>
																												<li>
																													<a href="single.html">
																														<img src="images/t1.jpg" alt=" " className="img-responsive" />
																													</a>
																												</li>
																												<li>
																													<a href="single.html">
																														<img src="images/t2.jpg" alt=" " className="img-responsive" />
																													</a>
																												</li>
																												<li>
																													<a href="single.html">
																														<img src="images/t3.jpg" alt=" " className="img-responsive" />
																													</a>
																												</li>
																												<li>
																													<a href="single.html">
																														<img src="images/t4.jpg" alt=" " className="img-responsive" />
																													</a>
																												</li>
																												<li>
																													<a href="single.html">
																														<img src="images/t1.jpg" alt=" " className="img-responsive" />
																													</a>
																												</li>
																												<li>
																													<a href="single.html">
																														<img src="images/t2.jpg" alt=" " className="img-responsive" />
																													</a>
																												</li>
																												<li>
																													<a href="single.html">
																														<img src="images/t3.jpg" alt=" " className="img-responsive" />
																													</a>
																												</li>
																												<li>
																													<a href="single.html">
																														<img src="images/t2.jpg" alt=" " className="img-responsive" />
																													</a>
																												</li>
																												<li>
																													<a href="single.html">
																														<img src="images/t4.jpg" alt=" " className="img-responsive" />
																													</a>
																												</li>
																											</ul>
																										</div>
																										<div className="clearfix"></div>
																									</div>
																								</div>
																								<div className="clearfix"></div>

																								<p className="copy-right-w3ls-agileits">&copy 2018 Downy Shoes. All rights reserved | Design by
				<a href="http://w3layouts.com/">w3layouts</a>
																								</p>
																							</div>
																						</div>
																					</div>
																					<a href="#home" id="toTop" className="scroll" style="display: block;">
																						<span id="toTopHover" style="opacity: 1;"> </span>
																					</a>
																				</div>
																				)
																			}
}