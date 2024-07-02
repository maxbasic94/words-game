# Words game

This application represents game to build words. \
You can check how it works here: https://word-game-test.netlify.app

## How to run

```
 npm install
 npm start
```

Runs the app in the development mode.\
Open [http://localhost:5173/](http://localhost:3000) to view it in the browser.

## Task

Link on the document: https://docs.google.com/document/d/1N4H6Tc2M5-z7uWA-tKvT3WVWO2vf5CGSmY4W9TWaVV4/edit?usp=drivesdk

## How to use

Collect words from the available letters. \
Letters may be repeated. \
Words may not consist of all available letters. 

## Folders structure

Application consist of pages. \
Folder with components `src/components`. \
Helper functions are located in the folder `src/utils`.
Levels contain in `src/levels`. 

    
```
.
├─ src                 
│  ├─ components        # Folder with components
│  │  ├─ 
│  ├─ levels            # Folder with levels
│  ├─ styles            # Folder with global styles
│  ├─ utils             # Folder with helper functions
│ ...
```              
### Naming

Files with a capital letter contains JSX Element:
```
WordInput.tsx
```

Files with a small letter contain functions, variables, etc.
```
letters.ts
```