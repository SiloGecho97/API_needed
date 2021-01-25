<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">IMINN</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> ABout The Project
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [API needed ](#Api_needed)
- [API Description](#deployment)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

Write about 1-2 paragraphs describing the purpose of your project.

## 🏁 API Needed <a name = "api_needed"></a>

Below are api needed based your prototype. 

### User Related API.

Authenticaton and user related API

```
Get User
fields { username, email, password, token(optional),role,fullName    }
```

```
Create User
fields { username, email, password, full name }
```

```
Login
fields { username, email, password }
```


Profile
```
Save profile POST
fields { role, ... }
```

```
Get List of Role to Select, GET
fields { RoleName,value }
```



### Game  API

Below are game related APIs

```
Create Game,POST
fields { location,date,startTime,price,userId }
```

```
Search Game,GET
fields { code }
```

Game Specific detail(Game Information), GET
```
Game info,GET
fields { gameId }
return {
    gameInfos
}
```

Game Suggestion nearyby
```
Select nearyby Games, GET
field { GameName, time }
```


Show User matches List
```
Machtes GET
```

Get Request for statics of user,
This may include
```
1. Number Game played,
2. Price Related,
3. Matches 
4. etc
```

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@silogecho97](https://github.com/silogecho97) - Idea & Initial work

