Auction.NewTypeController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newType = this.store.createRecord('type', {
        title: this.get('title'),
        body: this.get('body')
      });
      newType.save();
      this.transitionToRoute('types');
    }
  }
});
