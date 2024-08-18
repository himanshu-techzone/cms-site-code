import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'
import Header from '../../components/header'
import styles from '../../styles/blogs.module.css'
import Footer from '../../components/footer'
import RightSideForm from '../../components/RightSideForm'

export default function BlogsDetails({postData})  {
	const blg = postData.data;
    const seo = postData.seo;
    return (
    <> 
    <Head>
        <title>{seo?.title_tag}</title>
        <link rel="canonical" href={seo?.canonical_tag} />
        <meta name="description" content={seo?.description_tag} />
        <meta name="keywords" content={seo?.keyword_tag} />
        <meta property="og:title" content={seo?.title_tag} />
        <meta property="og:type" content="" />
        <meta property="og:image" content="" />
        <meta property="og:description" content={seo?.description_tag} />
        <meta property="og:site_name" content="" />
        <meta property="og:url" content={seo?.canonical_tag} />
        <meta property="twitter:title" content={seo?.title_tag}/>
        <meta property="twitter:type" content="" />
        <meta property="twitter:image" content={seo?.description_tag} />
        <meta property="twitter:description" content={seo?.description_tag} />
        <meta property="twitter:site_name" content="" />
        <meta property="twitter:url" content={seo?.canonical_tag} />
    </Head>

<section className='blogPageHead'> 
</section>
<section className={`${styles.blogsPage} ${styles.blogsDetailPage}`}>
<div className="container-fluid">
<div className="row">
    
<div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className={`breadcrmb blog-pos  ${styles.BlgBreadcrmb}`}><Link href="/"><a>Home</a></Link>/ <Link href="/blog"><a> Blogs </a></Link> / {blg.blog_name} </div>
 <div className={styles.blogPostBx}>
	 <figure className={styles.managedetailblogimage}><Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+'/backend/blog/'+blg.blog_image_inner} alt={blg.alt_image_name} className={`img-fluid ${styles.BlgDetailimage}`} width={1000} height={500} /></figure>
      <h1 className={styles.blogHdng}>{blg.blog_name}</h1>


<div className='row align-items-center mb-3'>
    <div className='col-xl-8 col-lg-8 col-md-8 col-7'><div className={styles.blgDate}>{blg.date} <span><i className="fa fa-user"></i> By Admin</span></div></div>
    <div className='col-xl-4 col-lg-4 col-md-4 col-5 text-right'>
        {/* <div className={`FtrSocialLinks ${styles.BlgSocialBx}`}>
            <Link href="/"><a className="fcbk"><i className="fa fa-facebook" aria-hidden="true"></i></a></Link>
            <Link href="/"><a className="instgrm"><i className="fa fa-instagram" aria-hidden="true"></i></a></Link>
            <Link href="/"><a className="yutb"><i className="fa fa-youtube" aria-hidden="true"></i></a></Link>
        </div> */}
    </div>
</div>
<div dangerouslySetInnerHTML={{ __html: blg?.blog_description }}>
</div> 
 </div>
 <div className={styles.blogRelPost}>
<div className='row justify-content-between'>
	{(() => {
	if(postData.prev_url){ 
		return (
	<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6"><div className={styles.blogNextPrev}><Link href="/blog/[postData.prev_url]" as={"/blog/"+postData.prev_url}><a>❮ Previous Post</a></Link></div></div>
	)
        }
})()}
{(() => {
    if(postData.next_url){ 
		return (
	<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6"><div className={styles.blogNextPrev}><Link href="/blog/[postData.next_url]" as={"/blog/"+postData.next_url}><a>Next Post ❯</a></Link></div></div>
        )
}
})()}

</div>
</div>
 </div>
    
<div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
<div className='pb-4'>
<RightSideForm/>
</div>
<div className='pb-2'>
<div className={styles.latestBlgPost}>

<div className={styles.blogsidepnl}>
	<h5>Recent Posts</h5>
		<ul>
		{postData.recent.map((post) => {
    return (
			<li key={post.id}>
				<Link href={`/blog/${post.url}`} as={"/blog/"+post.url}><a>
					<Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+'/backend/blog/'+post.blog_image} width={100} height={66} alt={post.alt_image_name} />
				</a></Link>
				<div className={styles.blgcntnt}>
					<Link href={`/blog/${post.url}`} as={"/blog/"+post.url}><a>{post.blog_name}</a></Link>
					<div className={styles.blgdt}>
						<i>{post.date}</i>
					</div>
				</div>
			</li>
	)})}
		</ul>
</div>
</div>
</div>
 </div>
</div>
</div>
</section>

        </>
    )
}


BlogsDetails.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Header />
            {page}
            <Footer />
        </Layout>
    )
}

export async function getServerSideProps({query}){
    const { name } = query;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/blog-detail/`+name,
    {
      method: 'GET'
    }
  );
    const postData = await response.json();
  if (response.status == 200) {
    return { 
      props:{
        postData
      }
    } 
  }else{
    return {
      redirect: {
        destination: '/404',
      },
    };
  }
}