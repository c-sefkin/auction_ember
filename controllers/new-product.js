Auction.NewProductController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var product = this.get('model');
      product.save();

      var controller = this;
      product.get('type').then(function(type) {
        type.save();
        controller.transitionToRoute('type', type);
      });
    }
  }
});
