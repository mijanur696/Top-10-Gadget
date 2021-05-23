var ctx=document.querySelector("#myChart1").getContext("2d");
var myChart=new Chart(ctx,{

    type:"bar",
    data:{
        labels:['Jan','Feb','Mar','Apr','May',],
        datasets:[{
          label:'Amazon Price',
          data:[49999,53999,49999,54999,49999,],
          backgroundColor:'#FF9900',
          fill:true,
          tension:0.4,
        },
        {
          label:'Flipkart Price',
          data:[51999,50999,54999,54999,49999,],
          backgroundColor:'#F8E831',
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
        labels:['Jan 02','Jan 05','Jan 21','Jan 23','Jan 24','Jan 31','Feb 01','Feb 18','Mar 08','Mar 11','Apr 19','Apr 28'],
        datasets:[
        // {
        //   label:'Amazon Price',
        //   data:[1000,2000,4500,72560,50000,],
        //   backgroundColor:'#FF9900',
        // },
        {
          label:'Flipkart Price',
          data:[50990,48999,51990,49990,51990,49990,48990,49990,48990,49990,48990,49990],
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

    type:"bar",
    data:{
        labels:['Mar 04','Mar 23','Mar 24','Apr 03','Apr 12','Apr 14','Apr 18','May 09','May 14','May 16'],
        datasets:[
        {
          label:'Amazon Price',
          data:[51390,50990,53990,58990,57990,50990,57000,54399,54389,56899],
          backgroundColor:'#FF9900',
        },
        {
          label:'Flipkart Price',
          data:[49990,49990,49990,49990,49990,49990,49990,49990,50990,57000,50990],
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


// ************************************* Fourth chart ***********************************


var ctx=document.querySelector("#myChart4").getContext("2d");
var myChart=new Chart(ctx,{

    type:"bar",
    data:{
        labels:['Jan 02','Jan 04','Jan 10','Jan 15','Jan 29','Feb 01','Feb 04','Feb 20','Feb 28','Mar 17','Apr 01','May 23'],
        datasets:[
        // {
        //   label:'Amazon Price',
        //   data:[51390,50990,53990,58990,57990,50990,57000,54399,54389,56899],
        //   backgroundColor:'#FF9900',
        // },
        {
          label:'Flipkart Price',
          data:[47990,49900,47949,49900,49900,51990,46990,46490,45990,46600,45990,45990],
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


// ************************************* Fifth chart ****************************************


var ctx=document.querySelector("#myChart5").getContext("2d");
var myChart=new Chart(ctx,{

    type:"bar",
    data:{
        labels:['Jan 24','Feb 22','Mar 01','Mar 08','Mar 11','Mar 23','Apr 09','Apr 12','May 23'],
        datasets:[
        // {
        //   label:'Amazon Price',
        //   data:[51390,50990,53990,58990,57990,50990,57000,54399,54389,56899],
        //   backgroundColor:'#FF9900',
        // },
        {
          label:'Flipkart Price',
          data:[50990,49990,50990,49990,50990,49990,52999,50990,50990],
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