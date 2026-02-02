import React, { useState } from 'react'
import RepoSearch from './components/RepoSearch'
import RepoDetails from './components/RepoDetails'

export default function App() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="app">
      <div className="bg-anim" aria-hidden="true" />
      <header>
        <h1>Search repositories</h1>
        <p>Search public repositories and view basic details (demo)</p>
      </header>
      <main>
        <RepoSearch onSelect={(repo) => setSelected(repo)} />
        {selected && <RepoDetails repo={selected} onClose={() => setSelected(null)} />}
      </main>
    </div>
  )
}
