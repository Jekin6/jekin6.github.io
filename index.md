---
layout: default
---

<body>
  <div class="index-wrapper">
    <div class="aside">
      <div class="info-card">
        <h1>Jekin's Blog</h1>
        <a href="http://weibo.com/u/2360710600" target="_blank"><img src="https://www.weibo.com/favicon.ico" alt="" width="25"/></a>
        <a href="http://github.com/Jekin6/" target="_blank"><img src="https://github.com/favicon.ico" alt="" width="22"/></a>
        <a href="http://instagram.com/jekin6/" target="_blank"><img src="https://d36xtkk24g8jdx.cloudfront.net/bluebar/00c6602/images/ico/favicon.ico" alt="" width="22"/></a>
      </div>
      <div id="particles-js"></div>
      <div class="count-particles">
        <span class="js-count-particles">--</span> particles
      </div>
      <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
      <script src="https://threejs.org/examples/js/libs/stats.min.js"></script>
      <script src="/js/particles.js"></script>
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
