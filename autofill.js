
import faker from 'faker';

var list = [ 
    {name: 'Afghanistan', code: 'AF'}, 
    {name: 'Åland Islands', code: 'AX'}, 
    {name: 'Albania', code: 'AL'}, 
    {name: 'Algeria', code: 'DZ'}, 
    {name: 'American Samoa', code: 'AS'}, 
    {name: 'AndorrA', code: 'AD'}, 
    {name: 'Angola', code: 'AO'}, 
    {name: 'Anguilla', code: 'AI'}, 
    {name: 'Antarctica', code: 'AQ'}
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
    width: 200px;
}

input, .drop {
    margin: 0;
    padding: 0;
    padding: 6px;
    font-size: 16px;
    font-family: "helvetica neue", helvetica, sans-serif;
}

.drop {
    display: none;
    list-style-type: none;
    list-style-position: inside;
    border-style: none groove groove groove;
    border-color: silver;
    border-width:5px;
    width: 195px;
    background-color: lightgray;
}