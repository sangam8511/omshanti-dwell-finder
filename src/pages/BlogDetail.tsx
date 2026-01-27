import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import {
  Calendar,
  User,
  Clock,
  Tag,
  ArrowLeft,
  Share2,
  Heart,
  Facebook,
  Linkedin,
  Twitter,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  featured?: boolean;
}

const blogPostsData: Record<string, BlogPost> = {
  "1": {
    id: "1",
    title: "Top 5 Residential Areas in Ranchi for Property Investment in 2026",
    excerpt:
      "Discover the most promising residential localities in Ranchi offering excellent appreciation potential and lifestyle amenities. From Harmu to Doranda, explore where to invest.",
    category: "Investment Tips",
    date: "January 15, 2026",
    readTime: "5 min read",
    author: "Ramesh Kumar",
    image: "/src/assets/residential-building.jpg",
    featured: true,
    content: `
      <h2>Introduction</h2>
      <p>Ranchi's real estate market has witnessed significant growth over the past few years. With improved infrastructure, better connectivity, and increasing demand for quality residential properties, several localities have emerged as investment hotspots. This comprehensive guide covers the top 5 residential areas that promise excellent returns and lifestyle benefits.</p>

      <h2>1. Harmu Housing Colony</h2>
      <p>Harmu remains one of the most sought-after residential areas in Ranchi. Known for its planned infrastructure, green spaces, and proximity to educational institutions, Harmu offers excellent investment potential.</p>
      <p><strong>Key Advantages:</strong></p>
      <ul>
        <li>Well-planned colony with wide roads</li>
        <li>Proximity to Ranchi's Central Business District</li>
        <li>Schools and colleges nearby</li>
        <li>Growing commercial activities</li>
        <li>Average appreciation: 8-12% annually</li>
      </ul>

      <h2>2. Doranda</h2>
      <p>Doranda is rapidly developing with new commercial complexes and residential projects. Its strategic location and affordable prices make it an attractive investment option.</p>
      <p><strong>Key Advantages:</strong></p>
      <ul>
        <li>Good connectivity to main city areas</li>
        <li>Relatively affordable compared to other prime areas</li>
        <li>Infrastructure development ongoing</li>
        <li>Shopping malls and commercial centers</li>
        <li>Average appreciation: 10-15% annually</li>
      </ul>

      <h2>3. Vaishali Nagar</h2>
      <p>Vaishali Nagar has established itself as a premium residential locality with excellent amenities and services.</p>
      <p><strong>Key Advantages:</strong></p>
      <ul>
        <li>Premium locality with modern infrastructure</li>
        <li>Excellent healthcare facilities</li>
        <li>Shopping and entertainment options</li>
        <li>Safe and well-maintained area</li>
        <li>Average appreciation: 7-10% annually</li>
      </ul>

      <h2>4. Morahabadi</h2>
      <p>Morahabadi is emerging as a new investment destination with several ongoing residential projects.</p>
      <p><strong>Key Advantages:</strong></p>
      <ul>
        <li>Early-stage investment opportunity</li>
        <li>Large available land parcels</li>
        <li>Government infrastructure development</li>
        <li>Lower prices with high growth potential</li>
        <li>Average appreciation: 12-18% annually</li>
      </ul>

      <h2>5. Pandra</h2>
      <p>Pandra offers a good mix of residential and commercial spaces with steady growth.</p>
      <p><strong>Key Advantages:</strong></p>
      <ul>
        <li>Balanced development with mixed-use projects</li>
        <li>Good transportation connectivity</li>
        <li>Emerging retail and commercial presence</li>
        <li>Family-friendly environment</li>
        <li>Average appreciation: 9-13% annually</li>
      </ul>

      <h2>Investment Tips</h2>
      <p>When investing in residential properties in Ranchi, keep these factors in mind:</p>
      <ul>
        <li>Check the locality's future development plans</li>
        <li>Verify land titles and documents thoroughly</li>
        <li>Consider proximity to schools, hospitals, and shopping centers</li>
        <li>Evaluate road connectivity and transportation options</li>
        <li>Research the builder's track record and reputation</li>
        <li>Understand the price trends in the area</li>
      </ul>

      <h2>Conclusion</h2>
      <p>These five localities represent excellent opportunities for property investment in Ranchi in 2026. Whether you're looking for immediate returns, long-term appreciation, or a perfect place to live, each area offers unique advantages. It's advisable to consult with local real estate experts and conduct thorough due diligence before making your investment decision.</p>
    `,
  },
  "2": {
    id: "2",
    title: "Complete Guide to Land Conversion (NA) in Jharkhand: Process, Documents & Timeline",
    excerpt:
      "Everything you need to know about converting agricultural land to non-agricultural use in Jharkhand, including step-by-step procedures and required documents.",
    category: "Legal & Documentation",
    date: "January 10, 2026",
    readTime: "8 min read",
    author: "Priya Singh",
    image: "/src/assets/land-conversion.jpg",
    featured: true,
    content: `
      <h2>Introduction</h2>
      <p>Land Conversion (NA) - also known as Non-Agricultural conversion - is a crucial process for those looking to convert agricultural land into non-agricultural use such as commercial, industrial, or residential purposes. This detailed guide covers everything you need to know about the NA conversion process in Jharkhand.</p>

      <h2>What is NA (Non-Agricultural) Land Conversion?</h2>
      <p>NA conversion is the legal process of changing the classification of agricultural land to non-agricultural land. This allows landowners to use their agricultural property for commercial, industrial, or residential development purposes.</p>

      <h2>Eligibility Criteria</h2>
      <p>To be eligible for NA conversion in Jharkhand, you must meet the following criteria:</p>
      <ul>
        <li>Own the agricultural land for at least 3 years</li>
        <li>Have clear land titles and documents</li>
        <li>Land should be within or near municipal/urban areas</li>
        <li>No pending legal disputes on the property</li>
        <li>Compliance with local zoning regulations</li>
      </ul>

      <h2>Required Documents</h2>
      <p>You'll need to submit the following documents for NA conversion:</p>
      <ul>
        <li>Proof of ownership (deed, registered documents)</li>
        <li>Land survey report and site plan</li>
        <li>Municipality/District approval letter</li>
        <li>No Objection Certificate (NOC) from panchayat</li>
        <li>Environmental clearance (if required)</li>
        <li>Utility connections certificate</li>
        <li>Tax payment receipts</li>
        <li>Affidavit and self-declaration</li>
      </ul>

      <h2>Step-by-Step Process</h2>
      <p><strong>Step 1: Preliminary Assessment</strong></p>
      <p>Verify your land's eligibility and check with local authorities about NA conversion possibilities.</p>

      <p><strong>Step 2: Document Preparation</strong></p>
      <p>Gather all required documents and prepare site plans and surveys.</p>

      <p><strong>Step 3: Municipal/Authority Approval</strong></p>
      <p>Obtain approval from the relevant municipal corporation or district authority.</p>

      <p><strong>Step 4: Panchayat NOC</strong></p>
      <p>Get No Objection Certificate from the local panchayat or gram sabha.</p>

      <p><strong>Step 5: Land Records Update</strong></p>
      <p>Submit application to revenue department for land classification change.</p>

      <p><strong>Step 6: Verification and Inspection</strong></p>
      <p>Authorities conduct site inspection and document verification.</p>

      <p><strong>Step 7: Final Approval and Registration</strong></p>
      <p>Once approved, register the conversion and update land records.</p>

      <h2>Timeline</h2>
      <p>The NA conversion process typically takes 3-6 months, depending on:</p>
      <ul>
        <li>Completeness of documents</li>
        <li>Local authority processing time</li>
        <li>Any additional requirements or objections</li>
        <li>Complexity of the case</li>
      </ul>

      <h2>Costs Involved</h2>
      <p>NA conversion involves various costs:</p>
      <ul>
        <li>Application fees: ₹500 - ₹2,000</li>
        <li>Land survey charges: ₹5,000 - ₹15,000</li>
        <li>Environmental clearance: ₹10,000 - ₹25,000</li>
        <li>Professional consultation: ₹10,000 - ₹50,000</li>
        <li>Registration charges: Based on property value</li>
      </ul>

      <h2>Common Challenges and Solutions</h2>
      <p><strong>Challenge: Land disputes</strong><br/>Solution: Resolve all legal disputes before applying.</p>
      <p><strong>Challenge: Document issues</strong><br/>Solution: Ensure all documents are complete and authenticated.</p>
      <p><strong>Challenge: Environmental concerns</strong><br/>Solution: Obtain necessary environmental clearances if required.</p>

      <h2>Conclusion</h2>
      <p>NA land conversion is an important legal procedure that requires proper planning and documentation. It's highly recommended to consult with legal and real estate professionals to ensure a smooth conversion process. At Om Shanti Properties, we assist numerous clients through this complex process successfully.</p>
    `,
  },
  "3": {
    id: "3",
    title: "5 Essential Tips for First-Time Home Buyers in Ranchi",
    excerpt:
      "Navigate your first property purchase with confidence. Learn about documentation, financing options, and common pitfalls to avoid.",
    category: "Buying Guides",
    date: "January 5, 2026",
    readTime: "6 min read",
    author: "Amit Sharma",
    image: "/src/assets/residential-building.jpg",
    content: `
      <h2>Introduction</h2>
      <p>Buying your first home is one of the most significant financial decisions you'll make. This guide provides essential tips to help first-time home buyers in Ranchi navigate the process successfully.</p>

      <h2>Tip 1: Get Your Finances in Order</h2>
      <p>Before starting your home search, ensure your financial situation is ready:</p>
      <ul>
        <li>Check your credit score</li>
        <li>Save for down payment (at least 10-20%)</li>
        <li>Get pre-approved for a mortgage</li>
        <li>Have emergency funds set aside</li>
        <li>Calculate your loan eligibility</li>
      </ul>

      <h2>Tip 2: Understand the Legal Requirements</h2>
      <p>Familiarize yourself with necessary documents and legal procedures:</p>
      <ul>
        <li>Property title verification</li>
        <li>NOC from municipal corporation</li>
        <li>Clear ownership documents</li>
        <li>Building approval certificates</li>
        <li>Tax payment records</li>
      </ul>

      <h2>Tip 3: Location Matters</h2>
      <p>Choose a location that fits your lifestyle and investment goals:</p>
      <ul>
        <li>Proximity to work and schools</li>
        <li>Transportation connectivity</li>
        <li>Healthcare facilities</li>
        <li>Shopping and entertainment options</li>
        <li>Future development plans</li>
      </ul>

      <h2>Tip 4: Get Professional Guidance</h2>
      <p>Work with experienced professionals:</p>
      <ul>
        <li>Real estate agents</li>
        <li>Property lawyers</li>
        <li>Home inspectors</li>
        <li>Financial advisors</li>
        <li>Tax consultants</li>
      </ul>

      <h2>Tip 5: Avoid Common Mistakes</h2>
      <p>Learn from common pitfalls:</p>
      <ul>
        <li>Don't skip property inspection</li>
        <li>Verify all documents thoroughly</li>
        <li>Don't overstrain your budget</li>
        <li>Avoid rushing into a decision</li>
        <li>Don't forget about additional costs (taxes, registration)</li>
      </ul>

      <h2>Conclusion</h2>
      <p>First-time home buying can be overwhelming, but with proper planning and guidance, you can make an informed decision that serves your long-term goals.</p>
    `,
  },
};

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  const post = id && blogPostsData[id];

  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold mb-4">
              Blog Post Not Found
            </h1>
            <p className="text-muted-foreground mb-6">
              The blog post you're looking for doesn't exist.
            </p>
            <Button onClick={() => navigate("/blog")}>Back to Blog</Button>
          </div>
        </div>
      </Layout>
    );
  }

  const relatedPosts = Object.values(blogPostsData).filter(
    (p) => p.category === post.category && p.id !== post.id
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[550px] overflow-hidden bg-gradient-primary">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-end">
          <div className="container-custom px-4 pb-12 md:pb-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Back Button */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => navigate("/blog")}
                className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 mb-6 font-medium transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </motion.button>

              {/* Category Badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm">
                  <Tag className="w-4 h-4" />
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight max-w-4xl">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-primary-foreground/90">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-display font-bold">
                    {post.author[0]}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{post.author}</p>
                    <p className="text-xs text-primary-foreground/70">Expert</p>
                  </div>
                </div>
                <div className="w-px h-6 bg-primary-foreground/30" />
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{post.readTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-background">
        <div className="container-custom px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Article Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="prose prose-lg prose-headings:font-display prose-headings:text-foreground prose-p:text-foreground/80 prose-p:leading-relaxed prose-li:text-foreground/80 prose-strong:text-foreground max-w-none"
              >
                {/* Featured Image */}
                <div className="mb-12 -mx-6 md:-mx-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-80 md:h-96 object-cover rounded-xl md:rounded-2xl shadow-lg"
                  />
                </div>

                {/* Content */}
                <div dangerouslySetInnerHTML={{ __html: post.content }} />

                {/* Divider */}
                <div className="my-12 border-t border-border" />

                {/* Share Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap items-center justify-between gap-6 p-6 bg-secondary rounded-xl"
                >
                  <div>
                    <p className="font-medium text-foreground mb-2">
                      Share this article
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Help others discover valuable insights
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      className={`p-3 rounded-lg transition-all ${
                        isLiked
                          ? "bg-accent text-white"
                          : "bg-card text-foreground hover:bg-accent/10"
                      }`}
                      title="Like this article"
                    >
                      <Heart
                        className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`}
                      />
                    </button>
                    <button className="p-3 rounded-lg bg-card text-foreground hover:bg-accent/10 transition-all">
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button className="p-3 rounded-lg bg-card text-foreground hover:bg-accent/10 transition-all">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="p-3 rounded-lg bg-card text-foreground hover:bg-accent/10 transition-all">
                      <Linkedin className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              </motion.div>

              {/* Author Bio Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-16 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-border"
              >
                <div className="flex gap-6 items-start">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-display font-bold text-2xl flex-shrink-0">
                    {post.author[0]}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-foreground mb-1">
                      {post.author}
                    </h3>
                    <p className="text-sm text-accent font-semibold mb-3">
                      Real Estate & Property Expert
                    </p>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      With over 10 years of experience in Ranchi's real estate
                      market, {post.author} is dedicated to providing clients
                      with expert guidance and comprehensive property solutions.
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent/80 transition-colors"
                    >
                      Contact {post.author.split(" ")[0]} →
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="sticky top-20 space-y-6"
              >
                {/* CTA Card */}
                <div className="p-6 bg-gradient-primary rounded-2xl text-primary-foreground">
                  <h3 className="font-display text-xl font-bold mb-3">
                    Need Expert Advice?
                  </h3>
                  <p className="text-sm text-primary-foreground/90 mb-6 leading-relaxed">
                    Our property experts are ready to help you with any real
                    estate questions.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-white text-primary hover:bg-primary-foreground">
                      Contact Us
                    </Button>
                  </Link>
                </div>

                {/* Related Articles */}
                {relatedPosts.length > 0 && (
                  <div className="p-6 bg-card rounded-2xl border border-border">
                    <h3 className="font-display text-lg font-bold text-foreground mb-4">
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.slice(0, 3).map((relatedPost) => (
                        <Link
                          key={relatedPost.id}
                          to={`/blog/${relatedPost.id}`}
                          className="group block p-4 rounded-lg hover:bg-secondary transition-colors"
                        >
                          <p className="text-xs text-accent font-semibold mb-2">
                            {relatedPost.category}
                          </p>
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                            {relatedPost.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {relatedPost.readTime}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Newsletter Signup */}
                <div className="p-6 bg-secondary rounded-2xl border border-border">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    Stay Updated
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get the latest real estate insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                    />
                    <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container-custom px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                More in {post.category}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore other helpful articles in this category
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.slice(0, 3).map((relatedPost, index) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group"
                >
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="h-full bg-card rounded-xl p-6 border border-border group-hover:border-accent/30 group-hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-accent" />
                      <span className="text-xs text-muted-foreground font-medium">
                        {relatedPost.category}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{relatedPost.date}</span>
                      <span className="text-accent font-medium">
                        {relatedPost.readTime}
                      </span>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/blog">
                <Button variant="outline" size="lg">
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-primary text-primary-foreground">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Perfect Property?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 leading-relaxed">
              Let our expert team guide you through your property journey. Whether you're buying, selling, or investing, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-primary hover:bg-primary-foreground">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;
