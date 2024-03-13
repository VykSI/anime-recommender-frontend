<template>
    <body id="#top">

<!-- 
  - #HEADER
-->

<header class="header" data-header>
  <div class="container">

    <div class="overlay" data-overlay></div>

    <a href="./index.html" class="logo">
      <img src="./assets/images/logo.svg" alt="Filmlane logo">
    </a>

    <div class="header-actions">

      <button class="search-btn">
        <ion-icon name="search-outline"></ion-icon>
      </button>

      <div class="lang-wrapper">
        <label for="language">
          <ion-icon name="globe-outline"></ion-icon>
        </label>

        <select name="language" id="language">
          <option value="en">EN</option>
          <option value="au">AU</option>
          <option value="ar">AR</option>
          <option value="tu">TU</option>
        </select>
      </div>

      <button class="btn btn-primary" @click="this.$router.push('/')">{{data}}</button>

    </div>

    <button class="menu-open-btn" data-menu-open-btn>
      <ion-icon name="reorder-two"></ion-icon>
    </button>

    <nav class="navbar" data-navbar>

      <div class="navbar-top">

        <a href="./index.html" class="logo">
          <img src="./assets/images/logo.svg" alt="Filmlane logo">
        </a>

        <button class="menu-close-btn" data-menu-close-btn>
          <ion-icon name="close-outline"></ion-icon>
        </button>

      </div>

      <ul class="navbar-list">

        <li>
          <a href="/home" class="navbar-link">Home</a>
        </li>

        <li>
          <a href="#" class="navbar-link">Movie</a>
        </li>

        <li>
          <a href="#" class="navbar-link">Tv Show</a>
        </li>

        <li>
          <a href="#" class="navbar-link">Web Series</a>
        </li>

        <li>
          <a href="#" class="navbar-link">Pricing</a>
        </li>

      </ul>

      <ul class="navbar-social-list">

        <li>
          <a href="#" class="navbar-social-link">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" class="navbar-social-link">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" class="navbar-social-link">
            <ion-icon name="logo-pinterest"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" class="navbar-social-link">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" class="navbar-social-link">
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </li>

      </ul>

    </nav>

  </div>
</header>





<main>
  <article>

    <!-- 
      - #MOVIE DETAIL
    -->

    <section class="movie-detail">
      <div class="container">

        <figure class="movie-detail-banner">

          <img :src="image" alt="Free guy movie poster">

          <button class="play-btn">
            <ion-icon name="play-circle-outline"></ion-icon>
          </button>

        </figure>

        <div class="movie-detail-content">

          <p class="detail-subtitle">Anime Series</p>

          <h1 class="h1 detail-title">
            <strong>{{ title }}</strong>
          </h1>

          <div class="meta-wrapper">

            <div class="badge-wrapper">
              <div class="badge badge-fill">PG 13</div>

              <div class="badge badge-outline">HD</div>
            </div>

            <div class="ganre-wrapper">
              <a href="#">Comedy,</a>

              <a href="#">Action,</a>

              <a href="#">Adventure,</a>

              <a href="#">Science Fiction</a>
            </div>

            <div class="date-time">

              <div>
                <ion-icon name="calendar-outline"></ion-icon>

                <time datetime="2021">2021</time>
              </div>

              <div>
                <ion-icon name="time-outline"></ion-icon>

                <time datetime="PT115M">115 min</time>
              </div>

            </div>

          </div>

          <p class="storyline">
            {{description}}
          </p>

          <div class="details-actions">

            <button class="share">
              <ion-icon name="share-social"></ion-icon>

              <span>Share</span>
            </button>

            <div class="title-wrapper">
              <p class="title">Prime Video</p>

              <p class="text">Streaming Channels</p>
            </div>

            <button class="btn btn-primary">
              <ion-icon name="play"></ion-icon>

              <span>Watch Now</span>
            </button>

          </div>

          <a href="./assets/images/movie-4.png" download class="download-btn">
            <span>Download</span>

            <ion-icon name="download-outline"></ion-icon>
          </a>

        </div>

      </div>
    </section>





    <!-- 
      - #TV SERIES
    -->

    <section class="tv-series">
      <div class="container">

        <p class="section-subtitle">Recommended Animes</p>

        <h2 class="h2 section-title">World Best Anime Series</h2>

        <ul class="movies-list">

          <li>
            <div class="movie-card">

              <a :href="`/anime/${title1}`">
                <figure class="card-banner">
                  <img :src="image1" alt="Moon Knight movie poster">
                </figure>
              </a>

              <div class="title-wrapper">
                <a :href="`/anime/${title1}`">
                  <h3 class="card-title">{{title1}}</h3>
                </a>

                <time datetime="2022">2022</time>
              </div>

              <div class="card-meta">
                <div class="badge badge-outline">2K</div>

                <div class="duration">
                  <ion-icon name="time-outline"></ion-icon>

                  <time datetime="PT47M">47 min</time>
                </div>

                <div class="rating">
                  <ion-icon name="star"></ion-icon>

                  <data>8.6</data>
                </div>
              </div>

            </div>
          </li>

          <li>
            <div class="movie-card">

              <a :href="`/anime/${title2}`">
                <figure class="card-banner">
                  <img :src="image2" alt="Halo movie poster">
                </figure>
              </a>

              <div class="title-wrapper">
                <a :href="`/anime/${title2}`">
                  <h3 class="card-title">{{title2}}</h3>
                </a>

                <time datetime="2022">2022</time>
              </div>

              <div class="card-meta">
                <div class="badge badge-outline">2K</div>

                <div class="duration">
                  <ion-icon name="time-outline"></ion-icon>

                  <time datetime="PT59M">59 min</time>
                </div>

                <div class="rating">
                  <ion-icon name="star"></ion-icon>

                  <data>8.8</data>
                </div>
              </div>

            </div>
          </li>

          <li>
            <div class="movie-card">

              <a :href="`/anime/${title3}`">
                <figure class="card-banner">
                  <img :src="image3" alt="Vikings: Valhalla movie poster">
                </figure>
              </a>

              <div class="title-wrapper">
                <a :href="`/anime/${title3}`">
                  <h3 class="card-title">{{title3}}</h3>
                </a>

                <time datetime="2022">2022</time>
              </div>

              <div class="card-meta">
                <div class="badge badge-outline">2K</div>

                <div class="duration">
                  <ion-icon name="time-outline"></ion-icon>

                  <time datetime="PT51M">51 min</time>
                </div>

                <div class="rating">
                  <ion-icon name="star"></ion-icon>

                  <data>8.3</data>
                </div>
              </div>

            </div>
          </li>

          <li>
            <div class="movie-card">

              <a :href="`/anime/${title4}`">
                <figure class="card-banner">
                  <img :src="image4" alt="Money Heist movie poster">
                </figure>
              </a>

              <div class="title-wrapper">
                <a :href="`/anime/${title4}`">
                  <h3 class="card-title">{{title4}}</h3>
                </a>

                <time datetime="2017">2017</time>
              </div>

              <div class="card-meta">
                <div class="badge badge-outline">4K</div>

                <div class="duration">
                  <ion-icon name="time-outline"></ion-icon>

                  <time datetime="PT70M">70 min</time>
                </div>

                <div class="rating">
                  <ion-icon name="star"></ion-icon>

                  <data>8.3</data>
                </div>
              </div>

            </div>
          </li>

        </ul>

      </div>
    </section>

  </article>
