const service = [
    {   
        sIdno:1,
        sName:"GSTR-1 Nil Return",
        sPrice:250,
        sTax:0.18,
        sCategory:"GST"
      },
      {   
        sIdno:2,
        sName:"GSTR-3B Nil Return",
        sPrice:250,
        sTax:0.18,
        sCategory:"GST"
      },
      {   
        sIdno:3,
        sName:"GSTR-1 Return",
        sPrice:500,
        sTax:0.18,
        sCategory:"GST"
      },
      {   
        sIdno:4,
        sName: "GSTR-3B Return",
        sPrice:500,
        sTax:0.18,
        sCategory:"GST"
      },
      {   
        sIdno:5,
        sName: "Income Tax Return",
        sPrice:1000,
        sTax:0.18,
        sCategory:"IncomeTax"
      },
      {   
        sIdno:1,
        sName: "TDS Return",
        sPrice:1000,
        sTax:0.18,
        sCategory:"TDS"
      },
      {   
        sIdno:1,
        sName: "ESI and PF Return",
        sPrice:1000,
        sTax:0.18,
        sCategory:"Other Return"
      },
      
]

// inital option list

let items = []

// function handlerItemSelectView(){

//     if(items.length < service.length){
//     items = service.map((value,index)=>{
//         return `<option key=${index+=1} value=${value.sIdno}>${value.sName}</option>`
//     })
//         $("#itemName").append(items);
//     }
//     console.log("serrvice Name",items);
// }

function handlerItemSelectView(){
    
    console.log("select view",items.length);
    if(items.length<service.length){
          items = service.map((value,index)=>{
          return `<option key=${index +=1} value=${value['sIdno']}>${value["sName"]}</option>`
        })
        $("#itemName").append(items);
      }
      console.log("options", items);
  }