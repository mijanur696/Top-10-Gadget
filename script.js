var ctx=document.querySelector("#myChart1").getContext("2d");
var myChart=new Chart(ctx,{

    type:"bar",
    data:{
        labels:['Jan','Feb','Mar','Apr','May',],
        datasets:[{
          label:'Amazon Price',
          data:[10000,20000,45000,72560,50000,],
          backgroundColor:'#FF9900',
        },
        {
          label:'Flipkart Price',
          data:[36000,26000,36000,78560,60000,],
          backgroundColor:'#F8E831',
        },   
      ], 
    },

    options:{
        responsive:true,
        layout:{
          padding:{
              top:20,
              bottom:30
          }
        },
        plugins:{
          title:{
            display:true,
            text:"Price Chart 2021",
            position:'bottom',
            color:'green',
            font:{
              size:22
            }
          }
        }
      },

})


// ************************************* second chart ***********************************

var ctx=document.querySelector("#myChart2").getContext("2d");
var myChart=new Chart(ctx,{

    type:"bar",
    data:{
        labels:['Jan','Feb','Mar','Apr','May',],
        datasets:[{
          label:'Amazon Price',
          data:[1000,2000,4500,72560,50000,],
          backgroundColor:'#FF9900',
        },
        {
          label:'Flipkart Price',
          data:[3600,2600,36000,785,60000,],
          backgroundColor:'#F8E831',
        },   
      ], 
    },

    options:{
        responsive:true,
        layout:{
          padding:{
              top:20,
              bottom:30
          }
        },
        plugins:{
          title:{
            display:true,
            text:"Price Chart 2021",
            position:'bottom',
            color:'green',
            font:{
              size:22
            }
          }
        }
      },

})