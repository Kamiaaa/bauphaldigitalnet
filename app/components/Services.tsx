export default function Services() {
    return (
        <div>
            <div className="mt-16 bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 min-h-screen flex flex-col justify-center items-center p-5" id='#packages'>
                {/* Title Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                        আমাদের <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7AA859] to-blue-500">প্যাকেজ সমূহ</span>
                    </h2>
                    <div className="relative inline-block">
                        <div className="w-24 h-1 bg-gradient-to-r from-[#7AA859] to-blue-500 rounded-full mb-2 mx-auto"></div>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
                        Discover our comprehensive range of services designed to meet your needs with excellence and innovation.
                    </p>
                </div>

                {/* Services Cards */}
                <div className="flex flex-wrap justify-center gap-8 max-w-6xl">

                    {/* Basic Plan Card */}
                    <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-8 w-80 max-w-full shadow-2xl transition-all duration-500 hover:-translate-y-2">
                        <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                            <div className="absolute top-0 right-0 w-0.5 h-full bg-purple-600 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 delay-100"></div>
                            <div className="absolute bottom-0 right-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 delay-200"></div>
                            <div className="absolute bottom-0 left-0 w-0.5 h-full bg-purple-600 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 delay-300"></div>
                        </div>

                        <div className="relative z-10">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                    {/* Simple Wi-Fi Icon */}
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                                    </svg>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-2">Basic Plan (সাধারন) ৫  Mbps</h3>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center">
                                    <i className="fas fa-check text-blue-400 mr-3"></i>
                                    <span className="text-gray-600 dark:text-gray-300">মাসিক মূল্য: ৳৫০০</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-check text-blue-400 mr-3"></i>
                                    <span className="text-gray-600 dark:text-gray-300">স্পিড: ৫ Mbps (Unlimited)</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-check text-blue-400 mr-3"></i>
                                    <span className="text-gray-600 dark:text-gray-300">ব্যবহারের ধরন: ব্রাউজিং, ইউটিউব, সোশ্যাল মিডিয়া, অনলাইন ক্লাস</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-check text-blue-400 mr-3"></i>
                                    <span className="text-gray-600 dark:text-gray-300">২৪/৭ কাস্টমার সাপোর্ট + দ্রুত টেকনিক্যাল সার্ভিস</span>
                                </div>
                            </div>

                            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Standard Plan Card */}
                    <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-8 w-80 max-w-full shadow-2xl transition-all duration-500 hover:-translate-y-2">
                        <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                            <div className="absolute top-0 right-0 w-0.5 h-full bg-purple-600 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 delay-100"></div>
                            <div className="absolute bottom-0 right-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 delay-200"></div>
                            <div className="absolute bottom-0 left-0 w-0.5 h-full bg-purple-600 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 delay-300"></div>
                        </div>

                        <div className="relative z-10">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                    {/* Speedometer Icon */}
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-2">Standard Plan – ১০ Mbps</h3>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center">
                                    <i className="fas fa-check text-blue-400 mr-3"></i>
                                    <span className="text-gray-600 dark:text-gray-300">মাসিক মূল্য: ৳৮০০</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-check text-blue-400 mr-3"></i>
                                    <span className="text-gray-600 dark:text-gray-300">স্পিড: ১০ Mbps (Unlimited)</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-check text-blue-400 mr-3"></i>
                                    <span className="text-gray-600 dark:text-gray-300">ব্যবহারের ধরন: অনলাইন ক্লাস, HD ভিডিও স্ট্রিমিং, গেমিং</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-check text-blue-400 mr-3"></i>
                                    <span className="text-gray-600 dark:text-gray-300">২৪/৭ কাস্টমার সাপোর্ট + দ্রুত টেকনিক্যাল সার্ভিস</span>
                                </div>
                            </div>

                            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Premium Plan Card */}
                    <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-8 w-80 max-w-full shadow-2xl transition-all duration-500 hover:-translate-y-2">
                        <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                            <div className="absolute top-0 right-0 w-0.5 h-full bg-purple-600 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 delay-100"></div>
                            <div className="absolute bottom-0 right-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 delay-200"></div>
                            <div className="absolute bottom-0 left-0 w-0.5 h-full bg-purple-600 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 delay-300"></div>
                        </div>

                        <div className="relative z-10">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                    {/* Crown/Royalty Icon */}
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                                    </svg>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-2">Premium Plan – ২০ Mbps</h3>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center">
                                    <i className="fas fa-check text-blue-400 mr-3"></i>
                                    <span className="text-gray-600 dark:text-gray-300">মাসিক মূল্য: ৳১,২০০</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-check text-blue-400 mr-3"></i>
                                    <span className="text-gray-600 dark:text-gray-300">ব্যবহারের ধরন: 4K ভিডিও, বড় ফাইল ডাউনলোড, অফিস সার্ভার ব্যবহার</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-check text-blue-400 mr-3"></i>
                                    <span className="text-gray-600 dark:text-gray-300">ফ্রি রাউটার ইনস্টলেশন</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-check text-blue-400 mr-3"></i>
                                    <span className="text-gray-600 dark:text-gray-300">প্রাধান্য ভিত্তিক সাপোর্ট</span>
                                </div>
                            </div>

                            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}