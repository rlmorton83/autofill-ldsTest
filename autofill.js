
import people from 'https://swapi.co/api/people/?page=2';


{
     [
        {
            "name": "Luke Skywalker", 
            "name": "C-3PO", 
            "name": "R2-D2", 
            "name": "Darth Vader", 
            "name": "Leia Organa", 
            "name": "Owen Lars", 
            "name": "Beru Whitesun lars", 
            "name": "R5-D4",
            "name": "Biggs Darklighter", 
            "name": "Obi-Wan Kenobi", 
        }
    ]
}

var list = [ 
    {name: 'Luke Skywalker', code: 'Lu'}, 
    {name: 'C-3PO', code: 'C'}, 
    {name: 'R2-D2', code: 'R'}, 
    {name: 'Darth Vader', code: 'Da'}, 
    {name: 'Leia Organa', code: 'Le'}, 
    {name: 'Owen Lars', code: 'Ow'}, 
    {name: 'Beru Whitesun lars', code: 'Be'}, 
    {name: 'R5-D4', code: 'AI'}, 
    {name: 'Biggs Darklighter', code: 'Bi'},
    {name: 'Obi-Wan Kenobi', code: 'Ob'}
]; 

function Autocomplete(selector) {

    this.list = list;

    this.box = document.getElementById(selector);

    this.dropdown = null;

    this.init = function() {
    
        this.box.addEventListener('keyup', this.boxKeyUp);
        this.dropdown = document.createElement('ul');
        this.dropdown.setAttribute('class','drop');
        document.body.appendChild(this.dropdown);
        this.updateList();
    };

    this.updateList = function() {
        this.dropdown.innerHTML = '';
        var value = this.box.value;
        for(var i=0; i < this.list.length; i++) {
            var name = list[i].name.toLowerCase();
            var idx = name.indexOf(value);
            if(idx===0) {
                var item = document.createElement('li');
                item.appendChild(document.createTextNode(list[i].name));
                this.dropdown.appendChild(item);    
            }
        }     
    };

    this.boxKeyUp = function() {
        if(this.box.value===''){
            this.dropdown.style.display = 'none';
            return true;
        }
        this.updateList();
        this.dropdown.style.display = 'block';
    }.bind(this);

    this.init();

    return this;
}
var ac = new Autocomplete('inputbox');
input {
    width: 200 px;
}

input, _drop {
    margin: 0;
    padding: 0;
    padding: 6px;
    font-size: 16px;
    font-family: 'helvetica neue', helvetica, sans-serif;
}

_drop {
    display: none;
    list-style-type: none;
    list-style-position: inside;
    border-style: none groove;
    border-color: silver;
    border-width:5px;
    width: 195px;
    background-color: lightgray;
}