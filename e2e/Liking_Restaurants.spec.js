const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.restaurant-item__not__found');
  I.see('Tidak ada Restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada Restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  const fitstRestaurant = locate('.restaurant__title a');
  const firstResturantTitle = await I.grabTextFrom(fitstRestaurant);
  I.click(fitstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const likedRestaurantTilte = await I.grabTextFrom('.restaurant__title');

  assert.strictEqual(firstResturantTitle, likedRestaurantTilte);
});

Scenario('Unlike one restaurant', async ({ I }) => {
  I.see('Tidak ada Restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.post-item');
  const fitstRestaurant = locate('.restaurant__title a');
  const firstResturantTitle = await I.grabTextFrom(fitstRestaurant);
  I.click(firstResturantTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  I.click(firstResturantTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada Restaurant untuk ditampilkan', '.restaurant-item__not__found');
});
