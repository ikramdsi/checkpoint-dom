document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.querySelectorAll('.cart-item');
    let totalPrice = 0;
  
    cartItems.forEach(item => {
      const quantityInput = item.querySelector('.item-quantity');
      const incrementButton = item.querySelector('.increment-button');
      const decrementButton = item.querySelector('.decrement-button');
      const deleteButton = item.querySelector('.delete-button');
      const likeButton = item.querySelector('.like-button');
  
      incrementButton.addEventListener('click', () => {
        quantityInput.value++;
        updateTotalPrice();
      });
  
      decrementButton.addEventListener('click', () => {
        if (quantityInput.value > 1) {
          quantityInput.value--;
          updateTotalPrice();
        }
      });
  
      deleteButton.addEventListener('click', () => {
        item.remove();
        updateTotalPrice();
      });
  
      likeButton.addEventListener('click', () => {
        // Toggle the heart icon's color or style
        likeButton.classList.toggle('liked');
      });
    });
  
    function updateTotalPrice() {
      totalPrice = 0;
      cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('.item-price').textContent.slice(1));
        const quantity = parseInt(item.querySelector('.item-quantity').value);
        totalPrice += price * quantity;
      });
  
      // Update the total price display in your HTML
      document.querySelector('.total-price').textContent = `$${totalPrice.toFixed(2)}`;
    }
  });
  