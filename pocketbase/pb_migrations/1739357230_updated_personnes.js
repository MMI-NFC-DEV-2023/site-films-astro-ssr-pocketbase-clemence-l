/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1335826611")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select15235461",
    "maxSelect": 7,
    "name": "profession",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "acteur",
      "actrice",
      "réalisateur",
      "réalisatrice",
      "producteur",
      "productrice",
      "scénariste"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1335826611")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select15235461",
    "maxSelect": 1,
    "name": "preofession",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "acteur",
      "actrice",
      "réalisateur",
      "réalisatrice",
      "producteur",
      "productrice",
      "scénariste"
    ]
  }))

  return app.save(collection)
})
