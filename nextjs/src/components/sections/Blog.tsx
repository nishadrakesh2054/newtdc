import Link from "next/link";

interface BlogPost {
  id: number;
  image: string;
  imageAlt: string;
  tag: string;
  title: string;
  date: string;
  href: string;
  isFeatured?: boolean;
}

const blogPostsData: BlogPost[] = [
  {
    id: 1,
    image: "/images/blog/blog4.png",
    imageAlt: "Mastering the Court: TDC's Comprehensive Tennis Training Program",
    tag: "Tennis",
    title: "Mastering the Court: TDC's Comprehensive Tennis Training Program",
    date: "Dec 15, 2024",
    href: "/",
    isFeatured: true,
  },
  {
    id: 2,
    image: "/images/blog/blog1.png",
    imageAlt: "Elevate Your Game: Advanced Basketball Training Techniques at TDC",
    tag: "Basketball Training",
    title: "Elevate Your Game: Advanced Basketball Training Techniques at TDC",
    date: "Dec 10, 2024",
    href: "/",
  },
  {
    id: 3,
    image: "/images/blog/blog2.png",
    imageAlt: "Dive into Excellence: TDC's Swimming Competition Success Stories",
    tag: "Swimming Competition",
    title: "Dive into Excellence: TDC's Swimming Competition Success Stories",
    date: "Dec 5, 2024",
    href: "/",
  },
  {
    id: 4,
    image: "/images/blog/blog3.png",
    imageAlt: "From Field to Victory: Professional Football Training at Thunderbolts Development Center",
    tag: "Football Training",
    title: "From Field to Victory: Professional Football Training at Thunderbolts Development Center",
    date: "Nov 28, 2024",
    href: "/",
  },
];

const ArrowIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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
);

export default function Blog() {
  const featuredPost = blogPostsData.find((post) => post.isFeatured);
  const regularPosts = blogPostsData.filter((post) => !post.isFeatured);

  return (
    <div className="tf-widget-blog main-content">
      <div className="themeflat-container">
        <div className="widget-tf-blog">
          <div className="tf-title-wrap title-small">
            <h2 className="title-blog wow fadeInUp animated">Our Blogs</h2>
            <Link href="/blog" className="view-more wow fadeInUp animated">
              View all
              <ArrowIcon />
            </Link>
          </div>
          <div className="row">
            {featuredPost && (
              <div className="col-md-12 col-lg-6 col-xl-6 col-xxl-6 widget-blog-left">
                <article className="entry-widget-blog format-standard wow fadeInLeft animated">
                  <div className="feature-post">
                    <img src={featuredPost.image} alt={featuredPost.imageAlt} />
                  </div>
                  <div className="main-post">
                    <div className="tag">
                      <ul>
                        <li>
                          <Link href={featuredPost.href}>{featuredPost.tag}</Link>
                        </li>
                      </ul>
                    </div>
                    <h2 className="entry-title">
                      <Link href={featuredPost.href}>{featuredPost.title}</Link>
                    </h2>
                    <div className="entry-meta">
                      <span className="date line">
                        <Link href={featuredPost.href}>{featuredPost.date}</Link>
                      </span>
                    </div>
                    <Link className="more-link" href={featuredPost.href}>
                      Read More
                    </Link>
                  </div>
                </article>
              </div>
            )}
            <div className="col-md-12 col-lg-6 col-xl-6 col-xxl-6 widget-blog-right">
              {regularPosts.map((post) => (
                <article key={post.id} className="entry-item format-standard">
                  <div className="feature-post">
                    <img src={post.image} alt={post.imageAlt} />
                  </div>
                  <div className="main-post">
                    <div className="tag wow fadeInUp animated">
                      <ul>
                        <li>
                          <Link href={post.href}>{post.tag}</Link>
                        </li>
                      </ul>
                    </div>
                    <h2 className="entry-title wow fadeInUp animated">
                      <Link href={post.href}>{post.title}</Link>
                    </h2>
                    <div className="entry-meta wow fadeInUp animated">
                      <span className="date line">
                        <Link href={post.href}>{post.date}</Link>
                      </span>
                    </div>
                    <Link className="more-link wow fadeInUp animated" href={post.href}>
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
