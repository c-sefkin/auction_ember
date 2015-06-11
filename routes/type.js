Auction.TypeRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('type', params.type_id);
  }
});
