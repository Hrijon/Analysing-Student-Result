
var x = 0;
var y = 0;
var text = "";
var array = Array();
var i;

function add_element_to_array()
{
    array[x] = document.getElementById("text1").value;
    array[y] = document.getElementById("text2").value;

    alert("Element: " + array[x] + "&" + array[y] + " Added at index " + x + "&" +y);
    x++;
    document.getElementById("text1").value = "";
    document.getElementById("text2").value = "";

    display_array();
}

function display_array()
  {
    var e = "";   
        
    for (var z=0; z<array[x,y].length; z++)
    {
      e += z +  ") " + array[z] + "\n\n";

    }
    
    document.getElementById("Result").innerHTML = e;
  }