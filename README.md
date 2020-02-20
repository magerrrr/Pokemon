## ReactJS app for finding your favorite [Pokemon](https://pokemon.magerrrr.now.sh/)
You can open this link to see [DEMO](https://pokemon.magerrrr.now.sh/)  
This application was created with Create React App.  
The app consumes the following API [PokeAPI](https://pokeapi.co/).  

### How to setup work environment
* Download and install the latest [Nodejs](https://nodejs.org/en/download/stable/).
* Run `npm start` from you repository folder to download the required modules. All dependent modules will be located in the  *node_modules* folder.
* The local repo folder has the following structure: <pre>
    node_modules - app dependences restored by `npm install` command, you can delete this folder and restore later again.
    
    public - folder with favicon, iindex.html, logos, manifest.json and robots.txt files.
    
    src - folder with components folder which includes 6 independent components, helpers folder which includes pokemon.js file with object with color for filling pokemons types, services folder which includes file with function.
    
    and also App.css - file with styles for App.js, index.css and index.js files.
</pre>

### Features

- displaying ALL Pokemons with their avatar, stats, basic information and type.
- Filter Pokemon by Type(Water, Electric etc)

### Guide

- By default, when you open application 20 Pokemons are loaded from the server.
- If you want to get next 20 pokemons - press the next button.
- If you want to get previous 20 pokemons - press the previous button.
- You can get ALL Pokemons from the server. It's simple - for it you can press "Get all pokemons!" button.
- You can find your favorite Pokemon by type - for it chooses a pokemon's type.
