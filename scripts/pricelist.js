export const priceTable = () => {
  const products = [
    // Pepper Jellies/Spicy
    {
      category: "Pepper Jellies/Spicy (180 ml)",
      product: "Hot Red Pepper Jelly",
      size: { ml: 180, oz: 6 },
      perCase: 30,
      pricing: {
        pricePerQuantity: [17.99, 17.49, 16.99, 16.49], // 3+, 8+, 12+, 20+
      },
    },
    {
      category: "Pepper Jellies/Spicy (180 ml)",
      product: "Mango Pepper Jelly",
      size: { ml: 180, oz: 6 },
      perCase: 30,
      pricing: {
        pricePerQuantity: [17.99, 17.49, 16.99, 16.49],
      },
    },
    {
      category: "Pepper Jellies/Spicy (180 ml)",
      product: "Pineapple Pepper Jelly",
      size: { ml: 180, oz: 6 },
      perCase: 30,
      pricing: {
        pricePerQuantity: [17.99, 17.49, 16.99, 16.49],
      },
    },
    {
      category: "Pepper Jellies/Spicy (240 ml)",
      product: "Hot Red Pepper Jelly",
      size: { ml: 240, oz: 8 },
      perCase: 12,
      pricing: {
        pricePerQuantity: ['N/A', 18.99, 18.49, 17.99],
      },
    },
    {
      category: "Pepper Jellies/Spicy (240 ml)",
      product: "Mango Pepper Jelly",
      size: { ml: 240, oz: 8 },
      perCase: 12,
      pricing: {
        pricePerQuantity: ['N/A', 18.99, 18.49, 17.99],
      },
    },
    {
      category: "Pepper Jellies/Spicy (240 ml)",
      product: "Pineapple Pepper Jelly",
      size: { ml: 240, oz: 8 },
      perCase: 12,
      pricing: {
        pricePerQuantity: ['N/A', 18.99, 18.49, 17.99],
      },
    },
    // Jams
    {
      category: "Jams (180 ml)",
      product: "Bumbleberry Jam",
      size: { ml: 180, oz: 6 },
      perCase: 30,
      pricing: {
        pricePerQuantity: [ 15.99, 15.49, 14.99, 14.49 ],
      },
    },
    {
      category: "Jams (180 ml)",
      product: "Pineapple Passion Jam",
      size: { ml: 180, oz: 6 },
      perCase: 30,
      pricing: {
        pricePerQuantity: [15.99, 15.49, 14.99, 14.49],
      },
    },
    {
      category: "Jams (180 ml)",
      product: "Mango Kiwi Passion Jam",
      size: { ml: 180, oz: 6 },
      perCase: 30,
      pricing: {
        pricePerQuantity: [15.99, 15.49, 14.99, 14.49],
      },
    },
    {
      category: "Jams (180 ml)",
      product: "Strawberry Rhubarb Jam",
      size: { ml: 180, oz: 6 },
      perCase: 30,
      pricing: {
        pricePerQuantity: [15.99, 15.49, 14.99, 14.49],
      },
    },
    {
      category: "Jams (180 ml)",
      product: "Guava Jam",
      size: { ml: 180, oz: 6 },
      perCase: 30,
      pricing: {
        pricePerQuantity: [15.99, 15.49, 14.99, 14.49],
      },
    },
    {
      category: "Jams (240 ml)",
      product: "Bumbleberry Jam",
      size: { ml: 240, oz: 8 },
      perCase: 12,
      pricing: {
        pricePerQuantity: ['N/A', 16.99, 16.49, 15.99],
      },
    },
    {
      category: "Jams (240 ml)",
      product: "Pineapple Passion Jam",
      size: { ml: 240, oz: 8 },
      perCase: 12,
      pricing: {
        pricePerQuantity: ['N/A', 16.99, 16.49, 15.99],
      },
    },
    {
      category: "Jams (240 ml)",
      product: "Mango Kiwi Passion Jam",
      size: { ml: 240, oz: 8 },
      perCase: 12,
      pricing: {
        pricePerQuantity: ['N/A', 16.99, 16.49, 15.99],
        msrp: "$12.99",
        margins: "49.98%",
      },
    },
    {
      category: "Jams (240 ml)",
      product: "Strawberry Rhubarb Jam",
      size: { ml: 240, oz: 8 },
      perCase: 12,
      pricing: {
        pricePerQuantity: ['N/A', 16.99, 16.49, 15.99],
      },
    },
    {
      category: "Jams (240 ml)",
      product: "Guava Jam",
      size: { ml: 240, oz: 8 },
      perCase: 12,
      pricing: {
        pricePerQuantity: ['N/A', 16.99, 16.49, 15.99],
      },
    },

    // Alcohol Jellies
    {
      category: "Alcohol Jellies (180 ml)",
      product: "Port Wine Jelly",
      size: { ml: 180, oz: 6 },
      perCase: 30,
      pricing: {
        pricePerQuantity: [ 19.99, 19.49, 18.99, 18.49 ],
      },
    },
    {
      category: "Alcohol Jellies (180 ml)",
      product: "Reisling Wine Jelly",
      size: { ml: 180, oz: 6 },
      perCase: 30,
      pricing: {
        pricePerQuantity: [19.99, 19.49, 18.99, 18.49],
      },
    },
    {
      category: "Alcohol Jellies (180 ml)",
      product: "Ice Wine Jelly",
      size: { ml: 180, oz: 6 },
      perCase: 30,
      pricing: {
        pricePerQuantity: [19.99, 19.49, 18.99, 18.49],
      },
    },
    {
      category: "Alcohol Jellies/Spicy (180 ml)",
      product: "Hot Champagne Jelly",
      size: { ml: 180, oz: 6 },
      perCase: 30,
      pricing: {
        pricePerQuantity: [19.99, 19.49, 18.99, 18.49],
      },
    },
    {
      category: "Alcohol Jellies/Spicy (180 ml)",
      product: "Fire and Ice Wine Jelly",
      size: { ml: 180, oz: 6 },
      perCase: 30,
      pricing: {
        pricePerQuantity: [19.99, 19.49, 18.99, 18.49],
      },
    },
    {
      category: "Alcohol Jellies/Spicy (180 ml)",
      product: "Fire and Ice Pepper Jelly",
      size: { ml: 180, oz: 6 },
      perCase: 30,
      pricing: {
        pricePerQuantity: [19.99, 19.49, 18.99, 18.49],
      },
    },
    // Alcohol Beer Jellies
    {
      category: "Alcohol Beer Jellies (180 ml)",
      product: "Session IPA Beer Jelly",
      size: { ml: 180, oz: 6 },
      perCase: 30,
      pricing: {
        pricePerQuantity: [15.99, 15.49, 14.99, 14.49],
      },
    },
    {
      category: "Alcohol Beer Jellies (180 ml)",
      product: "Hazy IPA Beer Jelly",
      size: { ml: 180, oz: 6 },
      perCase: 30,
      pricing: {
        pricePerQuantity: [15.99, 15.49, 14.99, 14.49],
      },
    },
    {
      category: "Alcohol Beer Jellies (180 ml)",
      product: "Stout Beer Jelly",
      size: { ml: 180, oz: 6 },
      perCase: 30,
      pricing: {
        pricePerQuantity: [15.99, 15.49, 14.99, 14.49],
      },
    },
  ];

  function createTable(products) {
    // Create table element
    const table = document.createElement("table");

    const topHeaders = [
      { text: "", span: 1, class: "fixed-col" },
      { text: "", span: 3 },
      { text: "Pricing Per Quantity (4C)", span: 4, class: "group-header" },
    ];
    const topHeaderRow = document.createElement("tr");

    topHeaders.forEach((header) => {
      const th = document.createElement("th");
      th.innerText = header.text;
      th.setAttribute("colspan", header.span);
      if (header.class) {
        th.setAttribute("class", header.class);
      }
      topHeaderRow.appendChild(th);
    });

    // Create table header row
    const headers = [
      "",
      "Product",
      "Size (oz)",
      "Units Per Case",
      "3+",
      "8+",
      "12+",
      "20+",
    ];
    const headerRow = document.createElement("tr");

    headers.forEach((header) => {
      const th = document.createElement("th");
      th.innerText = header;
      if (header === "") {
        th.setAttribute("class", "fixed-col");
      }
      headerRow.appendChild(th);
    });

    table.appendChild(topHeaderRow);
    table.appendChild(headerRow);

    let lastCategory = ""; // Keep track of the last category to manage duplicates

    // Create rows for each product
    products.forEach((product, index) => {
      // Spacer row before a new category (except for the first row)
      if (product.category !== lastCategory && index !== 0) {
        const spacerRow = document.createElement("tr");
        const spacerCell = document.createElement("td");
        spacerCell.setAttribute("colspan", headers.length);
        spacerCell.innerHTML = "&nbsp;";
        spacerRow.appendChild(spacerCell);
        table.appendChild(spacerRow);
      }

      const row = document.createElement("tr");

      // Category (only display it once per group)
      const categoryCell = document.createElement("th");
      categoryCell.setAttribute("class", "fixed-col");
      if (product.category !== lastCategory) {
        categoryCell.innerText = product.category;
        lastCategory = product.category;
      } else {
        categoryCell.innerHTML = "&nbsp;"; // Empty cell if category repeats
      }
      row.appendChild(categoryCell);

      // Product
      const productCell = document.createElement("td");
      productCell.innerText = product.product;
      row.appendChild(productCell);

    //   // Size (ml)
    //   const sizeMlCell = document.createElement("td");
    //   sizeMlCell.innerText = product.size.ml;
    //   row.appendChild(sizeMlCell);

      // Size (oz)
      const sizeOzCell = document.createElement("td");
      sizeOzCell.innerText = product.size.oz;
      row.appendChild(sizeOzCell);

      // Per Case
      const perCaseCell = document.createElement("td");
      perCaseCell.innerText = product.perCase;
      row.appendChild(perCaseCell);

      // Net Pricing (1+, 5+ mixed, 15+ mixed)
      product.pricing.pricePerQuantity.forEach((price) => {
        const priceCell = document.createElement("td");
        priceCell.innerText = price;
        row.appendChild(priceCell);
      });

      // // MSRP
      // const msrpCell = document.createElement("td");
      // msrpCell.innerText = product.pricing.msrp;
      // row.appendChild(msrpCell);

      // // Margins
      // const marginsCell = document.createElement("td");
      // marginsCell.innerText = product.pricing.margins;
      // row.appendChild(marginsCell);

      // Append row to table
      table.appendChild(row);
    });

    // Append table to document body or a specific element
    document.getElementById("price-list-table").appendChild(table);
  }

  // Usage
  createTable(products);
};
// TODO: Generate PDF from live table data
// export const downloadPDF = () => {
//     // Load the jsPDF library
//     const { jsPDF } = window.jspdf;

