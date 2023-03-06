import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import {useState,useEffect } from "react";
import Cardcomp from "./Card";
import Navbarcomp from './Navbar'

export default function LandingPagecomp(props){

    const [news,setNews]=useState([])
    const [page,setPage]=useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const fetchResultFromApi = async() => {
        let apiResponse = await fetch(`https://newsapi.org/v2/top-headlines?language=en&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=16`)
        let result = await apiResponse.json();
        setTotalResults(result.totalResults)
        await setNews(result.articles)
        //console.log(news)
    }

const url = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'df5207d406msh18612d9fcb9c1bfp164c2ejsn0c841129c196',
    'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));




    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - ShowMeNews`;
        fetchResultFromApi(); 
        // eslint-disable-next-line
    }, [])

    const handleNext = ()=> {
        
        if( Math.ceil(totalResults/16) > 7 ){
            setPage(page+1)
            fetchResultFromApi()
        }
    }
    const handlePrevious = ()=> {
        if(page>=2){
            setPage(page-1)
            fetchResultFromApi();
        }
    }

    //animtion on scroll
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }

    window.addEventListener("scroll", reveal);

    return(
        <>
        <Navbarcomp></Navbarcomp>
        <br></br>
        <h3 style={{color:"white"}}>Get In Touch With The World</h3>
        <br></br><br></br>
            <Row xs={1} md={4} className="g-4">
                {news.length>0 ?
                    news.map((n) => (
                        <Col  key={n.url}>
                            {/* remove some characters from the end of description to remain card of same length */}
                            {/* {n.description.length+n.source.name.length+n.title.length>250 ? (n.description=n.description.substring(0,(n.description.length+n.source.name.length+n.title.length-250))).concat('.....') : null} */}
                                
                            <Cardcomp title={n.title ? n.title : ""} description={n.description ? n.description : ""} imageUrl={n.urlToImage ? n.urlToImage : "https://www.shutterstock.com/image-vector/colorful-abstract-banner-template-dummy-260nw-1538384741.jpg"} newsUrl={n.url} author={n.author} date={n.publishedAt} source={n.source.name} />
                        </Col>
                    )) 
                    : <h1>Loading</h1>
                }
            </Row>
            <div className="ButtonContainer">
                <Button variant="secondary" type="button" onClick={()=>handlePrevious()}> Previous</Button>
                <Button variant="secondary" type="button" onClick={()=>handleNext()}>Next </Button>
            </div>
        </>
    )

}