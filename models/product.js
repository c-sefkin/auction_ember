Auction.Product = DS.Model.extend({
  description: DS.attr(),
  owner: DS.attr(),
  bid: DS.attr(),
  price: DS.attr(),
  story: DS.attr(),
  image: DS.attr(),
  year: DS.attr(),


  type: DS.belongsTo('type', {async: true})
});
