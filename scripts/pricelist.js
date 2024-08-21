export const priceTable = () => {
    const products = [
        // Pepper Jellies/Spicy
        {
            category: "Pepper Jellies/Spicy",
            product: "Red Hot Pepper Jelly",
            size: { ml: 180, oz: 6 },
            perCase: 30,
            pricing: {
                netPricing: [5.81, 5.64, 5.47],
                msrp: "$11.99",
                margins: "52.94%",
            }
        },
        {
            category: "Pepper Jellies/Spicy",
            product: "Mango Pepper Jelly",
            size: { ml: 180, oz: 6 },
            perCase: 30,
            pricing: {
                netPricing: [6.87, 6.65, 6.44],
                msrp: "$13.99",
                margins: "52.44%",
            }
        },
        {
            category: "Pepper Jellies/Spicy",
            product: "Pineapple Pepper Jelly",
            size: { ml: 180, oz: 6 },
            perCase: 30,
            pricing: {
                netPricing: [6.87, 6.65, 6.44],
                msrp: "$13.99",
                margins: "52.44%",
            }
        },
        {
            category: "Pepper Jellies/Spicy (lg)",
            product: "Red Hot Pepper Jelly",
            size: { ml: 240, oz: 8 },
            perCase: 12,
            pricing: {
                netPricing: [6.26, 6.09, 5.92],
                msrp: "$12.99",
                margins: "52.94%",
            }
        },
        {
            category: "Pepper Jellies/Spicy (lg)",
            product: "Mango Pepper Jelly",
            size: { ml: 240, oz: 8 },
            perCase: 12,
            pricing: {
                netPricing: [8.08, 7.99, 7.79],
                msrp: "$15.99",
                margins: "52.44%",
            }
        },
        {
            category: "Pepper Jellies/Spicy (lg)",
            product: "Pineapple Pepper Jelly",
            size: { ml: 240, oz: 8 },
            perCase: 12,
            pricing: {
                netPricing: [8.08, 7.99, 7.79],
                msrp: "$15.99",
                margins: "52.44%",
            }
        },
        // Jams
        {
            category: "Jams",
            product: "Bumbleberry Jam",
            size: { ml: 180, oz: 6 },
            perCase: 30,
            pricing: {
                netPricing: [5.82, 5.65, 5.49],
                msrp: "$10.99",
                margins: "48.57%",
            }
        },
        {
            category: "Jams",
            product: "Pineapple Passion Jam",
            size: { ml: 180, oz: 6 },
            perCase: 30,
            pricing: {
                netPricing: [5.83, 5.66, 5.50],
                msrp: "$10.99",
                margins: "48.49%",
            }
        },
        {
            category: "Jams",
            product: "Mango Kiwi Passion Jam",
            size: { ml: 180, oz: 6 },
            perCase: 30,
            pricing: {
                netPricing: [5.60, 5.45, 5.29],
                msrp: "$10.99",
                margins: "50.45%"
            }
        },
        {
            category: "Jams",
            product: "Strawberry Rhubarb Jam",
            size: { ml: 180, oz: 6 },
            perCase: 30,
            pricing: {
                netPricing: [5.60, 5.45, 5.29],
                msrp: "$10.99",
                margins: "50.45%"
            }
        },
        {
            category: "Jams",
            product: "Guava Jam",
            size: { ml: 180, oz: 6 },
            perCase: 30,
            pricing: {
                netPricing: [5.83, 5.66, 5.50],
                msrp: "$10.99",
                margins: "48.49%"
            }
        },
        {
            category: "Jams (lg)",
            product: "Bumbleberry Jam",
            size: { ml: 240, oz: 8 },
            perCase: 12,
            pricing: {
                netPricing: [6.62, 6.44, 5.89],
                msrp: "$12.99",
                margins: "50.46%"
            }
        },
        {
            category: "Jams (lg)",
            product: "Pineapple Passion Jam",
            size: { ml: 240, oz: 8 },
            perCase: 12,
            pricing: {
                netPricing: [6.71, 6.50, 6.29],
                msrp: "$12.99",
                margins: "49.96%"
            }
        },
        {
            category: "Jams (lg)",
            product: "Mango Kiwi Passion Jam",
            size: { ml: 240, oz: 8 },
            perCase: 12,
            pricing: {
                netPricing: [6.71, 6.50, 6.29],
                msrp: "$12.99",
                margins: "49.98%"
            }
        },
        {
            category: "Jams (lg)",
            product: "Strawberry Rhubarb Jam",
            size: { ml: 240, oz: 8 },
            perCase: 12,
            pricing: {
                netPricing: [6.71, 6.50, 6.29],
                msrp: "$12.99",
                margins: "49.98%"
            }
        },
        {
            category: "Jams (lg)",
            product: "Guava Jam",
            size: { ml: 240, oz: 8 },
            perCase: 12,
            pricing: {
                netPricing: [6.71, 6.50, 6.29],
                msrp: "$12.99",
                margins: "49.96%"
            }
        },

        // Alcohol Jellies
        {
            category: "Alcohol Jellies",
            product: "Port Wine Jelly",
            size: { ml: 180, oz: 6 },
            perCase: 30,
            pricing: {
                netPricing: [7.73, 7.49, 7.25],
                msrp: "$16.99",
                margins: "55.91%",
            }
        },
        {
            category: "Alcohol Jellies",
            product: "Reisling Wine Jelly",
            size: { ml: 180, oz: 6 },
            perCase: 30,
            pricing: {
                netPricing: [8.57, 8.30, 8.03],
                msrp: "$16.99",
                margins: "51.15%",
            }
        },
        {
            category: "Alcohol Jellies",
            product: "Ice Wine Jelly",
            size: { ml: 180, oz: 6 },
            perCase: 30,
            pricing: {
                netPricing: [8.64, 8.45, 8.25],
                msrp: "$16.99",
                margins: "50.26%"
            }
        },
        {
            category: "Alcohol Jellies/Spicy",
            product: "Hot Champagne Jelly",
            size: { ml: 180, oz: 6 },
            perCase: 30,
            pricing: {
                netPricing: [7.42, 7.18, 6.95],
                msrp: "$16.99",
                margins: "57.71%",
            }
        },
        {
            category: "Alcohol Jellies/Spicy",
            product: "Fire and Ice Wine Jelly",
            size: { ml: 180, oz: 6 },
            perCase: 30,
            pricing: {
                netPricing: [9.24, 8.96, 8.67],
                msrp: "$16.99",
                margins: "47.29%",
            }
        },
        {
            category: "Jellies",
            product: "Fire and Ice Pepper Jelly",
            size: { ml: 180, oz: 6 },
            perCase: 30,
            pricing: {
                netPricing: [8.90, 8.62, 8.34],
                msrp: "$16.99",
                margins: "49.26%"
            }
        },
        // Alcohol Beer Jellies
        {
            category: "Alcohol Beer Jellies",
            product: "Session IPA Beer Jelly",
            size: { ml: 180, oz: 6 },
            perCase: 30,
            pricing: {
                netPricing: [6.17, 6.03, 5.99],
                msrp: "$12.99",
                margins: "53.58%",
            }
        },
        {
            category: "Alcohol Beer Jellies",
            product: "Hazy IPA Beer Jelly",
            size: { ml: 180, oz: 6 },
            perCase: 30,
            pricing: {
                netPricing: [6.17, 6.03, 5.99],
                msrp: "$12.99",
                margins: "53.58%",
            }
        },
        {
            category: "Alcohol Beer Jellies",
            product: "Stout Beer Jelly",
            size: { ml: 180, oz: 6 },
            perCase: 30,
            pricing: {
                netPricing: [6.17, 6.03, 5.99],
                msrp: "$12.99",
                margins: "53.58%",
            }
        }
    ];

    function formatDate(date) {
        return new Intl.DateTimeFormat('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
        }).format(date);
    }

    function createTable(products) {
        // Create table element
        const table = document.createElement("table");

        const topHeaders = [{ text: '', span: 1, class: 'fixed-col' }, { text: '', span: 4 },{text: 'Net Pricing', span: 3, class: 'group-header'},{text: '', span: 2}];
        const topHeaderRow = document.createElement('tr');

        topHeaders.forEach(header => {
            const th = document.createElement("th");
            th.innerText = header.text;
            th.setAttribute("colspan", header.span)
            if (header.class) {
                th.setAttribute('class', header.class);
            }
            topHeaderRow.appendChild(th);
        });

        // Create table header row
        const headers = ["", "Product", "Size (ml)", "Size (oz)", "Per Case", "1+", "5+ Mixed", "15+ Mixed", "MSRP", "Gross Margins"];
        const headerRow = document.createElement("tr");

        headers.forEach(header => {
            const th = document.createElement("th");
            th.innerText = header;
            if(header === "") {
                th.setAttribute('class', 'fixed-col');
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
            categoryCell.setAttribute('class', 'fixed-col');
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

            // Size (ml)
            const sizeMlCell = document.createElement("td");
            sizeMlCell.innerText = product.size.ml;
            row.appendChild(sizeMlCell);

            // Size (oz)
            const sizeOzCell = document.createElement("td");
            sizeOzCell.innerText = product.size.oz;
            row.appendChild(sizeOzCell);

            // Per Case
            const perCaseCell = document.createElement("td");
            perCaseCell.innerText = product.perCase;
            row.appendChild(perCaseCell);

            // Net Pricing (1+, 5+ mixed, 15+ mixed)
            product.pricing.netPricing.forEach(price => {
                const priceCell = document.createElement("td");
                priceCell.innerText = price;
                row.appendChild(priceCell);
            });

            // MSRP
            const msrpCell = document.createElement("td");
            msrpCell.innerText = product.pricing.msrp;
            row.appendChild(msrpCell);

            // Margins
            const marginsCell = document.createElement("td");
            marginsCell.innerText = product.pricing.margins;
            row.appendChild(marginsCell);

            // Append row to table
            table.appendChild(row);
        });


        // Append table to document body or a specific element
        document.getElementById('price-list-table').appendChild(table);
    }

    // Usage
    createTable(products);
}

