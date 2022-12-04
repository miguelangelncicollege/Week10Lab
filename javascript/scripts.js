/*
File name: index.html
Created by: Miguel Angel Vinas
Date: 04/12/2022
Purpose: Lab 1, Week 10, Website Development for NCI. Grocery List Application
*/

var groceryList = ["Sausages", "Milk", "Bread", "Avocados", "Watermelon", "Croissants"]
var ol = "";

function displayList()
{
        //document.getElementById("ol").innerHTML = groceryList;
        for (var i = 0; i < groceryList.length; i++)
        {
            ol += "<li>" + groceryList[i] + "</li>";
        }
        document.getElementById("ol").innerHTML = ol;
}

function addItemToStart()
{
    groceryList.unshift(prompt ("Add a new item"));
    displayList();
}

function removeItemFromStart()
{
    groceryList.shift (alert ("Remove the last item added"));
    displayList();
}