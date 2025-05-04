import React, { useEffect, useState }  from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import RightAside from "../components/homelayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {

    const [news, setNews] = useState({})

    const data = useLoaderData()
    // console.log(data);

    const {id} = useParams()
    // console.log(id);


    useEffect(()=>{
        
       const targetedNews = data.find((singleNews)=> singleNews.id === id);
       setNews(targetedNews); 


    },[data,id])


	return (
		<div>
			<header>
				<Header></Header>
			</header>

            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10">
                
                <section className="col-span-9">
                    <h2 className="font-bold mb-5">Dragon News</h2>

                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>

                <aside className="col-span-3">

                    <RightAside></RightAside>

                </aside>
            
            
            </main>



		</div>
	);
};

export default NewsDetails;
