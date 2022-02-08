import FavoriteResturantIdb from '../../data/favoriteresturant-idb';
import FavoriteRestaurantSearchView from './liked-restaurant/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './liked-restaurant/favorite-restaurant-show-presenter';

const view = new FavoriteRestaurantSearchView();

const skipLinkElem = document.querySelector('.skip-link');
skipLinkElem.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#content').focus();
});
const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantSearchView({ view, favoriteRestaurants: FavoriteResturantIdb });
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteResturantIdb });
  },

};
export default Favorite;
