let users = {
    "1": {
        "id": 1,
        "name": "Amrita",
        "username": "amrita123",
        "password": "pass123",
        "isadmin": true
        
    },
    "2": {
        "id": 2,
        "name": "Rahul",
        "username": "rahul123",
        "password": "pass123",
        "isadmin": false
    }
}

localStorage.setItem("users", JSON.stringify(users));