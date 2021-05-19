var ctx=document.querySelector("#myChart1").getContext("2d");
var myChart=new Chart(ctx,{

    type:"line",
    data:{
        labels:['Jan','Feb','Mar','Apr','May',],
        datasets:[{
          label:'Amazon Price',
          data:[49999,53999,49999,54999,49999,],
          // backgroundColor:'#FF9900',
          fill:true,
          tension:0.4,
        },
        {
          label:'Flipkart Price',
          data:[51999,50999,54999,54999,49999,],
          // backgroundColor:'#F8E831',
          fill:true,
          tension:0.4,
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



// ************************************* Third chart ***********************************

var ctx=document.querySelector("#myChart3").getContext("2d");
var myChart=new Chart(ctx,{

    type:"line",
    data:{
        labels:['Mar 04','Mar 23','Mar 24','Apr 03','Apr 12','Apr 14','Apr 18','May 05','May 13','May 16'],
        datasets:[
        {
          label:'Amazon Price',
          data:[51390,50990,53990,58990,57990,50990,57000,52990,54390,56899],
          // backgroundColor:'#FF9900',
          borderWidth:5,
          tension: 0.4,
          fill:true
        },
        {
          label:'Flipkart Price',
          data:[48999,48999,49999,48999,49999,],
          backgroundColor:'#F8E831',
          tension:0.4
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