import Link from 'next/link'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react';

export function RealResults() {

  const [resultdata, result] = useState(null);

  const fetchMyAPI = useCallback(async () => {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/real-result-desk`
    );
    response = await response.json();
    result(response);
  }, []);
  useEffect(() => {
    fetchMyAPI();
  }, [fetchMyAPI]);

  return (
    <>
      <section className="sectionSpace  SctnRealResults srvcRealRslt">
        <div className="container">
          <div className="SctnHdng text-center">Real Results</div>
          <div className="row my-3 ">
            {resultdata?.result.map((post) => {
              return (
                <div className="col-4 desk-view" key={post.id}>
                  <Link href={"/real-results/"}>
                    <a>
                      <Image
                        src={
                          process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                          "/backend/service_result/inner/" +
                          post.image
                        }
                        alt={post.alt_tag}
                        className="img-fluid"
                        layout="responsive"
                        width={417}
                        height={313}
                      />
                    </a>
                  </Link>
                  <p>*Opinions / Results may vary from person to person.</p>
                </div>
              );
            })}
          </div>
          <div className="text-center pt-3">
            <Link href={"/real-results/"}>
              <a className="BtnRdMore">VIEW ALL</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
 
export default RealResults