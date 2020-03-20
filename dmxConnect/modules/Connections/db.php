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
        "connectionString": "pgsql:dbname=spa;user=db_user;password=o9Z7P3Lf;host=db"
    }
}
JSON;
?>