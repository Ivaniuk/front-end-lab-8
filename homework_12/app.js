let rootNode = document.getElementById('root');

buildTanksPreview(tanks);

function buildTanksPreview(tanksArray) {
	let preview = document.createElement('div');
	let h1 = document.createElement('h1');
	h1.innerHTML = 'Most popular tanks';
	preview.appendChild(h1);

	for (let i = 0; i < tanksArray.length; i++) {		
	
		let figure = document.createElement('figure');
		let p = document.createElement('p');
		let imgTank = document.createElement('img');
		let imgFlag = document.createElement('img');
		let spanTankName = document.createElement('span');
		let spanTankLevel = document.createElement('span');
		let figcaption = document.createElement('figcaption');

		figure.setAttribute('title', 'Click to details');
		imgFlag.setAttribute('title', tanksArray[i].country);
		spanTankName.setAttribute('title', tanksArray[i].model);
		imgTank.setAttribute('src', tanksArray[i].preview);
		imgFlag.setAttribute('src', tanksArray[i].country_image);		
		spanTankLevel.setAttribute('class', 'tankLevel');		

		spanTankLevel.innerHTML = tanksArray[i].level;
		spanTankName.innerHTML = tanksArray[i].model;

		p.appendChild(imgTank);
		figcaption.appendChild(imgFlag);
		figcaption.appendChild(spanTankLevel);
		figcaption.appendChild(spanTankName);
		figure.appendChild(p);
		figure.appendChild(figcaption);		

		figure.addEventListener('click', () => {
			location.hash =  tanksArray[i].model;			
        });

        preview.appendChild(figure);
	}
	rootNode.appendChild(preview);	
}

function buildTanksDetails(tanksArray) {
	let details = document.createElement('div');
	let h1 = document.createElement('h1');
	let imgFlag = document.createElement('img');
	let spanTankName = document.createElement('span');
	let spanTankLevel = document.createElement('span');
	let imageContainer = document.createElement('div');
	let p = document.createElement('p');
	let imgTank = document.createElement('img');
	let tableContainer = document.createElement('div');

	imgFlag.setAttribute('src', tanksArray.country_image);
	imgFlag.setAttribute('title', tanksArray.country);
	spanTankName.setAttribute('class', 'tankName');
	imageContainer.setAttribute('class', 'imageContainer');
	imgTank.setAttribute('src', tanksArray.preview);
	
	spanTankName.innerHTML = tanksArray.model;
	spanTankLevel.innerHTML = '(level ' + tanksArray.level + ')';
	p.innerHTML = 'Preview';

	h1.appendChild(imgFlag);
	h1.appendChild(spanTankName);
	h1.appendChild(spanTankLevel);	
	imageContainer.appendChild(p);
	imageContainer.appendChild(imgTank);
	
	let table = document.createElement('table');
	let caption = document.createElement('caption');

	for (let prop in tanksArray.details) {
		let tr1 = document.createElement('tr');
		let td1 = document.createElement('td');
		let td2 = document.createElement('td');
		td1.setAttribute('class', 'tanksPropName');
		td1.innerHTML = prop.replace(/_/g, ' ');		
		td2.innerHTML = tanksArray.details[prop];
		tr1.appendChild(td1);
		tr1.appendChild(td2);
		table.appendChild(tr1);
	}

	tableContainer.setAttribute('class', 'tableContainer');
	caption.innerHTML = 'Characteristic';
	table.appendChild(caption);
	tableContainer.appendChild(table);

	let backToList = document.createElement('div');
	backToList.setAttribute('id', 'backToList');
	backToList.innerHTML = 'Back to list view';

	backToList.addEventListener('click', () => location.hash = '');

	details.appendChild(h1);
	details.appendChild(imageContainer);	
	details.appendChild(tableContainer);	
	details.appendChild(backToList);
	rootNode.appendChild(details);	
}

window.addEventListener('hashchange', () => {
    rootNode.innerHTML = '';    

    if ( location.hash === '' ) {
    	buildTanksPreview(tanks);
    }

    let hashValue = location.hash.slice(1);
       
    for (let i = 0; i < tanks.length; i++) {
        if ( hashValue === tanks[i].model ) {
            buildTanksDetails(tanks[i]);
        }
    }
});


