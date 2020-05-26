# Introduction

A React HOC module which can be used to create Facebook like loading elelements before data is loaded.

## Installation

```
npm i react-card-loader --save
```

## How to Use

1. Import in your component,

```
import ReactCardLoader from 'react-card-loader'

```

2. Use in your component like this:

```
 <ReactCardLoader>
    your html goes here....
 </ReactCardLoader>
```

3. How to construct html(For All elements expect image)

```
<div>
    <h5 className="ph">some text</h5>
    <p className="ph">some text</h5>
    <a className="ph" href="#">some text</h5>
</div>
```

P.S: Any elements which needs to be shown loader should have the class <strong>ph</strong>

4. How to construct images

```
 <div className="image-wrapper">
      <img className="ph" src={image_souce} alt="dummy image"/>
  </div>
```

5. Working Example

```
import React from 'react';
import './App.css';
import ReactCardLoader from 'react-card-loader'

function App() {
  return (
    <div className="App">
     <ReactCardLoader isLoading={false}> // instead of false you can use state variable to check whether data has been fetched or not
        your html goes here....
      </ReactCardLoader>
  </div>
  );
}

export default App;
```


## Props

| Name      | PropType | Value        | Default |
| --------  | -------- | ------------ | ------- |
| isLoading | Boolean  | true / false | false   |


## Example

![](react-loader.png)


### Donate

If you like my work and if my product has helped you in your development please feel free to give a shoutout:

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/RajdeepC?locale.x=en_GB)


