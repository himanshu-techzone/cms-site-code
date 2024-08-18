import Head from 'next/head'
import React, {useEffect, useState,  useCallback} from 'react';
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'
import Header from '../../components/header'
import Footer from '../../components/footer'
import AppointmentForm from '../../components/AppointmentForm'
import {useRouter} from 'next/router';

// const fetchURL = "https://jsonplaceholder.typicode.com/todos/";
// const getItems = () => fetch(fetchURL).then(res => res.json());
// const Posts = ({data}) => {
//   const [posts, setPosts] = useState([
//     {title: 'test', name: 'Hello world', date: '6/10/2021'},
//     {title: 'test2', name: 'world', date: '6/10/2021'}
//   ]);

//   useEffect(() => {
//       setPosts(data.posts);
//   }, [setPosts, data]);
  
//   // Add this condition below
//   if(!posts){
//       return null;
//   }
//   return (
//       posts.map((post) => {
//           return(
//               <p key={post.title}>{post.title}<br/></p>
//           );
//       })
//   );
// }
// export default Posts;
// const posts = [
//   {
//     "id": 1,
//     "name": "sat"
// },
// {
//   "id": 2,
//   "name": "sat Kumar"
// }

// ]
function ServiceMain({ posts }) {
  const data = posts;
  // const [data, dataSet] = useState(null)
  //   const router = useRouter();
  //   const url = router.asPath;
  //   const type = router.pathname;
  //   const fetchMyAPI = useCallback(async () => {
  //     let response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/seo-tag`+url)
  //     response = await response.json()
  //     dataSet(response)
  //   }, [])
  
  //   useEffect(() => {
  //     fetchMyAPI()
  //   }, [fetchMyAPI])
    return (
      <>
        <Head>
          <title>{data?.seo.title_tag}</title>
          <link rel="canonical" href={data?.seo.canonical_tag} />
          <meta name="description" content={data?.seo.description_tag} />
          <meta name="keywords" content={data?.seo.keyword_tag} />
          <meta property="og:title" content={data?.seo.title_tag} />
          <meta property="og:type" content="" />
          <meta property="og:image" content="" />
          <meta property="og:description" content={data?.seo.description_tag} />
          <meta property="og:site_name" content="" />
          <meta property="og:url" content={data?.seo.canonical_tag} />
          <meta property="twitter:title" content={data?.seo.title_tag}/>
          <meta property="twitter:type" content="" />
          <meta property="twitter:image" content={data?.seo.description_tag} />
          <meta property="twitter:description" content={data?.seo.description_tag} />
          <meta property="twitter:site_name" content="" />
          <meta property="twitter:url" content={data?.seo.canonical_tag} />
        </Head>

        <section className="breadcrum-section">
          <div className="container-fluid text-center">
            <div className="row p-3 mb-2 content">
              <div className="col-lg-12">
                <h2>Services</h2>
              </div>
              <div className="col-lg-12">
                <p>
                  <Link href="/">
                    <a className="anchor-tag">Home</a>
                  </Link>{" "}
                  | Services
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="AboutBanner p-0 hide-banner ServicePageBanner">
          <Image
            src={
              process.env.NEXT_PUBLIC_BASE_URL + "/images/service-banner.jpg"
            }
            className="img-fluid"
            alt="aestiva-hospital"
            layout="responsive"
            width={1366}
            height={450}
          />
          <div className="AboutBannerCont hide-class">
            <div className="AbtBnrCaption">
              <div className="AboutBannerHD hide-class">Services</div>
              <p>
                Best Cosmetic and Plastic Surgery
                <br />
                Specialists Hospital in Delhi
              </p>
              <div className="breadcrmb hide-class">
                <Link href="/">
                  <a>Home</a>
                </Link>
                / Services
              </div>
            </div>
          </div>
        </section>
        <ul>
          {/* {posts.map((post) => {
    return <li>
      {post.name}
    </li>
  })} */}
        </ul>

        <section className="sectionSpace srvcPgOne">
          <div className="container">
            {/* <div className='SctnHdng SctnPgHdng text-center'>Services</div> */}
            <div className="row justify-content-center">
              {posts.data.map((post) => {
                // const s = "<h1>Remove all <b>html tags</b></h1>"
                // return dangerouslySetInnerHTML={ __html: s };

                return (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12 srvceCatItemsBx"
                    key={post.ser_id}
                  >
                    <div className="card">
                      <Image
                        src={
                          process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                          "/backend/service/image/" +
                          post.image
                        }
                        layout="responsive"
                        className="img-fluid"
                        alt="image"
                        width={505}
                        height={246}
                      />
                      <div className="card-body text-center">
                        <div className="srvcCatHd">{post?.name}</div>
                        <div
                          dangerouslySetInnerHTML={{ __html: post.short_desc }}
                        ></div>
                        <Link href="/[url]" as={"/" + post.url}>
                          <a className="BtnRdMore stretched-link">VIEW ALL</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* <div className='col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12 srvceCatItemsBx'>
<div className="card">
  <Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/about-aestiva-hospital.jpg'} layout='responsive' className="img-fluid" alt="image" width={505} height={246}/>
  <div className="card-body text-center">
    <div className="srvcCatHd">Rhinoplasty</div>
    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link href="/rhinoplasty"><a className="BtnRdMore stretched-link">Read more</a></Link>
  </div>
</div>
    </div>
        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12 srvceCatItemsBx'>
<div className="card">
  <Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/about-aestiva-hospital.jpg'} layout='responsive' className="img-fluid" alt="image" width={505} height={246}/>
  <div className="card-body text-center">
    <div className="srvcCatHd">Rhinoplasty</div>
    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link href="/rhinoplasty"><a className="BtnRdMore stretched-link"></a></Link>
  </div>
</div>
    </div> */}
            </div>
          </div>
        </section>

        <AppointmentForm />
      </>
    );
}


ServiceMain.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Header />
            {page}
            <Footer />
        </Layout>
    )
}

// export async function getserviceProps(){

//   const response = await fetch('http://localhost:8091/api/service');
//   const mods = await response.json();

//   return {
//       props: { mods, },
//   };
// }

// export async function getStaticProps(){
//   const res = await fetch('http://localhost:8091/api/service');
//   const posts = await res.json();

//   return {
//     props:{
//       posts
//     }
//   }
// }

export async function getServerSideProps(){
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/service`);
  const posts = await res.json();

  return {
    props:{
      posts
    }
  }
}




// function App() {
//   const [items, setItems] = useState();

//   useEffect(() => {
//     getItems().then(data => setItems(data));
//   }, []);

//   return (
//     <div>
//       {items.map(item => (
//         <div key={item.id}>{item.title}</div>
//       ))}
//     </div>
//   );
// }

export default ServiceMain
