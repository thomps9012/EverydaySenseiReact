module.exports = {
    "development": {
        "username": "root",
        "password": "root",
        "database": "everydaysensei",
        "host": "127.0.0.1",
        "port": 3306,
        "dialect": "mysql"
    },
    "production": {
        "use_env_variable": "JAWSDB_URL",
        "dialect": "mysql"
    }
}