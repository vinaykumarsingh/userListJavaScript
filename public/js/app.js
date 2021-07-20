(function () {
// Add an event listener to button3
document.getElementById('button3').addEventListener('click', getDataFromExternalAPI);
document.getElementById('button4').addEventListener('click', showFullData);
document.getElementById('button4').classList.add('disabledButton');

// Function to get the data from an external API
function getDataFromExternalAPI() {
  console.log('button clicked')
  fetch('https://5dc588200bbd050014fb8ae1.mockapi.io/assessment')
    .then(res => res.json())
    .then(data => {
      console.log(data);

      // Displaying to the UI
      let output = '';
      data.forEach(function (user) {
        output += `<li id =${user.id}>
              <span>${user.name}</span>
              <span><img src=${user.avatar} alt="user"></span>
              <span class="hide">${user.id}</span>
              <span class="hide">${new Date(user.createdAt).toDateString()}</span></li>`
      });
      document.getElementById('output').innerHTML = output;
      document.getElementById('button4').classList.remove('disabledButton');
    })
    .catch(err => {
      console.log(err);

      // Displaying to the UI
      document.getElementById('output').innerHTML = err;
    });

}

function showFullData() {
  elements = document.getElementsByClassName("hide");
  Array.from(elements).forEach(function (element) {
    element.classList.contains('hide') ? element.classList = [] : null
  });
}
})();