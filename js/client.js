const client = [
    {
        clientId:1,
        copyName: "KW Store",
        person:"Kameshwaran",
        panNo:"GIQPS6603K",
        GSTNo:"",
        copyAddress: {
                       buildingNo: 1,
                       areaName: "Lakshmipuram,kolatur",
                       streetName: "Raja Street",
                       pincode: "600099",
                       locality: "Chennai",
                      },
        mobileNo:9500006593,
        mailId:"@"
      },
      {
        clientId:2,
        copyName: "Thangapandi",
        person: "Thangapandi",
        panNo:"GIQPS6603K",
        copyAddress: {
                       buildingNo: 1,
                       areaName: "Lakshmipuram,kolatur",
                       streetName: "Raja Street",
                       pincode: "600099",
                       locality: "Chennai",
                      },
        mobileNo:9500006593,
        mailId:"@gmail.com"
      }
      
]
// variable declrations
// initial load
let options = [] 

function handlerCustomerSelectView(){
  console.log("select view",options.length);
  if(options.length<client.length){
        options = client.map((value,index)=>{
        return `<option key=${index +=1} value=${value['person']}>${value["person"]}</option>`
      })
      $("#customerName").append(options);
    }
    // console.log("options", options);
}