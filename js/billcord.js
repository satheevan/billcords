let itemCounter = 0;

function addInvoiceItem() {
  itemCounter++;
  console.log("add Items", itemCounter);
  const newItemRow = `
    <tr id="itemRow${itemCounter}">
    <td> <input type="text" class="form-control p-1" placeholder="Enter the Transaction" required></td>
    <!--<td><select id="itemName" onclick="handlerItemSelectView()" class="form-control p-1" required ></select></td>--!>
    <td> <input type="number" class="form-control p-1 qty" placeholder="Enter Quantity" required></td>
    <td> <input type="number" class="form-control p-1 price" placeholder="Enter unit Price" onblur="itemCalcValue()" required></td>
    <td> <input type="text" class="form-control p-1 itemValue" placeholder="product amount" disable readonly></td>
    <td> <button type=button class="btn btn-danger" onclick="removeInvoiceItem(${itemCounter})">Remove</button></td>
    </tr>
    `;

  $("#invoiceItems").append(newItemRow);

  updateTotalAmount();
}

// remove item

function removeInvoiceItem(itemid) {
  console.log("item_id", `itemRow${itemid}`);
  $(`#itemRow${itemid}`).remove();
  // updateTotalAmount();
}
function itemCalcValue() {
  updateTotalAmount();
}
function updateTotalAmount() {
  var totalAmount = 0;
  var invoiceValue = 0;

  $("tr[id^='itemRow']").each(function () {
    const qty = parseFloat($(this).find(".qty").val()) || 0;
    const price = parseFloat($(this).find(".price").val()) || 0;
    const itemValue = qty * price;
    // this = this itemValue meaning
    $(this).find(".itemValue").val(itemValue.toFixed(2));

    totalAmount += itemValue;
  });
  $("#totalAmount").val(totalAmount.toFixed(2));
  const otherCharges = parseFloat($("#otherCharges").val()) || 0;
  const discount = parseFloat($("#discout").val()) || 0;
  console.log("other & discount :", otherCharges, discount, totalAmount);
  invoiceValue = totalAmount + otherCharges - discount;
  $("#invoiceAmount").val(invoiceValue.toFixed(2));
}

// Generate Summary
function submitGenerate(e) {
  console.log("event", e);
  updateTotalAmount();
  //   window.print();
}
// Submit function
$("#invoiceForm").submit(function (event) {
  event.preventDefault();
  updateTotalAmount();
});
//automatic set current date for invoice date

// Print Bill Invoice
function PrintInvoice() {
//   customerDetails
    const customerName = $("#customerName").val();
  const clientIdNo = $("#clientIdNo").val();
  const clientMobileNo = $("#clientMobileNo").val();
  const clientAddressNo = $("#clientAddressNo").val();
  //Our Company Details
  const companyName = $("#companyName").val();
  const idNo = $("#idNo").val();
  const mobileNo = $("#mobileNo").val();
  const addressNo = $("#addressNo").val();
  const logo = $("#invoiceDate").val();
  //Invoice Details
  const invoiceNo = $("#invoiceNo").val();
  const invoiceDate = $("#invoiceDate").val();
  const items = [];

  $("tr[id^='itemRow']").each(function () {
    const description = $(this).find("td:eq(0) input").val();
    const qty = $(this).find("td:eq(1) input").val();
    const price = $(this).find("td:eq(2) input").val();
    const itemValue = $(this).find("td:eq(3) input").val();

    items.push({
      description: description,
      quantity: qty,
      price: price,
      itemValue: itemValue,
    });
  });
  const totalAmount = $("#totalAmount").val() || 0;
  const otherCharges = $("#otherCharges").val() || 0;
  const discount = $("#discout").val() || 0;

  const invoiceAmount = $("#invoiceAmount").val() || 0;

  const invoiceContent = `
    <div class="f-col f-justify-center">
    <header>
    <h2>Invoice Slip</h2>
    </header>

    <div class="partydetails">
    <div>
    <div class="ourCompany">
    <h4>${companyName}</h4>
    <p>${idNo}</p>
    <p>+91 ${mobileNo}</p>
    <p>${addressNo}</p>
    </div>

    <div class="clientCompnay">
    <h4>${customerName}</h4>
    <p>${clientIdNo}</p>
    <p>+91 ${clientMobileNo}</p>
    <p>${clientAddressNo}</p>
    </div>

    </div>
    <div class="invoiceDetails">
    <p>Invoice No  : ${invoiceNo}</p>
    <p>Invoice Date: ${invoiceDate}</p>
    </div>
    
    </div>
    
    <table>
        <thead>
                <tr>
                    <th>Description</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>ItemTotal</th>
                </tr>
        </thead>

        <tbody>
            ${items.map((item)=>(`
                <tr>
                    <td>${item.description}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price}</td>
                    <td>${item.itemValue}</td>
                </tr>
                `
            )).join("")}
        </tbody>
    </table>
    <div class="f-col total-container">
    <p class="total">Total Amount:${totalAmount}</p>
    <p class="total">Other charges:${otherCharges}</p>
    <p class="total">Discount:${discount}</p>
    <p class="total">Invoice Amount:${invoiceAmount}</p>
    </div>
    </div>
`;

$("#invoicePrint").html(invoiceContent)
//   const printWindow = window.open("", "_blank");
//   printWindow.document.close();
    window.print();
}
