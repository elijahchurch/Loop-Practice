window.onload = function (){
    
    const header = document.querySelector("h1");
    header.remove();

    const newHeader = document.createElement("h1");
    newHeader.append("Webpage Recreation Practice");
    document.body.append(newHeader);
    const newParagraph = document.createElement("p");
    newParagraph.append("The HTML of this webpage was created with JavaScript.");
    document.body.append(newParagraph);
    const newImage = document.createElement("img");
    newImage.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
    newImage.setAttribute("style", "width:50%");
    document.body.append(newImage);
    const secondHeader = document.createElement("h1");
    secondHeader.append("Facts about the Multicolored Tanager");
    document.body.append(secondHeader);

    const newList = document.createElement("ul");
    document.body.append(newList);
    const listItems1 = document.createElement("li");
    listItems1.append("It is endemic to the mountains of Columba.");
    newList.prepend(listItems1);
    const listItems2 = document.createElement("li");
    listItems2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet");
    newList.append(listItems2);

    const newHeader2 = document.createElement("h2");
    newHeader2.append("Source");
    document.body.append(newHeader);

    const newLink = document.createElement("a");
    newLink.setAttribute("href","https://en.wikipedia.org/wiki/Multicoloured_tanager");
    newLink.append("Wiki");
    document.body.append(newLink);

    const ol = document.createElement("ol");
    document.body.append(ol);
    const icecreamList = ["mint", "vanilla", "chocolate"]
    icecreamList.forEach(function(flavor) {
        const li = document.createElement("li");
        li.append(flavor);
        ol.append(li);
});
};