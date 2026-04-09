const tableBody = document.getElementById("tableBody");
const modal = document.getElementById("modal");

let data = [];

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const json = await response.json();

  data = json.map(user => ({
    name: user.name,
    email: user.email,
    mobile: user.phone,
    age: Math.floor(Math.random() * 50) + 20
  }));

  renderTable();
};

const renderTable = () => {
  tableBody.innerHTML = "";
  data.forEach(user => {
    const row = `
      <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.mobile}</td>
        <td>${user.age}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
};

document.getElementById("openModal").addEventListener("click", () => {
  modal.classList.add("show");
});

document.getElementById("closeModal").addEventListener("click", () => {
  modal.classList.remove("show");
});

document.getElementById("submitForm").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const age = document.getElementById("age").value;

  if (!name || !email || !mobile || !age) {
    alert("Please fill all fields");
    return;
  }

  const newUser = { name, email, mobile, age };

  data.unshift(newUser);

  renderTable();

  modal.classList.remove("show");

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("age").value = "";
});

fetchData();