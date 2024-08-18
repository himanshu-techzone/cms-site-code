import Head from "next/head"
import Link from "next/link"


export default function Custom500() {

return (
    <>
     <Head>
        <title>500 - Server-side error occurred</title>
    </Head>

<section className="error500">
<div className='thankYouPageCont error500Cont'>
<h1>500 error</h1>
<p>Server-side error occurred</p>
<Link href="/"><a className='BtnRdMore'>Go to Home Page</a></Link>
</div>
</section>
    </>
  )
}

