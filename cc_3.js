// Step 2
let customers = [
    { name: "Marc", email: "Marc@vsc.com", purchases: ["Hair Claw Clip", "Scrunchies", "Lip Balm"] },
    { name: "Gracie", email: "Gracie@vsc.com", purchases: ["Face Roller", "Skincare Headband", "Makeup Bag"] },
    { name: "Izzy", email: "Izzy@vsc.com", purchases: ["Travel Toiletry Bag", "Under-Eye Patches", "Makeup Remover"] },
];

// Step 3
let newCustomer = [
    {name: "Sophie", email: "Sophie@vsc.com", purchases: ["Hair Claw Clip", "Face Roller", "Makeup Bag"]},
];

customers.push(newCustomer[0]);

customers.shift();

// Step 4
customers[0].email = "Gracie@vsc.com";

let newPurchases = ["On Cloud"];
    
customers[1].purchases.push(newPurchases[0]);

// Step 5
customers.forEach((customers) => {console.log(`Customer Name: ${customers.name}
    Customer Email: ${customers.email}
    Total Purchases: ${customers.purchases.length}
    -------------------------------`)});
    


