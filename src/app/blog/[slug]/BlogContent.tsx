'use client'

export default function BlogContent({ content }: { content: string }) {
  const paragraphs = content.split('\n\n')

  return (
    <div className="prose prose-invert max-w-none prose-headings:font-display prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-white/70 prose-p:leading-relaxed prose-strong:text-white prose-a:text-ember hover:prose-a:text-ember-bright prose-li:text-white/70">
      {paragraphs.map((p, i) => {
        if (p.startsWith('## ')) {
          return <h2 key={i}>{p.replace('## ', '')}</h2>
        }
        if (p.startsWith('### ')) {
          return <h3 key={i}>{p.replace('### ', '')}</h3>
        }
        if (p.startsWith('**') && p.endsWith('**')) {
          return <h4 key={i} className="text-white font-semibold mt-6 mb-2">{p.replace(/\*\*/g, '')}</h4>
        }
        if (p.startsWith('**')) {
          return (
            <p key={i}>
              <strong>{p.split('**')[1]}</strong>
              {p.split('**').slice(2).join('')}
            </p>
          )
        }
        return <p key={i}>{p}</p>
      })}
    </div>
  )
}
