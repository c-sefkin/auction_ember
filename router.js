Auction.Router.map(function() {
  this.resource('types', {path: '/'});
  this.resource('type', {path: ':type_id'}, function() {
    this.resource('new-product');
  });
  this.resource('new-type');
  this.resource('recent-products');
});
