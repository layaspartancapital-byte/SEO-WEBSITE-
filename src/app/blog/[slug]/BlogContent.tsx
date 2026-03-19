'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import React from 'react'

type DirectiveBlock = {
  type: string
  content: string
}

type ContentBlock = string | DirectiveBlock

function parseDirectives(raw: string): ContentBlock[] {
  const cleaned = raw.replace(/<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, '')

  const blocks: ContentBlock[] = []
  const regex = /^:::(quick-answer|key-takeaways|expert-insight|author-bio|sources)\s*\n([\s\S]*?)^:::\s*$/gm
  let lastIndex = 0

  let match
  while ((match = regex.exec(cleaned)) !== null) {
    if (match.index > lastIndex) {
      blocks.push(cleaned.slice(lastIndex, match.index))
    }
    blocks.push({ type: match[1], content: match[2].trim() })
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < cleaned.length) {
    blocks.push(cleaned.slice(lastIndex))
  }

  return blocks
}

function DirectiveRenderer({ type, content }: DirectiveBlock) {
  const wrapperStyles: Record<string, string> = {
    'quick-answer': 'quick-answer bg-ember/10 border-l-4 border-ember p-6 rounded-r-lg my-8',
    'key-takeaways': 'bg-white/5 border border-white/10 p-6 rounded-lg my-8',
    'expert-insight': 'bg-white/5 border-l-4 border-white/20 p-6 rounded-r-lg my-8 italic',
    'author-bio': 'bg-white/5 border border-white/10 p-6 rounded-lg my-12',
    'sources': 'bg-white/5 border border-white/10 p-6 rounded-lg my-8',
  }

  const labels: Record<string, string> = {
    'quick-answer': 'Quick Answer',
    'key-takeaways': 'Key Takeaways',
    'expert-insight': 'Expert Insight',
    'author-bio': '',
    'sources': 'Sources & References',
  }

  const label = labels[type]

  return (
    <div className={wrapperStyles[type] || 'my-8'}>
      {label && (
        <div className={`text-xs uppercase tracking-wider font-semibold mb-3 ${type === 'quick-answer' ? 'text-ember' : 'text-white/40'}`}>
          {label}
        </div>
      )}
      <div className="prose prose-invert max-w-none prose-p:text-white/70 prose-p:leading-relaxed prose-li:text-white/70 prose-a:text-ember hover:prose-a:text-ember-bright prose-strong:text-white">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </div>
  )
}

function MarkdownBlock({ content }: { content: string }) {
  return (
    <div className="prose prose-invert max-w-none prose-headings:font-display prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-white/70 prose-p:leading-relaxed prose-strong:text-white prose-a:text-ember hover:prose-a:text-ember-bright prose-li:text-white/70 prose-blockquote:border-ember prose-blockquote:text-white/60">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  )
}

export default function BlogContent({ content }: { content: string }) {
  const blocks = parseDirectives(content)

  return (
    <div>
      {blocks.map((block, i) => {
        if (typeof block === 'string') {
          const trimmed = block.trim()
          if (!trimmed) return null
          return <MarkdownBlock key={i} content={trimmed} />
        }
        return <DirectiveRenderer key={i} {...block} />
      })}
    </div>
  )
}
