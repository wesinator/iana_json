var rr_tbl = document.getElementById("table-dns-parameters-4");

var records = []
for (var record of rr_tbl.children[1].children) {
    
    if (!record.children[2].textContent.toUpperCase().includes("DEPRECATED") && !record.children[2].textContent.toUpperCase().includes("OBSOLETE")) {
        records.push({
            rtype: record.children[0].textContent,
            decimal_value: record.children[1].textContent,
            description: record.children[2].textContent,
            rfc_info: record.children[3].textContent.replaceAll("][", ", ").replaceAll('[', '').replaceAll(']', '').trim(),
            template: record.children[4].textContent.trim(),
            registration_date: record.children[5].textContent,
        });
    }
}
console.log(JSON.stringify(records, null, 4), records.length);
