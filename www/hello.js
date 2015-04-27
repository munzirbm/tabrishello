var IMAGE_PATH = "images/";
var PAGE_MARGIN = 16;
var people = [
  {firstName:"Holger", lastName:"Staudacher", image:IMAGE_PATH + "img.png"},
  {firstName:"Holger", lastName:"Staudacher", image:IMAGE_PATH + "img.png"}	
];

var page = tabris.create("Page", {
  title: "Collection View",
  topLevel: true
});

tabris.create("CollectionView", {
  layoutData: {left: 0, top: 0, right: 0, bottom: 0},
  items: people,
  itemHeight: 72,
  initializeCell: function(cell) {
    var imageView = tabris.create("ImageView", {
        layoutData: {left: PAGE_MARGIN, centerY: 0, width: 32},
        scaleMode: "fit"	
      }).appendTo(cell);
      var titleTextView = tabris.create("TextView", {
        layoutData: {left: 64, right: PAGE_MARGIN, top: PAGE_MARGIN},
        markupEnabled: true,
        textColor: "#4a4a4a"
      }).appendTo(cell);
      var authorTextView = tabris.create("TextView", {
        layoutData: {left: 64, right: PAGE_MARGIN, top: [titleTextView, 4]},
        textColor: "#7b7b7b"
      }).appendTo(cell);
      cell.on("itemchange", function(p) {
		  console.log(p);	
        imageView.set("image", p.image);
        titleTextView.set("text", p.firstName);
        authorTextView.set("text", p.lastName);
      });
  }
}).on("select", function(target, value) {
  console.log("selected", value.firstName);
}).appendTo(page);

page.open();
