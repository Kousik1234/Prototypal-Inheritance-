
function array(){
    Object.defineProperty(this,"length",{
        value:0,
        writable:true,
        enumerable:false,
    })

    this.length=arguments.length;

    for(var i=0;i<arguments.length;i++)
    {
        this[i]=arguments[i]
    }
}
let arr=new array(2,3,5);
array.prototype.push=function(x){
    this[this.length]=x;
    this.length++;
}
arr.push(4)
array.prototype.pop=function(){
    delete this[this.length-1];
    this.length--;
}

array.prototype.top=function(){
    console.log(this[this.length-1])
}

array.prototype.print=function(){
    console.log(Object.values(this))
}
array.prototype.printReverse=function()
{
    let arr2=Object.values(this)
    let arr3=[];
    for(let i=arr2.length-1;i>=0;i--)
    {
        arr3.push(arr2[i])
    }
    console.log(arr3)
}
array.prototype.size=function(){
    console.log(this.length)
}
arr.push(9)
arr.pop();
arr.top();
arr.print();
arr.printReverse();
arr.size();