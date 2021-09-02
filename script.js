try{
function foo() {
    

    async function getdata() {

        var cc = document.getElementById("text").value;
        if (cc==""){
            alert("Please Enter Name");
            return false
        }
        let name = await fetch(`https://api.nationalize.io?name=${cc}`);
        let nationalname = await name.json();
        console.log(nationalname);

    }
    getdata();
}}
catch(error){
console.log(InvalidData);
}