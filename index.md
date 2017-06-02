---
layout: default
---

<body>
  <div class="index-wrapper">
    <div class="aside">
      <div class="info-card">
        <h1>Jekin's Blog</h1>
        <a href="http://weibo.com/2360710600/" target="_blank"><img src="http://www.weibo.com/favicon.ico" alt="" width="25"/></a>
        <a href="http://github.com/Jekin6/" target="_blank"><img src="https://github.com/favicon.ico" alt="" width="22"/></a>
        <a href="http://instagram.com/jekin6/" target="_blank"><img src="http://d36xtkk24g8jdx.cloudfront.net/bluebar/00c6602/images/ico/favicon.ico" alt="" width="22"/></a>
      </div>
      <div id="particles-js"></div>
      <div class="count-particles">
        <span class="js-count-particles">--</span> particles
      </div>
      <script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
      <script src="https://threejs.org/examples/js/libs/stats.min.js"></script>
   <script>
   /* ---- particles.js config ---- */
   
   particlesJS("particles-js", {
     "particles": {
       "number": {
         "value": 380,
         "density": {
           "enable": true,
           "value_area": 800
         }
       },
       "color": {
         "value": "#ffffff"
       },
       "shape": {
         "type": "circle",
         "stroke": {
           "width": 0,
           "color": "#000000"
         },
         "polygon": {
           "nb_sides": 5
         },
         "image": {
           "src": "img/github.svg",
           "width": 100,
           "height": 100
         }
       },
       "opacity": {
         "value": 0.5,
         "random": false,
         "anim": {
           "enable": false,
           "speed": 1,
           "opacity_min": 0.1,
           "sync": false
         }
       },
       "size": {
         "value": 3,
         "random": true,
         "anim": {
           "enable": false,
           "speed": 40,
           "size_min": 0.1,
           "sync": false
         }
       },
       "line_linked": {
         "enable": true,
         "distance": 150,
         "color": "#ffffff",
         "opacity": 0.4,
         "width": 1
       },
       "move": {
         "enable": true,
         "speed": 6,
         "direction": "none",
         "random": false,
         "straight": false,
         "out_mode": "out",
         "bounce": false,
         "attract": {
           "enable": false,
           "rotateX": 600,
           "rotateY": 1200
         }
       }
     },
     "interactivity": {
       "detect_on": "canvas",
       "events": {
         "onhover": {
           "enable": true,
           "mode": "grab"
         },
         "onclick": {
           "enable": true,
           "mode": "push"
         },
         "resize": true
       },
       "modes": {
         "grab": {
           "distance": 140,
           "line_linked": {
             "opacity": 1
           }
         },
         "bubble": {
           "distance": 400,
           "size": 40,
           "duration": 2,
           "opacity": 8,
           "speed": 3
         },
         "repulse": {
           "distance": 200,
           "duration": 0.4
         },
         "push": {
           "particles_nb": 4
         },
         "remove": {
           "particles_nb": 2
         }
       }
     },
     "retina_detect": true
   });
   
   
   /* ---- stats.js config ---- */
   
   var count_particles, stats, update;
   stats = new Stats;
   stats.setMode(0);
   stats.domElement.style.position = 'absolute';
   stats.domElement.style.left = '0px';
   stats.domElement.style.top = '0px';
   document.body.appendChild(stats.domElement);
   count_particles = document.querySelector('.js-count-particles');
   update = function() {
     stats.begin();
     stats.end();
     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
       count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
     }
     requestAnimationFrame(update);
   };
   requestAnimationFrame(update);
   </script>
    </div>
    <div class="index-content">
      <ul class="artical-list">
        {% for post in site.categories.blog %}
        <li>
          <a href="{{ post.url }}" class="title">{{ post.title }}</a>
          <div class="title-desc">{{ post.description }}</div>
        </li>
        {% endfor %}
      </ul>
    </div>
  </div>
  
</body>
