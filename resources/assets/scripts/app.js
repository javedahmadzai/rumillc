/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Slider from './components/slider';
import Testimonials from './components/testimonials';
import GoogleMap from './components/gmap';
import Contact from './components/contact';
import Gallery from './components/gallery';
import Subscribe from './components/subscribe';
import Categories from './components/categories';
import ProductPage from './components/product-page';

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.config.performance = true;

new Vue({
  strict    : true,
  el        : '#app',
  components: {
    'slider-component'      : Slider,
    'testimonials-component': Testimonials,
    'gmap-component'        : GoogleMap,
    'contact-component'     : Contact,
    'gallery-component'     : Gallery,
    'subscribe-component'   : Subscribe,
    'categories-component'  : Categories,
    'productpage-component' : ProductPage
  }
});

// ============================================================================

document.getElementById('toggle').addEventListener('click', function() {
  this.classList.toggle('toggle--change');
  document.getElementById('navbar').classList.toggle('navbar--toggle');
});

const accordion = document.getElementById('accordion');
if (accordion) {
  Array.from(accordion.children).forEach(element => {
    element.firstElementChild.addEventListener('click', function() {
      this.classList.toggle('head--active');
      this.firstElementChild.classList.toggle('fa-caret-right');
      this.firstElementChild.classList.toggle('fa-caret-down');
      this.nextElementSibling.classList.toggle('body--active');
    });
  });
}

let swaper = document.getElementById('swaper');
if (swaper) {
  swaper = swaper.children;

  setInterval(() => {
    let src = null;
    for (let i = 0; i < swaper.length; i++) {
      if (src === null) {
        src = swaper[i].firstChild.src;
      }
      if (i < swaper.length - 1) {
        swaper[i].firstChild.src = swaper[i + 1].firstChild.src;
      }
      if (i == swaper.length - 1) {
        swaper[i].firstChild.src = src;
      }
    }
    src = null;
  }, 3000);
}
