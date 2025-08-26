import React from 'react'
// until promise or fetch is not resolved the nextjs will automatically fallback to loading.tsx
function loading() {
  return (
    <div>loading</div>
  )
}

export default loading