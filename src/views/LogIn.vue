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
                        /> {{ this.date }}
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
      <div class="row" style="height: 500px">
        <div class="offset-md-4 col-md-4 my-5">
          <h3 class="mb-4">Login</h3>
          <hr />
          <div>
            <div class="alert alert-danger" role="alert" v-if="errorStatus">
              The credientials do not match!
            </div>
          </div>
          <form action="">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                id="email"
                type="email"
                class="form-control"
                v-model="userData.email"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                id="password"
                type="password"
                class="form-control"
                v-model="userData.password"
                v-on:keyup.enter="loginBtn()"
              />
            </div>
            <button class="btn btn-warning" type="button" @click="loginBtn()">
              Log In
            </button>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script src="../js/logIn.js"></script>
