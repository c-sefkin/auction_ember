Auction.NewProductRoute = Ember.Route.extend({
  model: function(params) {
    var type = this.modelFor('type');
    var product = this.store.createRecord('product');
    type.get('products').then(function(products) {
      products.pushObject(product);
    });
    return product;
  }
});