</main>





<!-- 
  - #FOOTER
-->

<footer class="footer">

  <div class="footer-top">
    <div class="container">

      <div class="footer-brand-wrapper">

        <a href="./index.html" class="logo">
          <img src="./assets/images/logo.svg" alt="Filmlane logo">
        </a>

        <ul class="footer-list">

          <li>
            <a href="/home" class="footer-link">Home</a>
          </li>

          <li>
            <a href="#" class="footer-link">Movie</a>
          </li>

          <li>
            <a href="#" class="footer-link">TV Show</a>
          </li>

          <li>
            <a href="#" class="footer-link">Web Series</a>
          </li>

          <li>
            <a href="#" class="footer-link">Pricing</a>
          </li>

        </ul>

      </div>

      <div class="divider"></div>

      <div class="quicklink-wrapper">

        <ul class="quicklink-list">

          <li>
            <a href="#" class="quicklink-link">Faq</a>
          </li>

          <li>
            <a href="#" class="quicklink-link">Help center</a>
          </li>

          <li>
            <a href="#" class="quicklink-link">Terms of use</a>
          </li>

          <li>
            <a href="#" class="quicklink-link">Privacy</a>
          </li>

        </ul>

        <ul class="social-list">

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-pinterest"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

        </ul>

      </div>

    </div>
  </div>

  <div class="footer-bottom">
    <div class="container">

      <p class="copyright">
        &copy; 2022 <a href="#">codewithsadee</a>. All Rights Reserved
      </p>

      <img src="./assets/images/footer-bottom-img.png" alt="Online banking companies logo" class="footer-bottom-img">

    </div>
  </div>

</footer>





<!-- 
  - #GO TO TOP
-->

<a href="#top" class="go-top" data-go-top>
  <ion-icon name="chevron-up"></ion-icon>
</a>





<!-- 
  - custom js link
-->


<!-- 
  - ionicon link
-->

</body>
</template>

<script>
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
export default{
    data() {
    return {
      data:'Sign In',
      title:null,
      description:null,
      image:null,
      title1:null,
      description1:null,
      image1:null,
      title2:null,
      description2:null,
      image2:null,
      title3:null,
      description3:null,
      image3:null,
      title4:null,
      description4:null,
      image4:null,
    };
  },
    mounted(){
      
    const token = localStorage.getItem('token')||null;
    if(token){
            const decodedToken = jwtDecode(token);
            this.data = decodedToken.username;
    }
        let itemId = this.$route.params.id;
        itemId = itemId.replace(/\s+/g, '-');
        console.log(itemId);
        axios.get(`http://localhost:3000/anime?title=${itemId}`)
        .then(response => {
          this.title= response.data[0].titles[0].title;
          this.description=response.data[0].synopsis;
          this.image=response.data[0].images.jpg.large_image_url;
        })
        .catch(error => {
          console.error('Error fetching item details', error);
        });
        axios.get(`http://localhost:3000/recommend?title=${itemId}`)
        .then(response => {
          console.log(response.data);
          this.title1= response.data[4].title;
          this.description1=response.data[4].synopsis;
          this.image1=response.data[4].images.jpg.large_image_url;
          this.title2= response.data[1].title;
          this.description2=response.data[1].synopsis;
          this.image2=response.data[1].images.jpg.large_image_url;
          this.title3= response.data[2].title;
          this.description3=response.data[2].synopsis;
          this.image3=response.data[2].images.jpg.large_image_url;
          this.title4= response.data[3].title;
          this.description4=response.data[3].synopsis;
          this.image4=response.data[3].images.jpg.large_image_url;
        })
        .catch(error => {
          console.error('Error fetching item details', error);
        });

    }

}
</script>
<style>
@import './assets/css/style.css';
</style>