let rootNode = document.getElementById('root');
let fileTree = document.createElement('div');

buildDOMTree(structure, fileTree);

rootNode.appendChild(fileTree);

function buildDOMTree(structure, parentElement) {
  
  for (let i = 0; i < structure.length; i++) {
  		let ul = document.createElement('ul');
  		let li = document.createElement('li');
  		let p = document.createElement('p');
  		let icon = document.createElement('i');
  		let nameElement = document.createElement('span');

	    icon.setAttribute('class', 'material-icons');    
	    nameElement.innerHTML = structure[i].title;

	    if (structure[i].folder) {
	        icon.innerHTML = 'folder';
	    } else {
	        icon.innerHTML = 'insert_drive_file';
	        p.setAttribute('class', 'file');      
	    }
	    
	    p.appendChild(icon);
	    p.appendChild(nameElement);
	    li.appendChild(p);
	    parentElement.appendChild(li);

	    p.onclick = function() {
	        if (this.nextElementSibling.style.display === 'none') {
	            this.nextElementSibling.style.display = 'block';
	            this.childNodes[0].innerHTML = 'folder_open';
	        } else {          
	            this.nextElementSibling.style.display = 'none';
	            this.childNodes[0].innerHTML = 'folder';
	        }
	    }

	    if (structure[i].children) {      
	        li.appendChild(ul);
	      
	        if (structure[i].folder) {
	            icon.innerHTML = 'folder';
	        } else {
	            icon.innerHTML = 'insert_drive_file';
	        }
	      
	        ul.style.display = 'none';
	        buildDOMTree(structure[i].children, ul);

	    } else if (!structure[i].children && structure[i].folder) {          
	        parentElement.appendChild(ul);
	        let emptyFolderValue = document.createElement('span');
	        emptyFolderValue.setAttribute('class', 'emptyFolder');
	        emptyFolderValue.style.display = 'none';      
	        emptyFolderValue.innerHTML = 'Folder is empty';
	        li.appendChild(emptyFolderValue);      
	    }
  }
}
