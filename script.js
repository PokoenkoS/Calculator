const data = {
    quantity: 0,
    price: 0,
    calcTotalPrice() {
      return (this.quantity * this.price).toFixed(2);
    },
  };
  
  //dom links
  const mainForm = document.getElementById("form");
  const priceInput = document.getElementById("price");
  const quantityInput = document.getElementById("quantity");
  const amount = document.getElementById("amount");
  const total = document.getElementById("total");
  
  //data fill
  dataFill();
  displayTotal();
  
  //events
  mainForm.addEventListener("change", handleFormChange);
  
  //functions
  function handleFormChange({ target }) {
    const { value } = target;
  
    if (target === priceInput) {
      if (!Number(value)) {
        return;
      }
    } else if (target === quantityInput) {
      amount.textContent = value;
    }
  
    target.setAttribute("value", value);
    dataFill();
    displayTotal();
  }
  
  function dataFill() {
    data.quantity = quantityInput.getAttribute("value");
    data.price = priceInput.getAttribute("value");
  }
  
  function displayTotal() {
    total.textContent = data.calcTotalPrice() + " grn";
  }