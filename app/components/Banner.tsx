import Link from "next/link";

// components/ISPBanner.jsx
export default function ISPBanner() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
              স্বাগতম বাউফল ডিজিটাল নেট-এ
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-6 max-w-2xl">
              ২০১৮ সালের মে মাসে প্রতিষ্ঠিত হওয়ার পর থেকে আমাদের নিরলস পরিশ্রম আর আপনাদের আন্তরিক সহযোগিতায় আজ আমরা বাউফলের সেরা ইন্টারনেট সার্ভিস প্রোভাইডার।
            </p>
            <p className="text-xl lg:text-2xl text-blue-100 mb-6 max-w-2xl">
              বাউফলে আমাদেরই রয়েছে সর্বোচ্চ গতির BDIX সংযোগ।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href={'/contact'}>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition duration-300 shadow-lg">
                Get Started
              </button>
              </Link>
              <Link href={'/packages'}>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-300">
                View Plans
              </button>
              </Link>
            </div>
            
            {/* Features */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Up to 1 Gbps Speed
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                24/7 Support
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Free Installation
              </div>
            </div>
          </div>

          {/* Right side - Illustration */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 transform rotate-3">
                <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 -rotate-3">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="text-2xl font-bold">1 Gbps</div>
                  </div>
                  <div className="mt-4 h-2 bg-white/50 rounded-full overflow-hidden">
                    <div className="h-full bg-green-400 animate-pulse" style={{width: '90%'}}></div>
                  </div>
                  <div className="mt-2 text-sm text-center">Ultra-Fast Connection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}