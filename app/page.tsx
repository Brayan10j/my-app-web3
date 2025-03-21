import { Button } from "@/components/ui/button";
import {
  CreditCard,
  Globe,
  ShieldCheck,
  Zap,
  CheckCircle,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Instant Transactions",
      description:
        "Send and receive crypto payments across the globe in seconds.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      title: "Bank-Grade Security",
      description:
        "Your assets are protected with multi-layer security and encryption.",
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Global Access",
      description:
        "Pay or get paid in your favorite cryptocurrency, anywhere in the world.",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-blue-500" />,
      title: "Easy Integration",
      description:
        "Simple API for businesses to integrate crypto payments effortlessly.",
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Connect Wallet",
      description: "Link your preferred cryptocurrency wallet.",
    },
    {
      step: 2,
      title: "Start Transacting",
      description: "Send and receive payments globally with ease.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-blue-600 to-blue-700 text-white py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              The Future of Crypto Payments
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Seamlessly send, receive, and manage your crypto assets worldwide
              with cryptoPAY. Fast, secure, and easy to use.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Why Choose cryptoPAY?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm text-center md:text-left"
                >
                  <div className="flex justify-center md:justify-start mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Get Started in 2 Easy Steps
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16">
              {howItWorks.map((item, index) => (
                <div
                  key={item.step}
                  className="flex flex-col items-center text-center max-w-xs"
                >
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.description}</p>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block border-t-2 border-dashed border-blue-300 w-16 mt-8 absolute left-full top-1/2 transform -translate-y-1/2 ml-8 lg:ml-16"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 md:py-24 bg-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Revolutionize Your Payments?
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of users and businesses embracing the future of
              finance with cryptoPAY.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg"
            >
              Sign Up Now <CheckCircle className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} cryptoPAY. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
