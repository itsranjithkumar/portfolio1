export default function Footer() {
    return (
      <footer className="w-full py-4 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-lg text-black mb-2 sm:mb-0">2025© All Rights Reserved</div>
            <div className="text-lg text-black mb-2 sm:mb-0">Build with ♡ by Gokulakrishnan</div>
            <a
  href="mailto:gokulakrishnan.msamy@gmail.com"
  className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 border border-pink-200 shadow-sm text-base font-semibold text-pink-700 hover:bg-pink-100 hover:shadow-lg hover:text-pink-900 transition-all duration-200"
  style={{ minWidth: 'fit-content' }}
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a3 3 0 003.22 0L22 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
  gokulakrishnan.msamy@gmail.com
</a>
          </div>
        </div>
      </footer>
    )
}