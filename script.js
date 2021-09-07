function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rangeshow").value;
    var t = document.getElementById("years").value;
    var si;
    si = Number(p) * (Number(r) / 100) * Number(t);
    document.getElementById("result").innerHTML= si;
    var f1,f2,f3,f4;
    f1 = "If you deposit "+p+",\n";
    f2 = "at an interest rate of "+r+"&#37.\n";
    f3 = "You will receive an interest of "+String(si)+",\n";
    f4 = "in the year 202"+t+"."
    document.getElementById("mr1").innerHTML= f1;
    document.getElementById("mr2").innerHTML= f2;
    document.getElementById("mr3").innerHTML= f3;
    document.getElementById("mr4").innerHTML= f4;
       
}
function rates()
{
    var ranges = document.getElementById("rate").value;
    document.getElementById("rangeshow").value = ranges;
    document.getElementById("rangeshow").innerHTML= String(ranges) + "&#37";
}