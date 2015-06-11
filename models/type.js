Auction.Type = DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  products: DS.hasMany('product', {async: true})
});
