"use client";

import Link from "next/link";
import Layout from "../../components/layout/Layout";
import Breadcrum from "@/components/elements/Breadcrum";
import Image from "next/image";

interface BlogPost {
  id: number;
  image: string;
  imageAlt: string;
  tag: string;
  title: string;
  href: string;
}

interface Category {
  id: number;
  name: string;
  count: number;
  href: string;
}

interface Tag {
  id: number;
  name: string;
  href: string;
}

interface RecentPost {
  id: number;
  image: string;
  imageAlt: string;
  title: string;
  date: string;
  href: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: "/images/blog/1.png",
    imageAlt: "Master Your Stroke: Essential Swimming Techniques for Competitive Swimmers",
    tag: "Swimming",
    title: "Master Your Stroke: Essential Swimming Techniques for Competitive Swimmers",
    href: "/blog-single",
  },
  {
    id: 2,
    image: "/images/blog/2.png",
    imageAlt: "Upcoming Football Events: Join Our Championship Tournament This Season",
    tag: "Football",
    title: "Upcoming Football Events: Join Our Championship Tournament This Season",
    href: "/blog-single",
  },
];

const categories: Category[] = [
  { id: 1, name: "Training", count: 5, href: "/#" },
  { id: 2, name: "Events", count: 4, href: "/#" },
  { id: 3, name: "Football", count: 3, href: "/#" },
  { id: 4, name: "Swimming", count: 2, href: "/#" },
  { id: 5, name: "Athletics", count: 1, href: "/#" },
];

const tags: Tag[] = [
  { id: 1, name: "Training", href: "/#" },
  { id: 2, name: "Football", href: "/#" },
  { id: 3, name: "Swimming", href: "/#" },
  { id: 4, name: "Events", href: "/#" },
  { id: 5, name: "Sports Camp", href: "/#" },
];

const recentPosts: RecentPost[] = [
  {
    id: 1,
    image: "/images/blog/post-widget1.jpg",
    imageAlt: "10 Essential Skills Every Young Athlete Should Master",
    title: "10 Essential Skills Every Young Athlete Should Master",
    date: "Oct 12, 2023",
    href: "/blog-single",
  },
  {
    id: 2,
    image: "/images/blog/post-widget2.jpg",
    imageAlt: "Nutrition Tips for Peak Athletic Performance",
    title: "Nutrition Tips for Peak Athletic Performance",
    date: "Oct 12, 2023",
    href: "/blog-single",
  },
];

export default function Blog() {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div>
        <Breadcrum title="Latest News" />
        <section className="main-content blog-posts">
          <div className="themeflat-container">
            <div className="row">
              <div className="col-md-12 col-lg-9 col-xl-9 col-xxl-9 widget-blog-content">
                <div className="post-wrap">
                  {blogPosts.map((post) => (
                    <article
                      key={post.id}
                      className="entry format-standard wow fadeInUp animated"
                    >
                      <div className="feature-post">
                        <Image
                          src={post.image}
                          alt={post.imageAlt}
                          width={800}
                          height={400}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                      <div className="main-post">
                        <div className="tag">
                          <ul>
                            <li>
                              <Link href={post.href}>{post.tag}</Link>
                            </li>
                          </ul>
                        </div>
                        <h2 className="entry-title">
                          <Link href={post.href}>{post.title}</Link>
                        </h2>
                        <br />
                        <Link className="more-link" href={post.href}>
                          Read More
                        </Link>
                      </div>
                    </article>
                  ))}

                  <div className="blog-pagination wow fadeInUp animated">
                    <ul className="flat-pagination clearfix">
                      <li>
                        <Link href="/#">1</Link>
                      </li>
                      <li className="active">2</li>
                      <li>
                        <Link href="/#">
                          <i className="icon-Arrow---Right-2" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                <div className="sidebar">
                  <div className="widget widget-categories">
                    <h5 className="widget-title">Category</h5>
                    <ul>
                      {categories.map((category) => (
                        <li key={category.id}>
                          <Link href={category.href}>
                            <i className="icon-Arrow---Right-2" />
                            {category.name}
                            <span className="pull-right">{category.count}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="widget widget-tags">
                    <h5 className="widget-title">Popular Tags</h5>
                    <div className="tag">
                      <ul>
                        {tags.map((tag) => (
                          <li key={tag.id}>
                            <Link href={tag.href}>{tag.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="widget widget-popular-news">
                    <h5 className="widget-title">Recent Posts</h5>
                    <ul className="popular-news clearfix">
                      {recentPosts.map((post) => (
                        <li key={post.id}>
                          <div className="thumb">
                            <Image
                              src={post.image}
                              alt={post.imageAlt}
                              width={80}
                              height={80}
                              style={{ width: "100%", height: "auto", objectFit: "cover" }}
                            />
                          </div>
                          <div className="text">
                            <h6>
                              <Link href={post.href}>{post.title}</Link>
                            </h6>
                            <p className="date-popular-news">{post.date}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="widget widget-form-subscribe">
                    <h3>Subscribe For Daily Newsletter</h3>
                    <Image
                      src="/images/blog/subscribe.png"
                      alt="Subscribe"
                      width={300}
                      height={200}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <form action="/">
                      <input
                        type="email"
                        id="email-sb"
                        name="email"
                        placeholder="Your email address"
                      />
                      <input type="submit" defaultValue="Follow" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
