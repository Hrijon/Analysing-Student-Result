var x =0;
var y =0;
var studentNames = [];
var studentMarks = [];

function add_element_to_array()
{
    add_name();
    add_marks();   
}

function add_name()
{
    var text1 = document.getElementById("text1").value;
    studentNames.push(text1);
    x++;
    document.getElementById("text1").value = "";

    document.getElementById("Names").innerHTML =studentNames;
}

function add_marks()
{
    var text2 = document.getElementById("text2").value;
    studentMarks.push(text2);
    y++;
    document.getElementById("text2").value = "";

    document.getElementById("Marks").innerHTML = studentMarks;

    if (studentMarks >= 80)
    {
        document.getElementById("grade").innerHTML = "H.D";
        document.getElementById("percent").innerHTML = studentMarks + "%";
    }

    if (70 <= studentMarks < 80)
    {
        document.getElementById("grade").innerHTML = "D";
        document.getElementById("percent").innerHTML = studentMarks + "%";
    }

    if (60 <= studentMarks < 70)
    {
        document.getElementById("grade").innerHTML = "Cr";
        document.getElementById("percent").innerHTML = studentMarks + "%";
    }
    
    if (50 <= studentMarks <60)
    {
        document.getElementById("grade").innerHTML = "P";
        document.getElementById("percent").innerHTML = studentMarks + "%";
    }
    
    if (studentMarks <50)
    {
        document.getElementById("grade").innerHTML = "N";
        document.getElementById("percent").innerHTML = studentMarks + "%";
    }
    
    
}

function table_heading()
{
    // get table element
    var myTable = document.getElementById("myTable");
    // get the th elements    
    var ths = myTable.getElementsByTagName("th");
}

// function grade()
// {

// }