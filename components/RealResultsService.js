import Link from 'next/link'
import Image from 'next/image'

export function RealResultsService() {
  return (
<>
<section className='sectionSpace SctnRealResults srvcRealRslt'>
  <div className="container">
      <div className='SctnHdng text-center'>Rhinoplasty Results</div>
  <div className='row my-3'>
 <div className='col-4'><Link href="/real-results"><a><Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/rhinoplasty-result1.jpg'} alt="Rhinoplasty Results" className='img-fluid' layout="responsive" width={417} height={313} /></a></Link></div>
    <div className='col-4'><Link href="/real-results"><a><Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/rhinoplasty-result2.jpg'} alt="Rhinoplasty Results" className='img-fluid' layout="responsive" width={417} height={313} /></a></Link></div>
    <div className='col-4'><Link href="/real-results"><a><Image src={process.env.NEXT_PUBLIC_BASE_URL+'/images/rhinoplasty-result3.jpg'} alt="Rhinoplasty Results" className='img-fluid' layout="responsive" width={417} height={313} /></a></Link></div>
  </div>
  <div className="text-center pt-3"><Link href="/real-results"><a className="BtnRdMore">View All</a></Link></div>
  </div>
</section>
 
</>
  )
}
 
export default RealResultsService