1-Crud
1.1:db.resturant.find().pretty()
1.2: db.resturant.find({cuisine:"asian"})
1.3: db.restuarnt.find({kosher:true})
1.4: db.restuarnt.find({"address.city": "Tel-Aviv"})
1.5: db.restuarnt.find({"address.street" : "Stam Address 15"})
1.6: db.restuarnt.find({"adress.cordinate":[20.46574, -40.67774] }})
1.7: db.restuarnt.sort({name:1})
1.8: db.restuarnt.find().sort({"address.city":1})
1.9: db.restuarnt.updateOne({"_id" : ObjectId("61e54343575479ff7e4b79a6")},{$set:{"name": "hii"}});
1.10:db.restuarnt.updateOne({"_id" : ObjectId("61e54343575479ff7e4b79a6")},{$push:{"reviews": {date:new Date(score: 100}}});
1.11: db.restuarnt.updateMany({}, {$set:{kosher: true}});
1.12: db.restuarnt.deleteOne({"_id" : ObjectId("61e54343575479ff7e4b79a6")});

2- forEach Queries
2.1: db.restuarnt.find().forEach((rest)=> print (rest.name))
2.2: db.restuarnt.find().forEach((rest)=> print (rest.address.city));
2.3  db.restuarnt.find().forEach((rest)=> print (rest.address.coordinates));

3- Advanced Queries
3.1: db.restuarnt.find({"name": /^a/}).pretty();
3.2: db.restuarnt.find().count();
3.3: db.restuarnt.find({"reviews.date":ISODate("2016-01-01T00:00:00Z")}).pretty();
     db.restaurants.find({"reviews.date": {$in:[ISODate("2020-01-01T00:00:00Z")]}}).pretty();

4- Aggregation operations
4.1: db.restaurants.aggregate([{ $group: { _id: "_id", $avg: "$reviews.score" } }]);
4.2: db.restaurants.aggregate([{$project: {  avgScore: { $avg: "$reviews.score" },},},]);