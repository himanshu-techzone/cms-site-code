import Link from 'next/link'
// import Image from 'next/image'


export function ServiceFAQs({postData}) {
  console.table(postData);
  return (
<>

<div className="srvcFAQs">    
     <div className="SctnHdng">FAQs</div>
    
<div className="accordion accordion-flush FaqsAccordion" id="srvcFAQsAccrdn">




</div>

</div>


</>
  )
}
 
export default ServiceFAQs

export async function getServerSideProps({query}){
  const { url } = query;
  console.log(url);
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/service-details/`+url);
  const postData = await res.json();

  return { 
    props:{
      postData
    }
  }
}