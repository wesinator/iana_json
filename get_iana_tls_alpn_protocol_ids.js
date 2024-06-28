// https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids

var rr_tbl = document.getElementById("table-alpn-protocol-ids");

var records = []
for (var record of rr_tbl.children[1].children) { 
        records.push({
            protocol: record.children[0].textContent,
            identification_sequence: record.children[1].textContent,
			reference: record.children[2].textContent.replaceAll("][", ", ").replaceAll('[', '').replaceAll(']', '').trim(),
        });
}

console.log(JSON.stringify(records, null, 4));
