/**
 * Created by chapm250 on 12/4/15.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// Connect to the db
MongoClient.connect("mongodb://146.57.34.125:2111/dolan", function(err, db) {
  if(err) { return console.dir(err); }
    var testarray = [];
    var testarray2 = []
    var resultsarray = [];
    var collection = db.collection('test');
    var collection2 = db.collection('test2');

///tried to use distinct but js got mad at me

    collection.find({}, {b:1, _id:0}).toArray(function(err, array1){
        for(i = 0; i < array1.length; i++) {
            testarray.push(array1[i].b)
        }
        collection2.find({}, {b:1, _id:0}).toArray(function(err, array2){
            for(j = 0; j < array2.length; j++) {
                if(testarray.indexOf(array2[j].b) > -1) {
                    testarray2.push(array2[j].b)
                    console.log(testarray2.length)
                }
            }
            for(q = 0; q < testarray2.length; q++){
                if(resultsarray.indexOf(testarray2[q]) == -1) {
                    resultsarray.push(testarray2[q]);
                    console.log(resultsarray.length)
                }
            }

        });
    });


});

