 const showLangBtn = document.getElementById('show-language');
 showLangBtn.addEventListener('click', () => {
 	const languageTable = document.getElementById('language-table');

 	languageTable.style.display = 'table';
 	showLangBtn.style.display = 'none';
 	loadLanguages();
 });

let data = [];
async function loadLanguages()
{

	try {

		const response = await fetch("progLang.json");
		if (!response.ok) {
			throw new Error("Network error");
		}

		data = await response.json();

		displayLanguage(data);
		
		
	}
	catch(error) {
		
		console.log(error.message);
	}
}

function displayLanguage(Data){

console.log(JSON.stringify(Data));

const dummyDat =  Data.map((dataItem) => {

return `<tr >
					<td>${dataItem.id}</td>
					<td>${dataItem.name}</td>
					<td>${dataItem.popularity}</td>
					<td>${dataItem.syntax}</td>
					<td>${dataItem.usage}</td>
					<td>${dataItem.community}</td>
				</tr>`
}).join("");

document.getElementById('lang-data').innerHTML = dummyDat;
}