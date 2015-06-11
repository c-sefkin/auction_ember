Auction.Product = DS.Model.extend({
  description: DS.attr(),
  owner: DS.attr(),
  type: DS.belongsTo('type', {async: true})
});
