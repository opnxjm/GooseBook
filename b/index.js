const https = require('https');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'server2.bsthun.com',
  user: 'lab_1seeas',
  port: "6105",
  password: 'FFa0LjByPPlG1clt',
  database: 'lab_blank01_1s3kdhx'
});

// Open Library API URL
const url = 'https://covers.openlibrary.org/b/isbn/{ISBN}-M.jpg';

// Array of books
const books = [
//   {
//     ISBN: '9781538734717',
//     title: 'Psychology of Money',
//     author: 'Morgan Housel',
//     publisher: 'Harriman House',
//     published_year: '2020',
//     book_description: 'A guide to the psychology of money.',
//     language: 'en'
//   },
//   {
//     ISBN: '9780552572712',
//     title: '365 Days Of Wonder',
//     author: 'R. J. Palacio',
//     publisher: 'Random House',
//     published_year: '2020',
//     book_description: "A book of precepts, with one saying for each day, from Auggie's teacher Mr. Brown--",
//     language: 'en'
//   },
//   {
//     ISBN: '9781788171823',
//     title: 'Good Vibes, Good Life',
//     author: 'Vex King',
//     publisher: 'Hay House, Incorporated',
//     published_year: '2018',
//     book_description: "a book about manifesting what you want, living meaningfully, and appreciating the little things. The author explains how to be happy with yourself by embracing what is already there. With this knowledge as a foundation, you can start manifesting right away.",
//     language: 'en'
//   },
//   {
//     ISBN: '9781401961244',
//     title: 'Healing Is the New High',
//     author: 'Vex King',
//     publisher: 'Hay House, Incorporated',
//     published_year: '2021',
//     book_description: "aking charge of your inner healing is one of the greatest acts of self-love. By committing to this process and raising your vibration – the energy that courses through you and you radiate out into the world – you'll create space to welcome more joyful experiences into your life.",
//     language: 'en'
//   },
    // {
    //     ISBN: '9780375869020',
    //     title: 'Wonder',
    //     author: 'R. J. Palacio',
    //     publisher: 'Random House',
    //     published_year: '2012',
    //     book_description: 'Ten-year-old Auggie Pullman, who was born with extreme facial abnormalities and was not expected to survive, goes from being home-schooled to entering fifth grade at a private middle school in Manhattan, which entails enduring the taunting and fear of his classmates as he struggles to be seen as just another student.',
    //     language: 'en'
    //   },
    // {
    //     ISBN: '9781594631207',
    //     title: 'Emotional first aid',
    //     author: 'Guy Winch',
    //     publisher: 'Not stated',
    //     published_year: '2013',
    //     book_description: 'practical strategies for treating failure, rejection, guilt, and other everyday psychological injuries',
    //     language: 'en'
    //   },
    {
        ISBN: '9781432890292',
        title: 'Comfort Book',
        author: 'Matt Haig',
        publisher: 'Cengage Gale',
        published_year: '2021',
        book_description: 'The Comfort Book explores how depression feels like and its effects on our mind and body, and how we can overcome it by taking small, but significant steps in that direction, starting with finding hope, being more present at the moment, and acknowledging that we\'re enough.',
        language: 'en'
      },
];

// Loop through the books and download their cover images
books.forEach((book) => {
  https.get(url.replace('{ISBN}', book.ISBN), (res) => {
    let imageData = '';
    res.setEncoding('binary');
    res.on('data', (chunk) => {
      imageData += chunk;
    });
    res.on('end', () => {
      // Insert the book and book cover image into the database
      const bookData = {
        ...book,
        book_cover: Buffer.from(imageData, 'binary')
      };
      connection.query('INSERT INTO book SET ?', bookData, (error, results, fields) => {
        if (error) throw error;
        console.log(`Book ${bookData.ISBN} inserted successfully`);
      });
    });
  }).on('error', (error) => {
    console.error(`Error downloading book cover for ${book.ISBN}: ${error.message}`);
  });
});
