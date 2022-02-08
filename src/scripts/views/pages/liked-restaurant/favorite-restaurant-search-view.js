import { createResturantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
    <div class="content">
    <div class="latest">
      <h2 class="content__heading latest__label">Your Liked Restaurant</h2>
      <div id="restaurants" class="restaurants">
                
      </div> 
     </div>
    </div>
      `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    let html;

    if (restaurants.length > 0) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createResturantItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.querySelector('.restaurants').innerHTML = html;

    document.getElementById('restaurant-search-container')
      .dispatchEvent(new Event('restaurants:searched:updated'));
    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createResturantItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found">Tidak ada Restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
