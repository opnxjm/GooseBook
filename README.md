# GooseBook
This application is designed for book enthusiasts to discover and review their favourite books. 

## Features
- User Authentication: Log in and sign up functionality for personalized user experience.
- Book Discovery: A collection of recommended books on the home page.
- Review: Users can add, edit, delete their reviews.
- Search: Users can search for specific books using the search function.

## To run the frontend and backend
Frontend -> f
```
  npm start
```
Backend -> b
```
  nodemon db.js
```
## API endpoints
### Login
URL
`
  POST /login
`
#### Request body
example
```
  {
    "email":"t1@mail.com",
    "pass": "1234"
  }
```
#### Success
```
  {
    "success": true,
    "message": "The password is correct",
    "user": {
        "user_id": 95270,
        "username": "t1",
        "password": "$2b$10$RIvNy1SMXLXdfkXo3bStH.KR4j3fSvZmFvZHaV9mJh6DK9IHq2cVS",
        "name": "test",
        "email": "t1@mail.com"
    }
  }
```

### Register
URL
`
  POST /create
`
#### Request body
example
```
  {
    "name": "test4",
    "username": "t4",
    "email": "t4@mail.com",
    "pass": "1234"
  }
```
#### Success
```
  {
    "status": 201,
    "message": "Successfully created account",
    "userId": 95286
  }
```

### Get user
URL
`
  GET /getUser/:userId
`
#### Success
example
```
  {
    "success": true,
    "message": "Found",
    "user": [
        {
            "user_id": 95270,
            "username": "t1",
            "password": "$2b$10$RIvNy1SMXLXdfkXo3bStH.KR4j3fSvZmFvZHaV9mJh6DK9IHq2cVS",
            "name": "test",
            "email": "t1@mail.com"
        }
      ]
  }
```
### Book overview
URL
`
  GET /book/:book_id
`
#### Success
example
```
  {
    "success": true,
    "message": "Found",
    "book": {
        "book_id": 1,
        "ISBN": "9781538734717",
        "title": "Psychology of Money",
        "author": "Morgan Housel",
        "publisher": "Harriman House",
        "published_year": "2020",
        "book_description": "A guide to the psychology of money. tired sm na ",
        "language": "en",
        "book_cover": "https://bci.kinokuniya.com/jsp/images/book-img/97808/97808571/9780857197689.JPG"
      }
  }
```
### Get Book review
URL
`
  GET /books/:book_id/comments
`
#### Success
example
```
  {
    "success": true,
    "message": "Found",
    "comment": [
        {
            "review": "good good",
            "review_id": 2
        },
        {
            "review": "resign ter",
            "review_id": 3
        }
    ]
}
```

### Add Book review
URL
`
  POST /addReview/:userId/:book_id
`
#### Request body
example
```
  {
    "review": "pls try"
  }
```
#### Success
```
  {
    "message": "Comment added successfully",
    "comment": "pls try"
  }
```

### Edit Book review
URL
`
  PATCH /updateReview/:book_id/:commentId
`
#### Request body
example
```
  {
    "review":"hi"
  }
```
#### Success
Response 
success: true

### Delete Book review
URL
`
  DELETE /review/:book_id/:commentId
`
#### Success
  success: true, 
  message:"Delete successfully"
  
### Search book
URL
`
  GET /search
`
#### Request body
example
```
  http://localhost:3008/search?title=Wonder
```
#### Success
Response 
```
  {
    "success": true,
    "message": "Found",
    "book": {
        "book_id": 5,
        "ISBN": "9780375869020",
        "title": "Wonder",
        "author": "R. J. Palacio",
        "publisher": "Random House",
        "published_year": "2012",
        "book_description": "Ten-year-old Auggie Pullman, who was born with extreme facial abnormalities and was not expected to survive, goes from being home-schooled to entering fifth grade at a private middle school in Manhattan, which entails enduring the taunting and fear of his classmates as he struggles to be seen as just another student.",
        "language": "en",
        "book_cover": "https://bci.kinokuniya.com/jsp/images/book-img/97805/97805933/9780593378175.JPG"
      }
  }
```

### Get book
URL
`
  GET /title
`
#### Success
  message:"Found" and all infomation of all books
