import { NextResponse } from "next/server"
import type { NewsItem } from "@/lib/types"

// This is a server-side API route to fetch news
// It helps keep API keys secure by not exposing them to the client
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category") || "technology"

  try {
    // Using the NewsAPI endpoint
    const apiKey = process.env.NEWS_API_KEY

    if (!apiKey) {
      // Return mock data if no API key is available
      return NextResponse.json({ articles: getMockNews(category as string) })
    }

    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`,
      { next: { revalidate: 3600 } }, // Revalidate every hour
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.status}`)
    }

    const data = await response.json()

    // Map the API response to our NewsItem type
    const articles = data.articles.slice(0, 5).map((article: any) => ({
      title: article.title,
      description: article.description || "No description available",
      url: article.url,
      source: article.source.name,
      publishedAt: article.publishedAt,
    }))

    return NextResponse.json({ articles })
  } catch (error) {
    console.error("Error fetching news:", error)
    // Return mock data if there's an error
    return NextResponse.json({ articles: getMockNews(category as string) })
  }
}

// Mock data for when the API is unavailable
function getMockNews(category: string): NewsItem[] {
  const mockData: Record<string, NewsItem[]> = {
    technology: [
      {
        title: "New DevOps Tools Revolutionize Deployment Pipelines",
        description: "Latest CI/CD tools are making deployments faster and more reliable than ever before.",
        url: "#",
        source: "TechCrunch",
        publishedAt: new Date().toISOString(),
      },
      {
        title: "Kubernetes 2.0 Announced with Major Improvements",
        description:
          "The popular container orchestration platform gets a major update with focus on security and ease of use.",
        url: "#",
        source: "The Verge",
        publishedAt: new Date().toISOString(),
      },
      {
        title: "AWS Launches New SRE Certification Program",
        description: "Amazon Web Services introduces a comprehensive certification for Site Reliability Engineers.",
        url: "#",
        source: "ZDNet",
        publishedAt: new Date().toISOString(),
      },
      {
        title: "GitHub Copilot Adds Support for Infrastructure as Code",
        description:
          "The AI pair programmer now helps developers write Terraform, CloudFormation, and other IaC configurations.",
        url: "#",
        source: "GitHub Blog",
        publishedAt: new Date().toISOString(),
      },
      {
        title: "Docker Simplifies Multi-Container Development",
        description:
          "New Docker Desktop features make it easier to manage complex applications with multiple containers.",
        url: "#",
        source: "Docker Blog",
        publishedAt: new Date().toISOString(),
      },
    ],
    business: [
      {
        title: "Tech Companies Increase Investment in Cloud Infrastructure",
        description: "Major tech firms are expanding their cloud capabilities to meet growing demand.",
        url: "#",
        source: "Forbes",
        publishedAt: new Date().toISOString(),
      },
      {
        title: "DevOps Engineers Among Highest Paid Tech Roles in 2025",
        description: "New salary survey shows DevOps and SRE professionals commanding top compensation packages.",
        url: "#",
        source: "Business Insider",
        publishedAt: new Date().toISOString(),
      },
      {
        title: "Startups Embrace Infrastructure as Code for Faster Scaling",
        description: "Young companies are leveraging IaC to build scalable infrastructure from day one.",
        url: "#",
        source: "TechCrunch",
        publishedAt: new Date().toISOString(),
      },
      {
        title: "Cloud Spending Expected to Reach $1 Trillion by 2026",
        description: "Analysts predict continued strong growth in cloud computing expenditures globally.",
        url: "#",
        source: "Wall Street Journal",
        publishedAt: new Date().toISOString(),
      },
      {
        title: "Tech Skills Gap Widens as Demand for DevOps Talent Grows",
        description: "Companies struggle to find qualified candidates for DevOps and cloud engineering roles.",
        url: "#",
        source: "CNBC",
        publishedAt: new Date().toISOString(),
      },
    ],
    science: [
      {
        title: "Researchers Develop New Algorithm for Cloud Resource Optimization",
        description: "Scientists create AI-powered system that reduces cloud computing costs by up to 40%.",
        url: "#",
        source: "Science Daily",
        publishedAt: new Date().toISOString(),
      },
      {
        title: "Quantum Computing Shows Promise for Complex Infrastructure Problems",
        description:
          "New research demonstrates quantum advantage for solving certain types of network optimization challenges.",
        url: "#",
        source: "Nature",
        publishedAt: new Date().toISOString(),
      },
      {
        title: "Study Reveals Impact of DevOps Practices on Software Quality",
        description:
          "Comprehensive analysis shows significant correlation between DevOps adoption and reduced defect rates.",
        url: "#",
        source: "MIT Technology Review",
        publishedAt: new Date().toISOString(),
      },
      {
        title: "New Framework Improves Reliability of Distributed Systems",
        description: "Computer scientists develop methodology for building more resilient cloud-native applications.",
        url: "#",
        source: "ACM Digital Library",
        publishedAt: new Date().toISOString(),
      },
      {
        title: "Machine Learning Models Predict Infrastructure Failures Before They Happen",
        description: "Predictive analytics helps prevent outages by identifying potential system failures in advance.",
        url: "#",
        source: "IEEE Spectrum",
        publishedAt: new Date().toISOString(),
      },
    ],
  }

  return mockData[category] || mockData.technology
}
