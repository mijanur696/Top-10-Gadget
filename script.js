var ctx=document.querySelector("#myChart1").getContext("2d");
var myChart=new Chart(ctx,{

    type:"bar",
    data:{
        labels:['Jan','Feb','Mar','Apr','May',],
        datasets:[{
          label:'Amazon Price',
          data:[49999,53999,49999,54999,49999,],
          backgroundColor:'#FF9900',
        },
        {
          label:'Flipkart Price',
          data:[51999,50999,54999,54999,49999,],
          backgroundColor:'#F8E831',
        },   
      ], 
    },

    options:{
        responsive:true,
        maintainAspectRatio:false,
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
              size:18
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
        datasets:[
        // {
        //   label:'Amazon Price',
        //   data:[1000,2000,4500,72560,50000,],
        //   backgroundColor:'#FF9900',
        // },
        {
          label:'Flipkart Price',
          data:[48999,48999,49999,48999,49999,],
          backgroundColor:'#F8E831',
        },   
      ], 
    },

    options:{
        responsive:true,
        maintainAspectRatio:false,
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
              size:18
            }
          }
        }
      },

})