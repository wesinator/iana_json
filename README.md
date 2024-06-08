# IANA DNS RRtypes data

Parse the list of DNS resource record types found at 
https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-4

Inspired by https://github.com/sjobe/dns_record_type_json

#### Data Scraping Notes
 - current dataset does not include rtypes that are noted on the IANA source as OBSOLETE or DEPRECATED

#### DNS usage notes
 - rtype id 255 is typically represented with the query keyword `ANY`

[NO_TRAIN]::