export const downloadPDF = () => {
    // Load the jsPDF library
    const { jsPDF } = window.jspdf;

    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Image URL (update with the correct path if necessary)
    const imageUrl = './assets/images/logo.png';  // Replace with your image URL or base64 string

    // Load the image
    const img = new Image();
    img.src = imageUrl;

    // When the image is loaded, add it to the PDF
    img.onload = function () {
        // Add the image (x: 10, y: 10, width: 50, height: 50)
        doc.addImage(img, 'PNG', 10, 10, 50, 50);

        // Add custom text to the right of the image
        doc.setFontSize(18);
        doc.text("Morning Jams and Jellies", 70, 30);  // Text to the right of the image
        doc.setFontSize(12);
        doc.text("Small Batch, Always Fresh, No Preservatives, No Additives", 70, 40);
        doc.text("Award Winning Jams and Jellies", 70, 50);
        //doc.text(this.this.formatDate(new Date()), 90, 50);

        // Reference to the HTML table
        const table = document.getElementById("price-list-table");

        // Use html2canvas to capture the table as an image
        html2canvas(table).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');

            // Calculate page dimensions
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();
            const imgWidth = pageWidth - 20; // Set width to fit within margins
            const imgHeight = canvas.height * imgWidth / canvas.width; // Maintain aspect ratio

            let position = 60; // Start position below the image and text

            // If the table is taller than the page, split it across pages
            if (imgHeight > pageHeight - 20) {
                let heightLeft = imgHeight;
                while (heightLeft > 0) {
                    doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                    if (heightLeft > 0) {
                        doc.addPage(); // Add new page if necessary
                        position = 10; // Reset position on the new page
                    }
                }
            } else {
                // Add the table if it fits on one page
                doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            }

            // Open the PDF in a new tab or trigger download
            window.open(doc.output('bloburl'));

            // To trigger download automatically:
            // doc.save("table.pdf");
        });
    };
}
