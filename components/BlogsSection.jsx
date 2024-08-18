import Link from 'next/link'
import Image from 'next/image'

export function BlogsSection({stars}) {
  console.log(stars);
  return (
<>

<section className='sectionSpace HmBlogSection'>
  <div className="SctnHdng text-center">Latest Blogs</div>
<div className="container-fluid">
<div className="row pb-3 pt-2">
<div>Next stars: {stars}</div>
    {/* {postData.blog.map((blog) => {
      return ( */}
    
    {/* <div className='col-lg-4 col-md-4 col-sm-4 col-12' key={blog.blg_id}>
        <div className="card">
        <Link href={`/blog/${blog.url}`} as={"/blog/"+blog.url}><a><Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+'/backend/blog/'+blog.image} alt={blog.alt_tag} className="card-img-top" width={470} height={278} />
    </a></Link>
        <div className="card-body">
        <a href={`/blog/${blog.url}`} as={"/blog/"+blog.url}><div className="BlgTtle">{blog.blog_name}</div></a>
        <div className="BlgDate">{blog.date}</div>
        <div dangerouslySetInnerHTML={{ __html: blog.short_desc }}></div>
        </div>
        </div>
    </div> */}
    {/* )})} */}
</div>
<div className='text-center'><Link href="/blog"><a className='BtnRdMore'>View All</a></Link></div>
</div>
</section>


</>
  )
}
 
export default BlogsSection

// export async function getServerSideProps(){
//   // const { url } = query;
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home-details`);
//   const postData = await res.json();
//   return { 
//     props:{
//       postData
//     }
//   }
// }

export async function getServerSideProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}