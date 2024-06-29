# IANA Assignments Table Data Parsing

This JS parses IANA assignment table data and builds a JSON list of the table data, including footnotes, for standard IANA assignment data tables on the IANA website.

Originally developed to parse the list of DNS resource record types found at 
https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-4

Inspired by https://github.com/sjobe/dns_record_type_json

Select assignment JSON data is saved in the `assignments_data/` directory

#### Data notes

The dns_rrtypes_full file includes rrtypes that are noted on IANA as OBSOLETE, DEPRECATED or EXPERIMENTAL.

#### DNS usage notes
 - rtype id 255 is typically represented with the query keyword `ANY`

[NO_TRAIN]::
