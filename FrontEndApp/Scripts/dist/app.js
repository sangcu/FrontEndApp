var App = Ember.Application.create({});

App.Router.map(function () {
    this.route('about', { path: '/about' });
    this.route('favorites', { path: '/favs' });
});