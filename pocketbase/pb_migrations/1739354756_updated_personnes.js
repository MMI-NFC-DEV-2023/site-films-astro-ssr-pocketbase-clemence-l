/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("idhhhuzny731ebc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mzqplsp8",
    "name": "nationalite",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Français",
        "Américain",
        "Britannique"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("idhhhuzny731ebc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mzqplsp8",
    "name": "nationalite",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Français",
        "Américain",
        "Anglais"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
