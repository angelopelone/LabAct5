// This code runs after the DOM (document) has fully loaded.
document.addEventListener("DOMContentLoaded", function () {
    // Get references to HTML elements we'll be working with
    const dataList = document.getElementById("data-list"); // The list where data will be displayed
    const errorMessage = document.getElementById("error-message"); // Element to display error messages

    // Function to fetch data from an external API
    async function fetchData() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!response.ok) {
                throw new Error("Network response was not ok.");
            }
            const data = await response.json();
            displayData(data); // Display the retrieved data
        } catch (error) {
            handleErrorMessage(error); // Handle and display any errors that occur during the fetch
        }
    }

    // Function to display data in the HTML
    function displayData(data) {
        dataList.innerHTML = ""; // Clear the existing data list
        data.forEach(item => {
            const listItem = createListItem(item); // Create a list item for each data item
            dataList.appendChild(listItem); // Append the list item to the data list

            // Add event listeners for the "Edit" and "Delete" buttons on each list item
            const editButton = listItem.querySelector(".edit-btn");
            const deleteButton = listItem.querySelector(".delete-btn");

            editButton.addEventListener("click", () => {
                editItem(item, listItem); // Handle the "Edit" button click
            });

            deleteButton.addEventListener("click", () => {
                deleteItem(item, listItem); // Handle the "Delete" button click
            });
        });
    }

    // Function to create a list item element
    function createListItem(item) {
        const listItem = document.createElement("li"); // Create a new list item element
        listItem.innerHTML = `
            <span class="item-text">${item.title}</span>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;
        return listItem; // Return the created list item
    }

    // Function to handle and display error messages
    function handleErrorMessage(error) {
        errorMessage.textContent = `Error: ${error.message}`;
        errorMessage.classList.remove("hidden");
    }

    // Initial fetch of data when the page loads
    fetchData();

    document.getElementById('input').value = '';

});