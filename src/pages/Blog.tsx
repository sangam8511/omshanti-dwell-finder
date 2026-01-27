import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock, Tag } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Top 5 Residential Areas in Ranchi for Property Investment in 2026",
    excerpt: "Discover the most promising residential localities in Ranchi offering excellent appreciation potential and lifestyle amenities. From Harmu to Doranda, explore where to invest.",
    category: "Investment Tips",
    date: "January 15, 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: "2",
    title: "Complete Guide to Land Conversion (NA) in Jharkhand: Process, Documents & Timeline",
    excerpt: "Everything you need to know about converting agricultural land to non-agricultural use in Jharkhand, including step-by-step procedures and required documents.",
    category: "Legal & Documentation",
    date: "January 10, 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: "3",
    title: "5 Essential Tips for First-Time Home Buyers in Ranchi",
    excerpt: "Navigate your first property purchase with confidence. Learn about documentation, financing options, and common pitfalls to avoid.",
    category: "Buying Guides",
    date: "January 5, 2026",
    readTime: "6 min read",
  },
  {
    id: "4",
    title: "Ranchi Real Estate Market Trends 2026: What Buyers and Sellers Need to Know",
    excerpt: "An in-depth analysis of current property prices, emerging localities, and investment opportunities in Ranchi's dynamic real estate market.",
    category: "Market Updates",
    date: "December 28, 2025",
    readTime: "7 min read",
  },
  {
    id: "5",
    title: "How to Maximize Rental Income from Your Property: A Landlord's Guide",
    excerpt: "Learn proven strategies to attract quality tenants, optimize rent pricing, and maintain your rental property effectively for maximum returns.",
    category: "Rental Management",
    date: "December 20, 2025",
    readTime: "6 min read",
  },
  {
    id: "6",
    title: "Legal Checklist: Essential Documents for Property Purchase in Jharkhand",
    excerpt: "Ensure a smooth property transaction with this comprehensive checklist of required documents and verification steps for Jharkhand properties.",
    category: "Legal & Documentation",
    date: "December 15, 2025",
    readTime: "5 min read",
  },
  {
    id: "7",
    title: "Harmu Housing Colony: A Comprehensive Locality Guide for Homebuyers",
    excerpt: "Explore the connectivity, amenities, property prices, and lifestyle advantages of living in Harmu, one of Ranchi's most sought-after localities.",
    category: "Locality Guides",
    date: "December 10, 2025",
    readTime: "7 min read",
  },
  {
    id: "8",
    title: "Success Story: From Agricultural Land to Commercial Complex - A Case Study",
    excerpt: "Read how we helped our client successfully convert and develop a 2-acre plot into a thriving commercial hub through strategic planning and execution.",
    category: "Success Stories",
    date: "December 5, 2025",
    readTime: "4 min read",
  },
];

const categories = [
  "All",
  "Investment Tips",
  "Buying Guides",
  "Legal & Documentation",
  "Market Updates",
  "Rental Management",
  "Locality Guides",
  "Success Stories",
];

const Blog = () => {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]" />
        </div>
        <div className="container-custom px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Real Estate <span className="text-gold">Insights</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              Stay informed with the latest trends, tips, and news from Ranchi's property market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-secondary border-b border-border">
        <div className="container-custom px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="font-display text-2xl font-bold text-foreground">Featured Articles</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center">
                  <span className="font-display text-4xl text-primary/30">ॐ</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        Om Shanti Team
                      </span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-primary font-medium text-sm flex items-center gap-1 hover:text-gold transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Regular Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="font-display text-2xl font-bold text-foreground">Latest Articles</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-xl p-6 border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-4 h-4 text-gold" />
                  <span className="text-xs text-muted-foreground">{post.category}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest real estate insights, market updates, and exclusive property listings.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="btn-gold">Subscribe</button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
