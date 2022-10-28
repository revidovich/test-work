const data = {
  "books":[

    {
      "id" : 1,
      "title": "Harry Potter",
      "authors" : [
        {
          "id" : 1,
          "name" : "Hagrid"
        }, {
          "id" : 2,
          "name" : "Dobby"
        }
      ],
      "publisher" : {
        "id" : 1,
        "name" : "Hogwarts Inc"
      }
    },

    {
      "id" : 2,
      "title": "Lord of the rings",
      "authors" : [
        {
          "id" : 3,
          "name" : "Merry"
        }, {
          "id" : 4,
          "name" : "Pippin"
        }
      ],
      "publisher" : {
        "id" : 2,
        "name" : "Gandalf Inc"
      }
    },

    {
      "id" : 3,
      "title": "Lord of Hogwarts",
      "authors" : [
        {
          "id" : 2,
          "name" : "Dobby"
        }, {
          "id" : 4,
          "name" : "Pippin"
        }
      ],
      "publisher" : {
        "id" : 3,
        "name" : "Gandalf Inc"
      }
    }
    
]
}

export default function fetchData() {
	return Promise.resolve(data);
}