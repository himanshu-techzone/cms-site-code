import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'
import Header from '../../components/header'
import styles from '../../styles/blogs.module.css'
import Footer from '../../components/footer'
import { useRouter } from 'next/router';
import React, { useEffect, useState, useCallback } from "react";
import Paginations from '../../components/Paginations';
import CallBackForm from '../../components/CallBackForm';

import AppointmentForm from '../../components/AppointmentForm'

export default function Blogs({ Blog }) {
    const posts = Blog.data;
    const data = Blog.seo;
    // const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postperpage, setPostPerPage] = useState(9);

    const indexOfLastPost = currentPage * postperpage;
    const indexOfFirstPost = indexOfLastPost - postperpage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // const [data, dataSet] = useState(null)
    // const router = useRouter();
    // const url = router.asPath;
    // const type = router.pathname;
    // const fetchMyAPI = useCallback(async () => {
    //     let response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/seo-tag` + url)
    //     response = await response.json()
    //     dataSet(response)
    // }, [])

    // useEffect(() => {
    //     fetchMyAPI()
    // }, [fetchMyAPI])
    return (
        <>
            <Head>
                <title>{data?.title_tag}</title>
                <link rel="canonical" href={data?.canonical_tag} />
                <meta name="description" content={data?.description_tag} />
                <meta name="keywords" content={data?.keyword_tag} />
                <meta property="og:title" content={data?.title_tag} />
                <meta property="og:type" content="" />
                <meta property="og:image" content="" />
                <meta property="og:description" content={data?.description_tag} />
                <meta property="og:site_name" content="" />
                <meta property="og:url" content={data?.canonical_tag} />
                <meta property="twitter:title" content={data?.title_tag}/>
                <meta property="twitter:type" content="" />
                <meta property="twitter:image" content={data?.description_tag} />
                <meta property="twitter:description" content={data?.description_tag} />
                <meta property="twitter:site_name" content="" />
                <meta property="twitter:url" content={data?.canonical_tag} />
            </Head>

            <section className="breadcrum-section">
                <div className="container-fluid text-center">
                    <div className="row p-3  content">
                        <div className="col-lg-12">
                            <h2>Blogs</h2>
                        </div>
                        <div className="col-lg-12">
                            <p><Link href="/"><a className='anchor-tag'>Home</a></Link> | Blogs</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='AboutBanner hide-banner  ServicePageBanner'>
                <Image src={process.env.NEXT_PUBLIC_BASE_URL + '/images/blogs-banner.jpg'} className="img-fluid" alt="blogs" layout="responsive" width={1366} height={447} />
                <div className='AboutBannerCont hide-class'>
                    <div className='AbtBnrCaption'>
                        <div className='AboutBannerHD hide-class'>Blogs</div>
                        <div className="breadcrmb hide-class"><Link href="/"><a>Home</a></Link>/ Blogs</div>
                    </div>
                </div>

            </section>

            <CallBackForm />


            <section className={styles.blogsPage}>
                <div className={`container-fluid ${styles.manageblogimage}`}>
                    <div className="row">

                        {currentPosts.map((blog) => {
                            return (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" key={blog.id}>
                                    <div className={styles.blogThumbItem}>
                                        <Link href="/blog/[blog.url]" as={"/blog/" + blog.url}><a className={styles.blogimagemanage}><Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + '/backend/blog/' + blog.image} alt={blog.alt_tag} className={`img-fluid  ${styles.blogimagesize}`} width={450} height={240} /></a></Link>
                                        <div className={styles.BlogContBx}>
                                            <div className='row'>
                                                <div className='col-lg-6 col-5'><div className={styles.blgDate}>{blog.date}</div></div>
                                                <div className='col-lg-6 col-7'>
                                                    {/* <div className={`FtrSocialLinks ${styles.FtrSocialLinks}`}>
                                                        <Link href="/"><a className="fcbk"><i className="fa fa-facebook" aria-hidden="true"></i></a></Link>
                                                        <Link href="/"><a className="instgrm"><i className="fa fa-instagram" aria-hidden="true"></i></a></Link>
                                                        <Link href="/"><a className="yutb"><i className="fa fa-youtube" aria-hidden="true"></i></a></Link>
                                                    </div> */}
                                                </div>
                                                <div className={`col-12 ${styles.BlogCnt}`}>
                                                    <div className={styles.blogThumbItemHd}><Link href="/blog/[blog.url]" as={"/blog/" + blog.url}><a>{blog.blog_name}</a></Link></div>
                                                    <div dangerouslySetInnerHTML={{ __html: blog.short_desc }}></div>
                                                    <Link href="/blog/[blog.url]" as={"/blog/" + blog.url}><a>READ MORE</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <Paginations postperpage={postperpage} totalPosts={posts.length} paginate={paginate} />
                </div>
            </section>

            <AppointmentForm />


        </>
    )
}


Blogs.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Header />
            {page}
            <Footer />
        </Layout>
    )
}

export async function getServerSideProps({ query }) {
    // const { url } = query;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blog`);
    const Blog = await res.json();
    return {
        props: {
            Blog
        }
    }
}