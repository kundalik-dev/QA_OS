# SQL tables and columns generateion

## Final output

```sql
user(id pk, username, password)
order(id pk, userid fk->user.id, price)
```

## Extract Schema From SQL Server

```SQL
SELECT
    t.name AS table_name,
    c.name AS column_name,
    ty.name AS data_type,
    CASE
        WHEN pk.column_id IS NOT NULL THEN 'pk'
        ELSE ''
    END AS is_primary_key
FROM sys.tables t
JOIN sys.columns c ON t.object_id = c.object_id
JOIN sys.types ty ON c.user_type_id = ty.user_type_id
LEFT JOIN (
    SELECT ic.object_id, ic.column_id
    FROM sys.indexes i
    JOIN sys.index_columns ic
        ON i.object_id = ic.object_id
        AND i.index_id = ic.index_id
    WHERE i.is_primary_key = 1
) pk ON c.object_id = pk.object_id AND c.column_id = pk.column_id
ORDER BY t.name, c.column_id;
```

### Result will be

```
table_name | column_name | data_type | is_primary_key
user       | id          | int       | pk
user       | username    | varchar   |
user       | password    | varchar   |
order      | id          | int       | pk
order      | userid      | int       |
order      | price       | decimal   |
```

## 2. Extract Foreign Keys

```SQL
SELECT
    fk.name AS fk_name,
    tp.name AS parent_table,
    cp.name AS parent_column,
    tr.name AS ref_table,
    cr.name AS ref_column
FROM sys.foreign_keys fk
JOIN sys.foreign_key_columns fkc
    ON fk.object_id = fkc.constraint_object_id
JOIN sys.tables tp
    ON fkc.parent_object_id = tp.object_id
JOIN sys.columns cp
    ON fkc.parent_object_id = cp.object_id
    AND fkc.parent_column_id = cp.column_id
JOIN sys.tables tr
    ON fkc.referenced_object_id = tr.object_id
JOIN sys.columns cr
    ON fkc.referenced_object_id = cr.object_id
    AND fkc.referenced_column_id = cr.column_id;`
```

### Result will be

```
parent_table | parent_column | ref_table | ref_column
order        | userid        | user      | id
```

## 3. Convert to Compact AI Format

```js
const fs = require("fs");
const csv = require("csv-parser");

const tables = {};

fs.createReadStream("schema.csv")
  .pipe(csv())
  .on("data", (row) => {
    const table = row.table_name;

    if (!tables[table]) tables[table] = [];

    let col = row.column_name;

    if (row.is_primary_key === "pk") col += " pk";

    tables[table].push(col);
  })
  .on("end", () => {
    Object.entries(tables).forEach(([table, cols]) => {
      console.log(`${table}(${cols.join(", ")})`);
    });
  });
```
