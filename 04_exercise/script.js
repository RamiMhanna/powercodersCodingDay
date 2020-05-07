    class Book {
        constructor(name, quantity, price) {
          this.name = name;
          this.quantity = quantity;
          this.price = price;
        }
        toList() {
            const li = document.createElement('li');
            const span = document.createElement('span');
            const deleteBox = document.createElement('button');
        
            deleteBox.addEventListener('click', function () {
              li.remove();
              hideDelBtn();
            });
        
            span.innerText = this.name;
            li.appendChild(span);
            console.log(this.quantity);
        
            if (this.quantity !== 0) {
              const status = document.createElement('span');
              const qty = document.createTextNode(`  Available  `);
              status.appendChild(qty);
              li.appendChild(status);
            } 
            else {
              const status = document.createElement('span');
              const qty = document.createTextNode(`  Sold  `);
              status.appendChild(qty);
              li.appendChild(status);                
            }

            const price = document.createElement('span');
            price.innerText = this.price;
            li.appendChild(price);
        
            deleteBox.innerText = 'Delete';
            li.appendChild(deleteBox);
            console.log(li);
            return li;
          }
        }

        let books = [
            {
            name: "Book 1",
            quantity: 24,
            price: 55
            }, 
            {
            name: "Book 2",
            quantity: 0,
            price: 45
            },
            {
            name: "Book 3",
            quantity: 56,
            price: 65
            }
            ];
        
            books.forEach(element => {
                let product = new Book(element.name, element.quantity, element.price)
                document.querySelector('ul').appendChild(product.toList());        
            });
