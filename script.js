const showClassContainer = document.getElementById("show-class-container");

const showClasses = document.getElementById("show-classes");

showClasses.addEventListener("click", () => {
  const classTable = document.getElementById("classes-table");

  classTable.style.display = "table";

  showClassContainer.style.display = "none";
  loadClasses();
});

let data = [];
async function loadClasses() {
  try {
    const response = await fetch("classes.json");
    if (!response.ok) {
      throw new Error("Network error");
    }

    data = await response.json();

    displayClasses(data);
  } catch (error) {
    console.log(error.message);
  }
}

function displayClasses(Data) {
  console.log(JSON.stringify(Data));

  const dummyDat = Data.map((dataItem, index) => {
    return `<tr >
					<td>${index + 1}</td>
					<td>${dataItem.name}</td>
					
					<td>${dataItem.duration}</td>
					<td>${dataItem.intensity}</td>
					
					<td>${dataItem.category}</td>
					<td>${dataItem.instructor}</td>
					<td>${dataItem.popularity}</td>
					
				</tr>`;
  }).join("");

  document.getElementById("classes-data").innerHTML = dummyDat;
}
