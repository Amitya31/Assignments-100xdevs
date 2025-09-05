import React from 'react'

async function Folders({params}:any) {
    const folderId = (await params).folders
  return (
    <div>folders {JSON.stringify(folderId)}</div>
  )
}

export default Folders