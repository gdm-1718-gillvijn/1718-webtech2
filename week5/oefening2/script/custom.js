var books = [
    {title: 'Harry Potter',
    author: 'J.K. Rowling',
    alreadyRead: false
    },
    {title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    alreadyRead: true
    },
    {title: 'De verschrikkelijke schoolmeester.',
    author: 'Dolf Verroen',
    alreadyRead: true
    }
    ];

    // hoe zorg ik ervoor dat er in de console Dolf Verroen gelogd wordt

    console.log(books[2].author);

    let divBooks = document.getElementById('books');

    for(let i = 0; i < books.length; i++) {

        let content = '';

        content = '<p>' + books[i].title + ' by ' + books[i].author + '</p>'

        if(books[i].alreadyRead) {
            // al gelezen
            content += '<p>It\'s time to read this novel!</p>';
        }
        else {
            //niet gelezen
            content += '<p>It\'s time to read this novel!</p>';
        }
    }

//constructor
        let Book = function(name, writer, alreadyRead) {

            this.title = name,
            this.author = writer,
            this.alreadyRead = alreadyRead,
            this.output = function() {
                if(this.alreadyRead) {
                    return "al gelezen";
                }
                else {
                    return "nog niet gelezen"
                }
            }
        }

    let myFavouriteBook = new Book('Twilight', 'Stephenie Meyer', false);
    let excitingNovel = new Book('The Da Vinci Code', 'Dan Brown', true);

    // .output geeft de return weer
    //je kan ook .title
    // na output () altijd!

    console.log(myFavouriteBook.output());

    console.log(excitingNovel);


