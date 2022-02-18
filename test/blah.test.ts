import { Firestore } from '../src';

var firestore = new Firestore();

firestore.setCollection(["aCollection"]);
var collection = firestore.getCollection();
collection == "aCollection";
