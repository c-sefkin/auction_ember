Auction.Product = DS.Model.extend({
  text: DS.attr(),
  type: DS.belongsTo('type', {async: true})
});
