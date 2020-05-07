
function domContentLoaded() {
    const book = document.getElementById('book');
    const ul = document.querySelector('ul');
    const btn = document.querySelector('button');
    const deleteAll = document.getElementById('delAll');
    const quantity = document.getElementById('quantity');
    const price = document.getElementById('price');
    const container = document.getElementById('container');
    
    
    deleteAll.className = 'hidden';
  
    deleteAll.addEventListener('click', function () {
      document.querySelectorAll('li').forEach(function (li) {
        li.remove();
      });
      hideDelBtn();
      book.focus();
    });
    container.addEventListener('keyup', function (event) {
      if (event.target.localName === 'input') {
        const trimmedvalue = book.value.trim();
        btn.disabled = book.value.trim() === '';
  
        if (trimmedvalue === '') {
          return;
        }
  
        if (event.key !== 'Enter') {
          return;
        }
        const product = new Book(trimmedvalue, parseInt(quantity.value, 10), price.value);
  
        ul.appendChild(product.toList());
        price.value = '';
        quantity.value = '';
        book.value = '';
        btn.disabled = true;
        hideDelBtn();
      }
    });
  
    btn.addEventListener('click', function () {
      const trimmedvalue = book.value.trim();
  
      const product = new Book(trimmedvalue, parseInt(quantity.value, 10), price.value);
  
      ul.appendChild(product.toList());
      price.value = '';
      quantity.value = '';
      book.value = '';
      btn.disabled = true;
      book.focus();
      hideDelBtn();
    });
  
    btn.disabled = true;
    book.focus();

    

  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      domContentLoaded();
    });
  } else {
    domContentLoaded();
  }
 
  function hideDelBtn() {
    if (document.querySelectorAll('li').length < 2) {
      document.getElementById('delAll').className = 'hidden';
    } else {
      document.getElementById('delAll').className = '';
    }
  }
