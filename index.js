const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
  };

  let currentOrder = []; // Array to store ordered items

  function displayMenuItems(menu) {
    const menuContainer = document.getElementById('menu');

    for (const category in menu) {
      const categoryElement = document.createElement('div');
      categoryElement.innerHTML = `<h3>${category}</h3>`;

      const itemListElement = document.createElement('ul');

      const items = menu[category];

      items.forEach(item => {
        const listItemElement = document.createElement('li');
        listItemElement.textContent = item;

        // Add click event listener for adding and removing items
        listItemElement.addEventListener('click', () => {
          if (currentOrder.includes(item)) {
            removeFromOrder(item);
          } else {
            addToOrder(item);
          }
        });

        itemListElement.appendChild(listItemElement);
      });

      categoryElement.appendChild(itemListElement);
      menuContainer.appendChild(categoryElement);
    }
  }

  function addToOrder(itemName) {
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    currentOrder.push(itemName); // Add item to order array

    const orderListItem = document.createElement('li');
    orderListItem.textContent = itemName;

    // Add remove button to each order list item with click event listener (already added)

    orderItemsList.appendChild(orderListItem);

    updateOrderTotal();
  }

  function removeFromOrder(itemName) {
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    const itemIndex = currentOrder.indexOf(itemName);
    if (itemIndex !== -1) {
      currentOrder.splice(itemIndex, 1); // Remove item from order array

      for (let i = 0; i < orderItemsList.children.length; i++) {
        if (orderItemsList.children[i].textContent === itemName) {
          orderItemsList.removeChild(orderItemsList.children[i]);
          break; // Remove only the first matching item
        }
      }

      updateOrderTotal();
    }
  }

  function updateOrderTotal() {
    const orderTotalElement = document.getElementById('order-total');
    const totalPrice = currentOrder.length * 10; // Assuming each item costs $10

    orderTotalElement.textContent = "R" + totalPrice.toFixed(2);
  }

  function initMenuSystem(menu) {
    displayMenuItems(menu);
  }

  initMenuSystem(menu);
