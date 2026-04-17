import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Phone, MapPin, Clock, Star, Sparkles, Heart, Scissors, Crown, Zap, Leaf, Users, Sun } from "lucide-react"

export default function DevXignBeautySpa() {
  const womenServices = [
    {
      category: "Facial Cleanups",
      icon: <Sparkles className="w-6 h-6" />,
      items: [
        { name: "Fruit", price: "₹300" },
        { name: "Aroma D-Tan", price: "₹500" },
        { name: "Lotus", price: "₹500" },
        { name: "Pearl", price: "₹500" },
        { name: "Charcoal", price: "₹400" },
        { name: "VLCC", price: "₹500" },
        { name: "Anti Acne", price: "₹500" },
        { name: "Gold", price: "₹900" },
        { name: "Diamond", price: "₹900" },
        { name: "Lotus Preservita", price: "₹1100" },
        { name: "O3 Whiting Pack", price: "₹900" },
        { name: "O3+ Power Mask Tightening", price: "₹1000" },
        { name: "Wine Fairer Complexion", price: "₹400" },
      ],
    },
    {
      category: "Manicure & Pedicure",
      icon: <Heart className="w-6 h-6" />,
      items: [
        { name: "Manicure", price: "₹250 - ₹500" },
        { name: "Pedicure", price: "₹250 - ₹500" },
        { name: "Pedicure + Spa", price: "₹800" },
        { name: "Manicure + Spa", price: "₹800" },
      ],
    },
    {
      category: "Bleaching Services",
      icon: <Star className="w-6 h-6" />,
      items: [
        { name: "Fruit Bleach", price: "₹250" },
        { name: "Oxy Bleach", price: "₹300" },
        { name: "Ammonia Free", price: "₹300" },
        { name: "Diamond Bleach", price: "₹400" },
        { name: "Cheryl Bleach", price: "₹400" },
      ],
    },
    {
      category: "Body Treatments",
      icon: <Scissors className="w-6 h-6" />,
      items: [
        { name: "Body + Spa", price: "₹1000 - ₹1500" },
        { name: "Body Bleach", price: "₹500 - ₹800" },
        { name: "Face Massage", price: "₹200 - ₹250" },
      ],
    },
    {
      category: "Makeup Services",
      icon: <Crown className="w-6 h-6" />,
      items: [
        { name: "Party Makeup", price: "₹1500 - ₹2500" },
        { name: "Ring Ceremony", price: "₹3500" },
        { name: "Bridal Makeup", price: "₹12000" },
      ],
    },
  ]

  const menServices = [
    {
      category: "Hair Services",
      icon: <Scissors className="w-6 h-6" />,
      items: [
        { name: "Hair Cut & Style", price: "Coming Soon" },
        { name: "Hair Wash & Blow Dry", price: "Coming Soon" },
        { name: "Beard Trimming", price: "Coming Soon" },
        { name: "Mustache Styling", price: "Coming Soon" },
      ],
    },
    {
      category: "Facial Treatments",
      icon: <Sparkles className="w-6 h-6" />,
      items: [
        { name: "Deep Cleansing Facial", price: "Coming Soon" },
        { name: "Anti-Aging Treatment", price: "Coming Soon" },
        { name: "Acne Treatment", price: "Coming Soon" },
        { name: "Brightening Facial", price: "Coming Soon" },
      ],
    },
    {
      category: "Grooming Services",
      icon: <Zap className="w-6 h-6" />,
      items: [
        { name: "Eyebrow Shaping", price: "Coming Soon" },
        { name: "Face Massage", price: "Coming Soon" },
        { name: "Head Massage", price: "Coming Soon" },
        { name: "Manicure", price: "Coming Soon" },
      ],
    },
  ]

  const specialPackage = {
    name: "Pre-Bridal Package",
    price: "₹8000",
    includes: [
      "Face Bleach",
      "Body Bleach",
      "Body Wax",
      "Full Arms",
      "Gold Diamond Facial",
      "Pedicure Spa",
      "Manicure Spa",
      "Body Polishing",
      "Hair Spa",
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-mint-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-mint-400 to-mint-600 rounded-full flex items-center justify-center shadow-lg">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-mint-800 font-serif">DevXign Beauty Spa</h1>
                <p className="text-sm text-mint-600 font-sans">Unisex Salon • Hair & Body Treatment</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm text-mint-700">
              <Badge className="bg-mint-100 text-mint-800 border-mint-300">Unisex Salon</Badge>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>98156 91870</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>9 AM - 8 PM</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-mint-50 to-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-mint-100 rounded-full opacity-30 -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-mint-200 rounded-full opacity-20 translate-y-32 -translate-x-32"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <Badge className="bg-mint-100 text-mint-800 border-mint-300 mb-6 text-sm px-4 py-2">
                Premium Unisex Beauty Salon
              </Badge>

              {/* Massive, Attractive Business Name */}
              <div className="mb-8">
                <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-4">
                  <span className="text-mint-800 block">DevXign</span>
                  <span className="text-mint-600 block">Beauty</span>
                  <span className="text-mint-700 block text-5xl md:text-6xl lg:text-7xl font-light italic">
                    Parlour
                  </span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-mint-400 to-mint-600 mx-auto lg:mx-0 mt-6"></div>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl text-mint-800 mb-6 font-light">Beauty as a gift</h2>

              <p className="text-lg text-mint-700 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
                Experience the finest beauty treatments for both men and women. Our expert team specializes in all
                beauty treatments, and our team is fully professional and experienced.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-mint-600 hover:bg-mint-700 text-white px-8 py-4 text-lg font-sans shadow-lg"
                >
                  BOOK NOW
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-mint-600 text-mint-700 hover:bg-mint-50 px-8 py-4 text-lg font-sans bg-transparent"
                >
                  View Services
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="relative">
                    <img
                      src="/images/eye-makeup.jpeg"
                      alt="Professional eye makeup artistry"
                      className="rounded-3xl shadow-xl w-full h-72 object-cover"
                    />
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-mint-400 rounded-full flex items-center justify-center shadow-lg">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <img
                    src="/images/salon-scissors.jpeg"
                    alt="Professional salon scissors"
                    className="rounded-3xl shadow-lg w-full h-40 object-cover"
                  />
                </div>
                <div className="space-y-6 mt-12">
                  <img
                    src="/images/mens-hair-treatment.jpeg" // New image for men's hair treatment
                    alt="Professional men's hair treatment"
                    className="rounded-3xl shadow-lg w-full h-40 object-cover"
                  />
                  <div className="relative">
                    <img
                      src="/images/hair-styling.jpeg"
                      alt="Professional hair styling with curling iron"
                      className="rounded-3xl shadow-xl w-full h-72 object-cover"
                    />
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-mint-300 rounded-full flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-mint-800" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Treatments Showcase */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/images/facial-treatment.jpeg"
                alt="Signature facial treatment"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-mint-100 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-12 h-12 text-mint-600" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <p className="font-serif text-mint-800 text-lg font-semibold">Professional Care</p>
                <p className="text-mint-600 text-sm">Expert treatments</p>
              </div>
            </div>
            <div>
              <Badge className="bg-mint-100 text-mint-800 border-mint-300 mb-6 text-sm px-4 py-2">
                Signature Experience
              </Badge>
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-mint-800 mb-6">
                Luxurious Facial Treatments
              </h3>
              <p className="text-lg text-mint-700 mb-8 leading-relaxed font-sans">
                Experience our signature facial treatments designed to rejuvenate and refresh your skin. Our expert
                aestheticians use premium products and advanced techniques to give you that perfect glow you deserve.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-mint-400 rounded-full"></div>
                  <span className="text-mint-700 font-sans">Deep Cleansing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-mint-400 rounded-full"></div>
                  <span className="text-mint-700 font-sans">Anti-Aging</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-mint-400 rounded-full"></div>
                  <span className="text-mint-700 font-sans">Hydration Boost</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-mint-400 rounded-full"></div>
                  <span className="text-mint-700 font-sans">Skin Brightening</span>
                </div>
              </div>
              <Button className="bg-mint-600 hover:bg-mint-700 text-white px-8 py-4 text-lg font-sans shadow-lg">
                Book Facial Treatment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Salon Setup */}
      <section className="py-20 px-4 bg-gradient-to-br from-mint-50 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-mint-100 text-mint-800 border-mint-300 mb-6 text-sm px-4 py-2">
                Professional Setup
              </Badge>
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-mint-800 mb-6">State-of-the-Art Salon</h3>
              <p className="text-lg text-mint-700 mb-8 leading-relaxed font-sans">
                Our salon is equipped with the latest professional equipment and maintains the highest standards of
                hygiene and comfort. From our modern wash stations to premium styling tools, every detail is designed
                for your comfort and satisfaction.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-mint-400 rounded-full"></div>
                  <span className="text-mint-700 font-sans">Modern Equipment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-mint-400 rounded-full"></div>
                  <span className="text-mint-700 font-sans">Hygienic Standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-mint-400 rounded-full"></div>
                  <span className="text-mint-700 font-sans">Comfortable Seating</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-mint-400 rounded-full"></div>
                  <span className="text-mint-700 font-sans">Premium Products</span>
                </div>
              </div>
              <Button className="bg-mint-600 hover:bg-mint-700 text-white px-8 py-4 text-lg font-sans shadow-lg">
                Visit Our Salon
              </Button>
            </div>
            <div className="relative">
              <img
                src="/images/salon-basins.jpeg"
                alt="Professional salon wash basins"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-mint-400 rounded-full flex items-center justify-center shadow-lg">
                <Star className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <p className="font-serif text-mint-800 text-lg font-semibold">Premium Comfort</p>
                <p className="text-mint-600 text-sm">Modern facilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relaxation & Ambiance Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/images/spa-ambiance.jpeg"
                alt="Relaxing spa ambiance with products and flowers"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-mint-100 rounded-full flex items-center justify-center shadow-lg">
                <Sun className="w-12 h-12 text-mint-600" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <p className="font-serif text-mint-800 text-lg font-semibold">Calm & Serene</p>
                <p className="text-mint-600 text-sm">Your relaxation oasis</p>
              </div>
            </div>
            <div>
              <Badge className="bg-mint-100 text-mint-800 border-mint-300 mb-6 text-sm px-4 py-2">Your Sanctuary</Badge>
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-mint-800 mb-6">
                Experience Pure Relaxation
              </h3>
              <p className="text-lg text-mint-700 mb-8 leading-relaxed font-sans">
                Step into an oasis of calm and let our soothing ambiance melt away your stress. We create a serene
                environment where you can unwind and indulge in a truly rejuvenating beauty experience.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-mint-400 rounded-full"></div>
                  <span className="text-mint-700 font-sans">Soothing Atmosphere</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-mint-400 rounded-full"></div>
                  <span className="text-mint-700 font-sans">Aromatherapy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-mint-400 rounded-full"></div>
                  <span className="text-mint-700 font-sans">Comfort & Privacy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-mint-400 rounded-full"></div>
                  <span className="text-mint-700 font-sans">Personalized Care</span>
                </div>
              </div>
              <Button className="bg-mint-600 hover:bg-mint-700 text-white px-8 py-4 text-lg font-sans shadow-lg">
                Discover Our Ambiance
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Beauty Gallery */}
      <section className="py-20 px-4 bg-mint-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-mint-800 mb-4">Why Our Clients Choose Us</h3>
            <p className="text-mint-600 max-w-2xl mx-auto text-lg font-sans">
              We are the leading beauty salon providing high quality services with expert artistry
            </p>
          </div>

          {/* Enhanced Men's Services Showcase */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative">
                <img
                  src="/images/mens-hair-treatment.jpeg" // Using the new men's hair treatment image here
                  alt="Professional men's grooming"
                  className="rounded-3xl shadow-2xl w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mint-900/60 to-transparent rounded-3xl"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h4 className="font-serif text-2xl md:text-3xl font-bold mb-2">Men's Grooming</h4>
                  <p className="text-mint-100 text-lg font-sans">Professional cuts & styling</p>
                </div>
                <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <Scissors className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/eye-makeup.jpeg"
                  alt="Expert makeup artistry"
                  className="rounded-3xl shadow-2xl w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mint-900/60 to-transparent rounded-3xl"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h4 className="font-serif text-2xl md:text-3xl font-bold mb-2">Expert Makeup Artistry</h4>
                  <p className="text-mint-100 text-lg font-sans">Professional makeup for every occasion</p>
                </div>
                <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <Crown className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-mint-400 to-mint-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-mint-800 mb-4 font-serif">Unisex Services</h4>
              <p className="text-mint-600 font-sans">
                Professional beauty treatments for both men and women under one roof
              </p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-mint-500 to-mint-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-mint-800 mb-4 font-serif">Expert Stylists</h4>
              <p className="text-mint-600 font-sans">
                Trained professionals with years of experience in beauty and grooming
              </p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-mint-600 to-mint-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-mint-800 mb-4 font-serif">Premium Products</h4>
              <p className="text-mint-600 font-sans">Only the finest beauty products and equipment for best results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hair Styling Excellence */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <Badge className="bg-mint-100 text-mint-800 border-mint-300 mb-6 text-sm px-4 py-2">
                Hair Excellence
              </Badge>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-mint-800 mb-6">
                Professional Hair Styling
              </h3>
              <p className="text-lg text-mint-700 mb-8 leading-relaxed font-sans">
                From precision cuts to beautiful curls, our expert stylists create the perfect look for every client
                using professional tools and techniques.
              </p>
              <Button className="bg-mint-600 hover:bg-mint-700 text-white px-6 py-3 font-sans shadow-lg">
                Book Hair Service
              </Button>
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <img
                    src="/images/hair-styling.jpeg"
                    alt="Professional hair curling service"
                    className="rounded-2xl shadow-xl w-full h-64 object-cover"
                  />
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-mint-400 rounded-full flex items-center justify-center shadow-lg">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="/images/salon-tools-flatlay.jpeg" // New image for salon tools
                    alt="Professional salon tools flat lay"
                    className="rounded-2xl shadow-xl w-full h-64 object-cover"
                  />
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-mint-300 rounded-full flex items-center justify-center shadow-lg">
                    <Scissors className="w-6 h-6 text-mint-800" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Package */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/images/bridal-details.jpeg"
                alt="Bridal beauty package details"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-mint-400 rounded-full flex items-center justify-center shadow-lg">
                <Crown className="w-10 h-10 text-white" />
              </div>
            </div>
            <div>
              <Badge className="bg-mint-100 text-mint-800 border-mint-300 mb-6 text-sm px-4 py-2">
                Special Bridal Package
              </Badge>
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-mint-800 mb-6">{specialPackage.name}</h3>
              <p className="text-5xl md:text-6xl font-bold text-mint-600 mb-8 font-serif">{specialPackage.price}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {specialPackage.includes.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-mint-400 rounded-full"></div>
                    <span className="text-mint-700 font-sans">{item}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-mint-600 hover:bg-mint-700 text-white px-8 py-4 text-lg font-sans shadow-lg">
                Book This Package
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-mint-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-mint-800 mb-4">Our Services</h3>
            <p className="text-xl text-mint-600 max-w-2xl mx-auto font-sans">
              Comprehensive beauty treatments for both men and women
            </p>
          </div>

          <Tabs defaultValue="women" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12 bg-white border border-mint-200">
              <TabsTrigger
                value="women"
                className="flex items-center space-x-2 data-[state=active]:bg-mint-100 data-[state=active]:text-mint-800"
              >
                <Crown className="w-4 h-4" />
                <span className="font-sans">Women's Services</span>
              </TabsTrigger>
              <TabsTrigger
                value="men"
                className="flex items-center space-x-2 data-[state=active]:bg-mint-100 data-[state=active]:text-mint-800"
              >
                <Scissors className="w-4 h-4" />
                <span className="font-sans">Men's Services</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="women">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {womenServices.map((service, index) => (
                  <Card
                    key={index}
                    className="bg-white border-mint-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="p-3 bg-mint-100 rounded-xl text-mint-600">{service.icon}</div>
                        <CardTitle className="text-mint-800 font-serif text-xl">{service.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {service.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex justify-between items-center py-2 border-b border-mint-100 last:border-b-0"
                          >
                            <span className="text-mint-700 font-sans">{item.name}</span>
                            <Badge variant="secondary" className="bg-mint-100 text-mint-800 border-mint-200 font-sans">
                              {item.price}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="men">
              <div className="text-center mb-12">
                <Badge className="bg-mint-100 text-mint-800 border-mint-300 mb-4 text-sm px-4 py-2">
                  Men's Grooming Services
                </Badge>
                <p className="text-mint-600 font-sans text-lg">Professional grooming services tailored for men</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menServices.map((service, index) => (
                  <Card
                    key={index}
                    className="bg-white border-mint-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="p-3 bg-mint-100 rounded-xl text-mint-600">{service.icon}</div>
                        <CardTitle className="text-mint-800 font-serif text-xl">{service.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {service.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex justify-between items-center py-2 border-b border-mint-100 last:border-b-0"
                          >
                            <span className="text-mint-700 font-sans">{item.name}</span>
                            <Badge variant="secondary" className="bg-mint-100 text-mint-800 border-mint-200 font-sans">
                              {item.price}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-12">
                <p className="text-mint-600 mb-6 font-sans text-lg">Men's service pricing will be updated soon!</p>
                <Button
                  variant="outline"
                  className="border-2 border-mint-600 text-mint-700 hover:bg-mint-50 font-sans bg-transparent"
                >
                  Contact for Men's Pricing
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-mint-800 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="font-serif text-4xl md:text-5xl font-bold mb-4">Get In Touch</h3>
            <p className="text-xl text-mint-100 max-w-2xl mx-auto font-sans">
              Ready to transform your look? Contact us today to book your appointment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-mint-300/30 text-white">
              <CardHeader className="text-center">
                <Phone className="w-10 h-10 mx-auto mb-4 text-mint-200" />
                <CardTitle className="text-mint-100 font-serif text-xl">Call Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-3xl font-bold font-serif">98156 91870</p>
                <p className="text-mint-200 mt-2 font-sans">Available 9 AM - 8 PM</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-mint-300/30 text-white">
              <CardHeader className="text-center">
                <MapPin className="w-10 h-10 mx-auto mb-4 text-mint-200" />
                <CardTitle className="text-mint-100 font-serif text-xl">Visit Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-mint-200 font-sans">DevXign Beauty Spa</p>
                <p className="text-mint-200 font-sans">Unisex Salon</p>
                <p className="text-mint-200 font-sans">Hair and Body Treatment</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-mint-300/30 text-white">
              <CardHeader className="text-center">
                <Clock className="w-10 h-10 mx-auto mb-4 text-mint-200" />
                <CardTitle className="text-mint-100 font-serif text-xl">Hours</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-mint-200 font-sans">Wednesday - Monday</p>
                <p className="text-2xl font-bold font-serif">9:30 AM - 8:30 PM</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-white text-mint-800 hover:bg-mint-50 px-10 py-4 text-lg font-sans shadow-lg"
            >
              Book Your Appointment Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mint-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-10 h-10 bg-mint-400 rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-2xl font-bold font-serif">DevXign Beauty Spa</h4>
          </div>
          <p className="text-mint-200 mb-2 font-sans text-lg">Unisex Salon • Hair and Body Treatment</p>
          <p className="text-mint-300 text-sm mb-6 font-sans">Professional Beauty Services for Men & Women</p>
          <Separator className="bg-mint-700 mb-6" />
          <p className="text-mint-400 font-sans">© 2024 DevXign Beauty Spa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
