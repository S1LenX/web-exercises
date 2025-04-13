function calculateTotal() {
    let adultTickets = document.getElementById("adults").value;
    let childTickets = document.getElementById("children").value;

    adultTickets = Number(adultTickets);
    childTickets = Number(childTickets);

    if (isNaN(adultTickets) || isNaN(childTickets) || adultTickets < 0 || childTickets < 0) {
        alert("Please enter valid ticket numbers.");
        return;
    }

    let totalCost = (adultTickets * 10) + (childTickets * 5);
    document.getElementById("totalAmount").value = "₹" + totalCost;
}
