function magicClick(componentId) {
    if (typeof window == 'undefined') {
        return
    }
    if (document == undefined) {
        alert("the doc is null")
        return
    }
    const node = document.getElementById(componentId)

    if (node == undefined) {
        alert("the node is null: " + componentId)
        return
    }
    const htmlNode = node.cloneNode(true)
    // const htmlNode = node.cloneNode(true);
    console.log(htmlNode)
    const newWindow = window.open('', 'Imprimiendo'); // Optional: Provide a window name
    if (newWindow == undefined) {
        alert("the newwindow is null")
        return
    }
    // Create a new document specifically for printing (avoids unnecessary styles)
    const printDoc = document.implementation.createHTMLDocument('Imprimiendo componente: ' + componentId);
    const body = printDoc.body;
    const oldHeadContent = document.head.innerHTML; // Get content of old head

    // Clone the old head content (avoids security risk)
    const newHead = printDoc.createElement('head');
    newHead.innerHTML = oldHeadContent;

    body.appendChild(htmlNode);
    printDoc.documentElement.insertBefore(newHead, body); // Insert cloned head before body

    console.log(printDoc.documentElement.outerHTML)
    newWindow.document.write(printDoc.documentElement.outerHTML);
    newWindow.document.close(); // Important for proper printing

    newWindow.focus();
    newWindow.matchMedia('print');

    mediaQueryList.addListener((mql) => {
        if (mql.matches) {
            console.log('Page is being printed.');
        } else {
            console.log('Page printing is finished.');
        }
    });
    newWindow.print(); // Trigger the print dialog


}