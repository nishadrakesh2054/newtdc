import Link from "next/link";

export default function Blog() {
  return (
    <>
      <div className="tf-widget-blog main-content">
        <div className="themeflat-container">
          <div className="widget-tf-blog">
            <div className="tf-title-wrap title-small">
              <h2 className="title-blog wow fadeInUp animated">Our Blogs</h2>
              <Link href="/blog" className="view-more wow fadeInUp animated">
                View all
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http:/www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_6718_7111)">
                    <path
                      d="M5.25 4.5L12.75 12L5.25 19.5"
                      stroke="#121212"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.75 4.5L20.25 12L12.75 19.5"
                      stroke="#121212"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </Link>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-6 col-xl-6 col-xxl-6 widget-blog-left">
                <article className="entry-widget-blog format-standard wow fadeInLeft animated">
                  <div className="feature-post">
                    <img src="/images/blog/blog4.png" alt="image" />
                  </div>
                  {/* /.feature-post */}
                  <div className="main-post">
                    <div className="tag">
                      <ul>
                        <li>
                          <Link href="/">Tennis</Link>
                        </li>
                      </ul>
                    </div>
                    <h2 className="entry-title">
                      <Link href="/">
                        Mastering the Court: TDC&apos;s Comprehensive Tennis
                        Training Program
                      </Link>
                    </h2>
                    <div className="entry-meta">
                      <span className="date line">
                        <Link href="/">Dec 15, 2024</Link>
                      </span>
                    </div>
                    <Link className="more-link" href="/">
                      Read More
                    </Link>
                    {/* /.entry-meta */}
                  </div>
                  {/* /.main-post */}
                </article>
              </div>
              <div className="col-md-12 col-lg-6 col-xl-6 col-xxl-6 widget-blog-right">
                <article className="entry-item format-standard">
                  <div className="feature-post">
                    <img src="/images/blog/blog1.png" alt="image" />
                  </div>
                  {/* /.feature-post */}
                  <div className="main-post">
                    <div className="tag wow fadeInUp animated">
                      <ul>
                        <li>
                          <Link href="/">Basketball Training</Link>
                        </li>
                      </ul>
                    </div>
                    <h2 className="entry-title wow fadeInUp animated">
                      <Link href="/">
                        Elevate Your Game: Advanced Basketball Training
                        Techniques at TDC
                      </Link>
                    </h2>
                    <div className="entry-meta wow fadeInUp animated">
                      <span className="date line">
                        <Link href="/">Dec 10, 2024</Link>
                      </span>
                    </div>
                    <Link className="more-link wow fadeInUp animated" href="/">
                      Read More
                    </Link>
                    {/* /.entry-meta */}
                  </div>
                  {/* /.main-post */}
                </article>
                <article className="entry-item format-standard">
                  <div className="feature-post">
                    <img src="/images/blog/blog2.png" alt="image" />
                  </div>
                  {/* /.feature-post */}
                  <div className="main-post">
                    <div className="tag wow fadeInUp animated">
                      <ul>
                        <li>
                          <Link href="/">Swimming Competition</Link>
                        </li>
                      </ul>
                    </div>
                    <h2 className="entry-title wow fadeInUp animated">
                      <Link href="/">
                        Dive into Excellence: TDC&apos;s Swimming Competition
                        Success Stories
                      </Link>
                    </h2>
                    <div className="entry-meta wow fadeInUp animated">
                      <span className="date line">
                        <Link href="/">Dec 5, 2024</Link>
                      </span>
                    </div>
                    <Link className="more-link wow fadeInUp animated" href="/">
                      Read More
                    </Link>
                    {/* /.entry-meta */}
                  </div>
                  {/* /.main-post */}
                </article>
                <article className="entry-item format-standard">
                  <div className="feature-post">
                    <img src="/images/blog/blog3.png" alt="image" />
                  </div>
                  {/* /.feature-post */}
                  <div className="main-post">
                    <div className="tag wow fadeInUp animated">
                      <ul>
                        <li>
                          <Link href="/">Football Training</Link>
                        </li>
                      </ul>
                    </div>
                    <h2 className="entry-title wow fadeInUp animated">
                      <Link href="/">
                        From Field to Victory: Professional Football Training at
                        Thunderbolts Development Center
                      </Link>
                    </h2>
                    <div className="entry-meta wow fadeInUp animated">
                      <span className="date line">
                        <Link href="/">Nov 28, 2024</Link>
                      </span>
                    </div>
                    <Link className="more-link wow fadeInUp animated" href="/">
                      Read More
                    </Link>
                    {/* /.entry-meta */}
                  </div>
                  {/* /.main-post */}
                </article>
              </div>
            </div>
          </div>
        </div>
        {/* widge blog */}
      </div>
    </>
  );
}
