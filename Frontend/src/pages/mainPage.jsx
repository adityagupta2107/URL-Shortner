import React, { useState } from 'react'
import { createShortUrl } from '../api/shorturl.api'

const MainPage = () => {
  const [url, setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [copied, setCopied] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await createShortUrl(url)
      // console.log({ data })
      setShortUrl(data)
      setCopied(false) // reset copy state whenever a new URL is generated
    } catch (err) {
      console.error("Failed to shorten URL:", err)
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 w-96 p-6 border-2 border-red-500 rounded-lg bg-white shadow-md'
      >
        <h1 className='bg-cyan-600 text-white text-center py-2 rounded font-bold'>
          Shorten Your URL
        </h1>

        <input
          type='url'
          placeholder='Enter your URL'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className='border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500'
        />

        <button
          type='submit'
          className='bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700 transition'
        >
          Generate Short URL
        </button>

        {shortUrl && (
          <div className='flex items-center justify-between gap-2 border border-gray-300 rounded px-3 py-2 bg-gray-50'>
            
             <a href={shortUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='text-cyan-600 underline break-all text-sm'
            >
              {shortUrl}
            </a>
            <button
              type='button'
              onClick={handleCopy}
              className='bg-gray-800 text-white text-sm px-3 py-1 rounded hover:bg-gray-900 transition shrink-0'
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        )}
      </form>
    </div>
  )
}

export default MainPage