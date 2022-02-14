let inpu=0;
document.getElementById("btn").onclick = function(){
    let addnew = document.getElementById("new"); 
    input.insertAdjacentHTML(
        "afterend",
        `<div id="newadd${inpu}>
        <label>write someting</label><br>
        <input type="text" id="${inpu} placeholder="what do you want"> <button onclick="deletebtn('newadd${inpu}')" class="button is-danger is-rounded">delete</button></div>
        
        `
    );
    inpu++
};
function deletebtn(newadd0,suite){
    document.getElementById(newadd0).remove()
    suite();
};