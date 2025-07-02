
import { useAuth } from '@/contexts/AuthContext';
import { products } from '@/data/products';
import { Shield, Truck, Clock, Award, Star, TrendingUp, Sparkles, Heart, Users } from 'lucide-react';

const HeroSection = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: Shield,
      text: `${products.length}+ Genuine Products`,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10 border-emerald-500/20'
    },
    {
      icon: Truck,
      text: 'Free Delivery on ₹500+',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10 border-blue-500/20'
    },
    {
      icon: Clock,
      text: '24/7 Service Available',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10 border-purple-500/20'
    },
    {
      icon: Award,
      text: 'Licensed Pharmacy',
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10 border-amber-500/20'
    }
  ];

  const stats = [
    { label: "Happy Customers", value: "50k+", icon: "👥", color: "from-blue-500 to-purple-600" },
    { label: "Products Available", value: "10k+", icon: "💊", color: "from-emerald-500 to-teal-600" },
    { label: "Years of Service", value: "15+", icon: "🏆", color: "from-amber-500 to-orange-600" },
    { label: "Cities Served", value: "100+", icon: "🌍", color: "from-pink-500 to-rose-600" }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce opacity-70"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-gradient-to-r from-pink-400 to-red-400 rounded-full floating opacity-60"></div>
        <div className="absolute bottom-32 left-40 w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full floating-delayed opacity-50"></div>
        <div className="absolute top-60 right-20 w-6 h-6 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-pulse opacity-40"></div>
        
        {/* Medical Icons */}
        <div className="absolute top-16 right-16 text-white/10 text-6xl floating">💊</div>
        <div className="absolute bottom-20 left-16 text-white/10 text-5xl floating-delayed">🏥</div>
        <div className="absolute top-1/3 left-1/4 text-white/10 text-4xl animate-pulse">⚕️</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Left Content */}
          <div className="space-y-10 animate-fade-in-up">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-6 py-3 glass rounded-full text-sm font-medium border backdrop-blur-md">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
              <span className="text-white">India&apos;s Most Trusted Online Pharmacy</span>
              <div className="ml-3 flex items-center bg-white/20 rounded-full px-3 py-1">
                <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                <span className="text-white font-bold text-xs">4.8</span>
              </div>
            </div>
            
            {/* Enhanced Welcome Message */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Welcome back,</span>
                <span className="block text-gradient mt-3 text-4xl lg:text-6xl font-light">
                  {user?.email?.split('@')[0]}!
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                Your health is our priority. Order genuine medicines with 
                <span className="block mt-3 font-semibold text-white relative">
                  lightning-fast delivery and professional care.
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                </span>
              </p>
            </div>

            {/* Enhanced Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-center space-x-4 p-6 glass rounded-2xl hover:bg-white/20 transition-all duration-500 hover:scale-105 cursor-pointer group border ${feature.bgColor} animate-slide-in-right`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <span className="text-sm lg:text-base font-semibold text-white/95 leading-tight">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Enhanced Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-gradient-primary px-8 py-4 rounded-2xl font-bold text-lg animate-pulse-glow flex items-center justify-center group">
                <Heart className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Shop Now
              </button>
              <button className="btn-glass px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center group">
                <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                View Offers
              </button>
            </div>
          </div>

          {/* Enhanced Right Content - Stats Dashboard */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Main Stats Card */}
            <div className="glass rounded-3xl p-8 border backdrop-blur-md">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-white">Our Impact</h3>
                <TrendingUp className="w-8 h-8 text-emerald-400 animate-bounce-subtle" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="text-center group hover:scale-110 transition-all duration-500 p-4 rounded-2xl hover:bg-white/10 cursor-pointer"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={`text-4xl mb-3 p-4 rounded-full bg-gradient-to-r ${stat.color} w-16 h-16 flex items-center justify-center mx-auto group-hover:animate-bounce-subtle`}>
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-2 group-hover:text-gradient transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm text-blue-200 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Indicators */}
            <div className="glass rounded-2xl p-6 border backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                  <span className="text-blue-100 font-medium">Live Support Active</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-100 font-medium">24/7</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse shadow-lg shadow-amber-400/50"></div>
                  <span className="text-blue-100 font-medium">50k+ Orders Delivered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">+15% This Month</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"></div>
                  <span className="text-blue-100 font-medium">Express Delivery Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-400 font-medium">2-4 Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
