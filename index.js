function NextDay(year,month,day)
{
    var nextDay="";
    if(month==1 ||month==3||month==5||month==7||month==9||month==10||month==12)
    {
        if(month==12)
        {
            if(day==31)
            {
                nextDay=`${year}/1/1`;
            }
            else
            {
                nextDay=`${year}/${month}/${parseInt(day)+1}`;
            }
        }
        else
        {
            if(day==31)
            {
                nextDay=`${year}/${parseInt(month)+1}/1`;
            }
            else
            {
                nextDay=`${year}/${month}/${parseInt(day)+1}`;
            }
        }
    }
    else if(month==2)
    {
        if ((year%400==0) || (year%4==0 && year%100!=0))
        {
            if (day==29)
            {
                nextDay=`${year}/${parseInt(month)+1}/1`;
            } 
            else
            {
                nextDay=`${year}/${month}/${parseInt(day)+1}`;
            }
        } 
        else
        {
            if (day==28)
            {
                nextDay=`${year}/${parseInt(month)+1}/1`;
            }
            else
            {
                nextDay=`${year}/${month}/${parseInt(day)+1}`;
            }
        }
    }
    else
    {
        if (day==30)
        {
            nextDay=`${year}/${parseInt(month)+1}/1`
        }
    else
    {
        nextDay=`${year}/${month}/${parseInt(day)+1}`
    }
    } 
    return nextDay;
}
function Test()
{
	// var field = document.getElementById('kq');
	// field.value=(NextDay(2021, 7, 31));
	var arr=[];
    arr.push("2021,7,31");
    arr.push("2020,2,29");
    arr.push("2019,2,28");
    arr.push("2021,12,31");
    
    // var field = document.getElementById('kq');
	// field.value=(NextDay(2021, 7, 31));
    for(var i=0;i<arr.length;i++)
    {
        arrYMD=arr[i].split(',');
        year=arrYMD[0];
        month=arrYMD[1];
        day=arrYMD[2];
        const para = document.createElement("p");
        const node = document.createTextNode(`NextDay ${arr[i]} is ${NextDay(year,month,day)}`);
        para.appendChild(node);
        const element = document.getElementById("div1");
        element.appendChild(para);
    }
   
}

function Clear()
{
    document.getElementById('div1').innerHTML = "";
}

// console.log(NextDay(2021, 7, 31));
// console.log(NextDay(2020, 2, 29));
// console.log(NextDay(2019, 2, 28));
// console.log(NextDay(2021, 12, 31));
// console.log("123");