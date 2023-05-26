let result=document.getElementById('inputtext');//collect and store
let calculate=(num)=>{
    // get value
    result.value=result.value+num;
}
let results=()=>{
    try {
        result.value=eval(result.value)
    } catch (error) {
        alert("enter valid input");
    }
}
function clr()
{
    result.value="";
}
function del()
{
    result.value=result.value.slice(0,-1);
}
