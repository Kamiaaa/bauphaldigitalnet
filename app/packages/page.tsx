import Link from "next/link";
import Services from "../components/Services";

export default function page() {
    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            {/* Hero Section */}
            <div className="relative bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        className="w-full h-full object-cover opacity-40"
                        src="https://images.unsplash.com/photo-1724304406928-c43b01912fa1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1031"
                        alt="Modern office background"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-sky-900 to-sky-500 mix-blend-multiply" />
                </div>

                <div className="relative z-10 py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
                    {/* Back to Home Button */}
                    <div className="absolute top-6 left-6">
                        <Link href="/">
                            <button className="flex items-center text-white hover:text-gray-200 transition-colors group">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                </svg>
                                Back to Home
                            </button>
                        </Link>
                    </div>

                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-6">
                            আমাদের প্যাকেজ সমূহ
                        </h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                            আমাদের বিভিন্ন ইন্টারনেট প্যাকেজ থেকে আপনার প্রয়োজন অনুযায়ী প্যাকেজটি বেছে নিন। ঘরে বসে সাধারণ ব্রাউজিং থেকে শুরু করে উচ্চগতির ব্যবসায়িক সংযোগ—সব ধরনের ব্যবহারকারীর জন্য রয়েছে নিরবচ্ছিন্ন ও নির্ভরযোগ্য সেবা, ২৪/৭ কাস্টমার সাপোর্টসহ।
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="py-16 px-4 sm:px-6 lg:px-8">
                <Services />
            </div>


        </div>
    );
}
