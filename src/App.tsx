import React, {useEffect, useState} from 'react';
import {Header} from "./Component/Header";
import {Search} from "./Component/Search";
import axios from "axios";
import {IPhoto} from "./Types/interfaces";
import {PhotoList} from "./Component/PhotoList";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import {Footer} from "./Component/Footer";

//
function App() {
    const [query, setQuery] = useState<string>('cat')
    const [images, setImages] = useState<IPhoto[]>([])
    const [length, setLength] = useState<string>('20')
    const [lengthImg, setLengthImg] = useState<number[]>([])
    const [activePage, setActivePage] = useState(0)


    function addQuery(search: string) {
        setQuery(search)
    }


    async function getImage() {
        setLengthImg([])
        const response = axios.get(`https://pixabay.com/api/?key=21790151-366f24d1b8589868b2f99a89c&q=${query}&per_page=${length}&page=${activePage+1}&max_width=300&max_height=200&image_type=photo`)
        const data = await response
        for (let i = 1; i <= Math.floor(data.data.totalHits / +length); i++) {
                setLengthImg(prevState => [...prevState, i])
            console.log(lengthImg)
            }

        setImages(data.data.hits)
    }
    useEffect(()=> {
        getImage()
    }, [query, length,activePage])

  return (
    <div className="App">
      <Header />
      <div className="container">
          <Search setLength={setLength} addQuery={addQuery} />
          <PhotoList photos={images} />
      </div>
        <div className="page-length">
                <div onClick={()=> {
                    if (activePage > 0) setActivePage(activePage - 1)
                }}>
                    <KeyboardArrowLeftIcon />
                </div>
                <div>{lengthImg[activePage]}</div>
                <div onClick={()=> {
                    if (activePage < lengthImg.length-1) setActivePage(activePage + 1)
                }}>
                    <KeyboardArrowRightIcon />
                </div>

        </div>
    </div>
  );
}

export default App;
