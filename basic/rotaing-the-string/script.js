// 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. 
//    This is done by periodically removing one letter from the string end and attaching it to the front.

function animate_string() 
{
    var element = document.getElementById("text");
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;
    console.log(text)

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 200);
}