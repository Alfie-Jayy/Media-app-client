<template>
  <div>
    <header>
      <!-- Header Start -->
      <div class="header-area">
        <div class="main-header">
          <div class="header-top black-bg d-none d-md-block">
            <div class="container">
              <div class="col-xl-12">
                <div class="row d-flex justify-content-between align-items-center">
                  <div class="header-info-left">
                    <ul>
                      <li>
                        <img src="assets/img/icon/header_icon1.png" alt="" />34ºc, Sunny
                      </li>
                      <li>
                        <img src="assets/img/icon/header_icon1.png" alt="" />{{ date }}
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
                    <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
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
                    <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                  </div>

                  <!-- Main-menu -->
                  <div class="main-menu">
                    <nav>
                      <ul id="navigation">
                        <li @click="home()"><a>Home</a></li>
                        <li @click="contact()"><a>Contact</a></li>
                        <li v-if="!tokenStatus" @click="login()"><a>Login</a></li>
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
      <!-- Whats New Start -->
      <section class="whats-news-area pt-50 pb-20">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="row d-flex justify-content-between">
                <div class="col-lg-3 col-md-3">
                  <div class="section-tittle mb-30">
                    <h3>Whats New</h3>
                  </div>
                </div>
                <div class="col-lg-9 col-md-9">
                  <div class="properties__button">
                    <!--Nav Button  -->
                    <nav>
                      <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a
                          class="nav-item nav-link active"
                          id="nav-home-tab"
                          data-toggle="tab"
                          href="details.htmlnav-home"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                          @click="CategoryNav()"
                          >All</a
                        >
                        <a
                          class="nav-item nav-link"
                          id="nav-profile-tab"
                          data-toggle="tab"
                          href="details.htmlnav-profile"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                          v-for="(category, index) in categories"
                          :key="index"
                          @click="CategoryNav(category.category_id)"
                          >{{ category.title }}</a
                        >
                      </div>
                    </nav>
                    <!--End Nav Button  -->
                  </div>
                </div>
              </div>

              <div class="row" v-if="tokenStatus" style="padding: 0 100px 0" >
                
                <div class="d-flex mb-4 col-3 offset-9">
                  <input
                    type="text"
                    class="form-control"
                    v-model="key"
                    v-on:keyup.enter="search()"
                  />
                  <i
                    @click="search()"
                    class="fa-solid fa-magnifying-glass fa-lg align-self-center ml-2"
                  ></i>
                </div>
                
                <div class="col-12">
                  <!-- Nav Card -->
                  <div class="tab-content" id="nav-tabContent">
                    <!-- card one -->
                    <div
                      class="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div class="whats-news-caption">
                        <div class="row">
                          <div v-if="posts.length == 0" class="mx-auto mb-5">
                            <h3>Sorry , Here is no data!</h3>
                          </div>

                          <div
                            v-else-if="posts.length > 0"
                            class="col-lg-6 col-md-6"
                            v-for="(post, index) in posts"
                            :key="index"
                          >
                            <div
                              class="single-what-news mb-100"
                              @click="viewDetail(post.post_id)"
                            >
                              <div class="what-img">
                                <img v-bind:src="post.image" alt="" />
                              </div>
                              <div class="what-cap">
                                <span class="color1">{{ post.category_title }}</span>
                                <h4>
                                  <a @click="viewDetail(post.post_id)">{{ post.title }}</a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End Nav Card -->
                </div>
              </div>

              <div class="p-5 text-center" v-else-if="!tokenStatus">
                <p>You don't have permission to this page. You need to login first.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Whats New End -->

      <!--Start pagination -->
      <div class="pagination-area pb-45 text-center">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="single-wrap d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-start">
                    <li class="page-item">
                      <a class="page-link" href="details.html"
                        ><span class="flaticon-arrow roted"></span
                      ></a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link" href="details.html">01</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="details.html">02</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="details.html">03</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="details.html"
                        ><span class="flaticon-arrow right-arrow"></span
                      ></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End pagination  -->
    </main>
  </div>
</template>

<script src="../js/home.js"></script>
