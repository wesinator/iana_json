function ianaTableJson(table_id) {
    var tbl = document.getElementById(table_id);
    headers = tbl.children[0].children[0].innerText.trim().toLowerCase().replaceAll(" ", "_").split('_\t');

    /* Need to either convert to Array of HTMLCollection items or use a `while` loop instead of iterating over Collection with `for (var i in)`
     * For some reason, using `for .. in` will include the HTMLCollectionPrototypes after the last HTMLCollection items
     * https://stackoverflow.com/questions/222841/most-efficient-way-to-convert-an-htmlcollection-to-an-array
    */
    rows = Array.prototype.slice.call(tbl.children[1].children);

    var records = [];

    for (var i in rows) {
      obj = {}

      // enum columns of each row
      for (var j in headers) {
        field_type = headers[j];
        console.log(i, headers[j], rows[i].children, rows[i].children[j]);
        current_item = rows[i].children[j];
      
        if (field_type == "reference" && current_item.childElementCount > 0) {
          reference = current_item.textContent.replaceAll("][", ", ").replaceAll('[', '').replaceAll(']', '').trim();
          obj.reference = reference;

          // check for note field in column 3
          reference_firstLink = current_item.children[0].attributes[0].nodeValue;
          if (reference_firstLink.startsWith('#note')) {
            obj.note = document.getElementById(reference_firstLink.slice(1)).parentElement.nextElementSibling.innerText.trim();

            // remove the leading footnote in ref `n, `
            obj.reference = obj.reference.slice(3);
          }
        }
        else
            obj[field_type] = current_item.textContent.trim();
      }
      records.push(obj);
    }

console.log(JSON.stringify(records, null, 4));
}
