Auction.TypesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('type');
  }
});
