import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import Header from './components/Header';
import Noticia from './components/Noticia';
import LogginButton from './components/LogginButton';



type Info = {
publishedAt: string;
map(arg0: (item: any) => void): import("react").ReactNode;
author: string,
content: string, 
description: string,
publishead: string,
title: string,
url: string,
urlToImage:string
}

function App() {
  const [noticia, setNoticia] = useState<Info[]>();

  const apikey = "4f57933d81f641b4927f180b946a4278";
  
  const base = "https://newsapi.org/v2/everything?q=Apple&from=2022-09-16&sortBy=popularity&apiKey=";

  const fetchMarvelInformation = async () => {
    const response = await fetch(`${base}${apikey}`);
    const responseJSON = await response.json();
    console.log(responseJSON);
    setNoticia(responseJSON.articles);
  };

  useEffect(() => {
    fetchMarvelInformation()
  }, [])

  let valor: boolean = false;

  return (
    <div className="App">
        <LogginButton />
      <Header />
     {noticia && noticia.map((item, i) => {
      if(i % 6 === 0) valor = !valor
      return <Noticia
      className={(valor) ? "bloqueNoticia" : "bloqueNoticia2"}
      image={item.urlToImage}
      fechaPublicacion={item.publishedAt}
      titulo={item.title}
      autor={item.author}
      descriptcion={item.description}
      url={item.url}
      />
     })}
    </div>
  );
}

export default App;
