### JSON Input Structure
```json
{
   "contentData": Array<Block>
}
// The order of blocks determines the order in which they are displayed
```

### Block Structure
```json
{
   "type": "HEADER" | "POSTS" | "GALLERY" | "FORM" | "FOOTER",
   ...typeSpecificProps,
}
```

### Type Specific Props
```json
{
   "type": "HEADER",
   "sections": [
      {
         "title": "Link title",
         "url": "Link url"
      }
   ]
}
// A page can only contain one header,
// and only the first header will be displayed.
// The header is always displayed at the top of the page
```
```json
{
   "type": "FOOTER",
   "title": "Footer",
   "description": "Something here to give the footer a purpose!",
   "website": "Your Website Name"
}
// A page can only contain one footer,
// and only the first footer will be displayed.
// The footer is always displayed at the bottom of the page
```
```json
{
   "type": "POSTS",
   "posts": [
      '** Support for .md format in post **'
   ]
}
// Learn more about markdown syntax
// https://daringfireball.net/projects/markdown/syntax
```
```json
{
   "type": "GALLERY",
   "images": [
      {
         "title": "Image title",
         "date": "Nov 11",
         "description": "Text lead-in to additional content.",
         "image": "https://source.unsplash.com/random?wallpapers",
         "imageLabel": "Image Alt Text"
      }
      // The order of images determines the order in which they are displayed
   ]
}
```
```json
{
   "type": "FORM",
   "fields": [
      {
         "type": "INPUT",
         "label": "Input field"
      },
      {
         "type": "CHECKBOX",
         "label": "Checkbox field",
         "defaultChecked": false
      },
      {
         "type": "SELECT",
         "label": "Select field",
         "options": [
            {
               "name": "First option",
               "value": "1"
            },
            {
               "name": "Second option",
               "value": "2"
            }
         ]
      }
      // The order of fields determines the order in which they are displayed
   ]
}
```
