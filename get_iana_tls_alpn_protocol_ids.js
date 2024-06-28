// https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids

var rr_tbl = document.getElementById("table-alpn-protocol-ids");

var records = []
for (var record of rr_tbl.children[1].children) {
    reference = record.children[2];
    obj = {
        protocol: record.children[0].textContent,
        identification_sequence: record.children[1].textContent,
        reference: reference.textContent.replaceAll("][", ", ").replaceAll('[', '').replaceAll(']', '').trim(),
    }

    // check for note field in column 3
    reference_firstLink = reference.children[0].attributes[0].nodeValue;
    if (reference_firstLink.startsWith('#'))
        obj.note = document.getElementById(reference_firstLink.slice(1)).parentElement.nextElementSibling.innerText.trim();

    records.push(obj);
}

console.log(JSON.stringify(records, null, 4));
