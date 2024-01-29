<template>
    <div>
      <header>
        <!-- Header Start -->
        <div class="header-area">
          <div class="main-header">
            <div class="header-top black-bg d-none d-md-block">
              <div class="container">
                <div class="col-xl-12">
                  <div
                    class="row d-flex justify-content-between align-items-center"
                  >
                    <div class="header-info-left">
                      <ul>
                        <li>
                          <img
                            src="assets/img/icon/header_icon1.png"
                            alt=""
                          />34ºc, Sunny
                        </li>
                        <li>
                          <img
                            src="assets/img/icon/header_icon1.png"
                            alt=""
                          />{{ date }}
                        </li>
                      </ul>
                    </div>
                    <div class="header-info-right">
                      <ul class="header-social">
                        <li>
                          <a href="#"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li>
                          <a href="#"><i class="fab fa-instagram"></i></a>
                        </li>
                        <li>
                          <a href="#"><i class="fab fa-pinterest-p"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="header-mid d-none d-md-block">
              <div class="container">
                <div class="row d-flex align-items-center">
                  <!-- Logo -->
                  <div class="col-xl-3 col-lg-3 col-md-3">
                    <div class="logo">
                      <a href="index.html"
                        ><img src="assets/img/logo/logo.png" alt=""
                      /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="header-bottom header-sticky">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-xl-10 col-lg-10 col-md-12 header-flex">
                    <!-- sticky -->
                    <div class="sticky-logo">
                      <a href="index.html"
                        ><img src="assets/img/logo/logo.png" alt=""
                      /></a>
                    </div>
  
                    <!-- Main-menu -->
                    <div class="main-menu">
                      <nav>
                        <ul id="navigation">
                          <li @click="home()"><a>Home</a></li>
                          <li @click="contact()"><a>Contact</a></li>
                          <li v-if="!tokenStatus"  @click="login()"><a>Login</a></li>
                          <li v-else-if="tokenStatus" @click="logout()"><a>Logout</a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
  
                  <!-- Mobile Menu -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Header End -->
      </header>
  
      <main>
        <div class="container-fluid">
            <div class="row" style="padding: 100px" >
                    <div class="col-12">
                        <h2 class="contact-title">Get in Touch</h2>
                    </div>
                    <div class="col-lg-8">
                        <form class="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <textarea class="form-control w-100" name="message" id="message" cols="30" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder=" Enter Message"></textarea>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input class="form-control valid" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input class="form-control valid" name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <input class="form-control" name="subject" id="subject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter Subject">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mt-3">
                                <button type="submit" class="button button-contactForm boxed-btn">Send</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-3 offset-lg-1">
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-home"></i></span>
                            <div class="media-body">
                                <h3>Buttonwood, California.</h3>
                                <p>Rosemead, CA 91770</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                            <div class="media-body">
                                <h3>+1 253 565 2365</h3>
                                <p>Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-email"></i></span>
                            <div class="media-body">
                                <h3>support@colorlib.com</h3>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
      </main>
    </div>
  </template>
  
  <script src="../js/contact.js"></script>
  