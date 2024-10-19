// Initial highest bid
let currentHighestBid = 150;

// Function to handle form submission
document.getElementById('bid-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the bid amount from the input
    const bidAmount = parseFloat(document.getElementById('bid-amount').value);

    // Check if the bid amount is higher than the current highest bid
    if (bidAmount > currentHighestBid) {
        // Update the current highest bid
        currentHighestBid = bidAmount;
        document.getElementById('highest-bid').textContent = `Current Highest Bid: $${currentHighestBid}`;

        // Display success message
        document.getElementById('bid-message').innerHTML = `<p style="color: green;">Your bid of $${bidAmount} is the highest!</p>`;
    } else {
        // Display error message if the bid is not higher
        document.getElementById('bid-message').innerHTML = `<p style="color: red;">Your bid must be higher than the current highest bid of $${currentHighestBid}.</p>`;
    }

    // Clear the input field
    document.getElementById('bid-amount').value = '';
});