//     // Create a new jsPDF instance
//     const doc = new jsPDF();
//     const imageUrl = './assets/images/logo.png';

//     // Load the image
//     const img = new Image();
//     img.src = imageUrl;

//     img.onload = function () {
//         // Add the image (x: 10, y: 10, width: 50, height: 50)
//         doc.addImage(img, 'PNG', 10, 10, 50, 50);

//         doc.setFontSize(18);
//         doc.text("Morning Jams and Jellies", 70, 30);  // Text to the right of the image
//         doc.setFontSize(12);
//         doc.text("Small Batch, Always Fresh, No Preservatives, No Additives", 70, 40);
//         doc.text("Award Winning Jams and Jellies", 70, 50);
//         //doc.text(this.this.formatDate(new Date()), 90, 50);

//         // Reference to the HTML table
//         const table = document.getElementById("price-list-table");

//         // Use html2canvas to capture the table as an image
//         html2canvas(table).then((canvas) => {
//             const imgData = canvas.toDataURL('image/png');

//             // Calculate page dimensions
//             const pageWidth = doc.internal.pageSize.getWidth();
//             const pageHeight = doc.internal.pageSize.getHeight();
//             const imgWidth = pageWidth - 20; // Set width to fit within margins
//             const imgHeight = canvas.height * imgWidth / canvas.width; // Maintain aspect ratio

//             let position = 60; // Start position below the image and text

//             // If the table is taller than the page, split it across pages
//             if (imgHeight > pageHeight - 20) {
//                 let heightLeft = imgHeight;
//                 while (heightLeft > 0) {
//                     doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
//                     heightLeft -= pageHeight;
//                     if (heightLeft > 0) {
//                         doc.addPage(); // Add new page if necessary
//                         position = 10; // Reset position on the new page
//                     }
//                 }
//             } else {
//                 // Add the table if it fits on one page
//                 doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
//             }

//             // Open the PDF in a new tab or trigger download
//             window.open(doc.output('bloburl'));

//             // To trigger download automatically:
//             // doc.save("table.pdf");
//         });
//     };
// }

export const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  })
    .format(date)
    .replace(/\//g, "-");
};

export const downloadPDF = () => {
  const link = document.createElement("a");
  link.href = "../assets/pricelist/pricelist-08-2024.pdf";
  link.download = `MJJ-PriceList-${formatDate(new Date())}.pdf`;
  console.log(`MJJ-PriceList-${formatDate(new Date())}.pdf`);
  link.click();
};
