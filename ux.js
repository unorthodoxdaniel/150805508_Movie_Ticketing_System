var name = document.getElementById("Name").addEventListener("click", function(){
    document.getElementById("Name").addEventListener("mouseout", afterName)
});

function afterName(){
    alert("Done!");
}