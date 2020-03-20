<?php
// Database Type : "PostgreSQL"
// Database Adapter : "postgres"
$exports = <<<'JSON'
{
    "name": "db",
    "module": "dbconnector",
    "action": "connect",
    "options": {
        "server": "postgres",
        "connectionString": "pgsql:dbname=toolbox;user=db_user;password=94XJR7yb;host=db"
    }
}
JSON;
?>