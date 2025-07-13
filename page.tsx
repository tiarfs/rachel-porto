"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Award,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  FlaskConical,
  Microscope,
  Cookie,
  ChefHat,
  Star,
  BookOpen,
  Target,
  Heart,
  Linkedin,
  Instagram,
  Building,
} from "lucide-react"

export default function RachelCookiePortfolio() {
  const [activeTab, setActiveTab] = useState("about")

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const skills = {
    languages: [
      { name: "Bahasa Indonesia", level: 100 },
      { name: "English", level: 85 },
      { name: "Bahasa Sunda", level: 90 },
    ],
    technical: [
      { name: "Microsoft Word", level: 95 },
      { name: "Microsoft Excel", level: 90 },
      { name: "Digital Poster Design", level: 85 },
      { name: "Video Editing", level: 80 },
      { name: "Food Analysis", level: 88 },
      { name: "Quality Control", level: 92 },
    ],
    soft: ["Communication", "Leadership", "Public Speaking", "Teamwork", "Research", "Problem Solving"],
  }

  const projects = [
    {
      title: "DOFU Straw - Edible Straw Innovation",
      category: "PKM-K 2023",
      year: "2023",
      description:
        "Tim PKM-K 2023 yang lolos tahap pendanaan dengan produk 'DOFU Straw' - edible straw berbahan tepung ampas tahu sebagai solusi ramah lingkungan.",
      technologies: ["Food Technology", "Sustainability", "Product Development", "Waste Utilization"],
      impact: "Solusi inovatif untuk mengurangi sampah plastik dengan memanfaatkan limbah tahu",
      status: "Funded Project",
      icon: <Cookie className="h-6 w-6" />,
    },
    {
      title: "Gluten-Free Brownies UMKM Development",
      category: "PKM Dosen 2023",
      year: "2023",
      description:
        "Tim PKM Dosen 2023 dengan fokus pendampingan UMKM produk brownies gluten-free. Bertanggung jawab untuk pengembangan produk pada aspek pemasaran dan perancangan packaging yang baru.",
      technologies: ["Gluten-Free Technology", "Marketing", "Packaging Design", "UMKM Development"],
      impact: "Membantu UMKM mengembangkan produk brownies gluten-free yang marketable",
      status: "Completed",
      icon: <ChefHat className="h-6 w-6" />,
    },
  ]

  const workExperiences = [
    {
      role: "Staff Magang Divisi QMS/QA/QC",
      company: "PT. Sonton Food Indonesia",
      period: "2024",
      location: "Indonesia",
      type: "Praktik Kerja Lapangan",
      description:
        "Supporting di bidang Mikrobiologi dan Finish Good, mempelajari alur quality control di perusahaan pangan, mempelajari prosedur running instrumen analisis fisik, melakukan preparasi dan pengujian mikrobiologi pada setiap sampel yang dihasilkan setiap hari.",
      achievements: [
        "Melakukan preparasi dan pengujian mikrobiologi pada sampel harian",
        "Mempelajari alur quality control di perusahaan pangan",
        "Menguasai prosedur running instrumen analisis fisik",
        "Supporting divisi Mikrobiologi dan Finish Good",
      ],
      icon: <FlaskConical className="h-6 w-6" />,
    },
    {
      role: "Tenant Assistant",
      company: "Freelance bersama brand Wear.sanrise",
      period: "2025",
      location: "HIJABFEST MERAYA",
      type: "Freelance",
      description:
        "Bertanggung jawab dalam membantu dan melayani customer yang berkunjung ke booth pada saat acara berlangsung, dan memastikan nota yang dibuat sesuai dengan rekap hasil penjualan.",
      achievements: [
        "Melayani customer di booth event HIJABFEST MERAYA",
        "Memastikan akurasi nota penjualan",
        "Melakukan rekap hasil penjualan",
        "Memberikan pelayanan customer service yang excellent",
      ],
      icon: <Users className="h-6 w-6" />,
    },
    {
      role: "Tenant Assistant",
      company: "Freelance bersama brand Glashka",
      period: "2024",
      location: "Al Jazeerah Signature Middle East Restaurant",
      type: "Freelance",
      description:
        "Bertanggung jawab dalam membantu dan melayani customer yang berkunjung ke booth pada saat acara berlangsung, merekap hasil penjualan, dan melakukan crosscheck stock barang.",
      achievements: [
        "Melayani customer di booth event pribadi",
        "Merekap hasil penjualan secara detail",
        "Melakukan crosscheck stock barang",
        "Mengelola inventory dan penjualan",
      ],
      icon: <Users className="h-6 w-6" />,
    },
    {
      role: "Asisten Laboratorium",
      company: "Program Studi Teknologi Pangan UNPAD",
      period: "2025",
      location: "Sumedang, Jawa Barat",
      type: "Aslab Mata Kuliah Kimia Dasar dan Kimia Organik",
      description:
        "Membantu proses pelaksanaan praktikum, melakukan preparasi alat dan bahan pengujian bidang kimia, merancang jadwal, membantu pengecekan laporan praktikum, dan memberikan penilaian dari laporan yang dikerjakan.",
      achievements: [
        "Membantu pelaksanaan praktikum Kimia Dasar dan Organik",
        "Melakukan preparasi alat dan bahan pengujian kimia",
        "Merancang jadwal praktikum",
        "Mengevaluasi dan menilai laporan praktikum mahasiswa",
      ],
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      role: "Asisten Laboratorium",
      company: "Program Studi Teknologi Pangan UNPAD",
      period: "2024",
      location: "Sumedang, Jawa Barat",
      type: "Aslab Mata Kuliah Mikrobiologi Dasar",
      description:
        "Membantu proses pelaksanaan praktikum, melakukan preparasi alat dan bahan pengujian bidang mikrobiologi, merancang jadwal, membantu pengecekan laporan praktikum, dan memberikan penilaian dari laporan yang dikerjakan.",
      achievements: [
        "Membantu pelaksanaan praktikum Mikrobiologi Dasar",
        "Melakukan preparasi alat dan bahan pengujian mikrobiologi",
        "Merancang jadwal praktikum",
        "Mengevaluasi dan menilai laporan praktikum mahasiswa",
      ],
      icon: <Microscope className="h-6 w-6" />,
    },
  ]

  const organizationExperiences = [
    {
      role: "Bendahara Umum",
      organization: "Food Expo Mata Kuliah Pengembangan Produk Teknologi Pangan UNPAD",
      period: "2024",
      description:
        "Bertanggung jawab dalam mengurus pemasukan dan pengeluaran (cashflow) untuk pelaksanaan kegiatan Food Expo",
      icon: <Award className="h-6 w-6" />,
    },
    {
      role: "Volunteer Divisi Crowd Control",
      organization: "The West Java Festival (WJF)",
      period: "2024",
      description:
        "Bertanggung jawab untuk memastikan area sekitar pelaksanaan acara dalam keadaan yang kondusif dengan mengatur kerumunan yang ada, serta berkoordinasi dengan divisi lain",
      icon: <Users className="h-6 w-6" />,
    },
    {
      role: "Staff Divisi Medfo & Vokalis",
      organization: "Komunitas Musik FTIP",
      period: "2023",
      description: "Mengisi peran sebagai staff divisi media dan informasi serta sebagai vokalis dalam komunitas musik",
      icon: <Heart className="h-6 w-6" />,
    },
    {
      role: "Staff Divisi Publikasi dan Dokumentasi",
      organization: "Malam Keakraban TPN Raya",
      period: "2023",
      description: "Bertanggung jawab dalam mendesain segala keperluan konten hingga acara",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      role: "Staff Divisi Kreasi & Staff Divisi Media dan Informasi",
      organization: "Penerimaan Mahasiswa Baru UNPAD (PRABU)",
      period: "2023",
      description:
        "Bertanggung jawab dalam merancang megapresent acara PRABU serta mengurus bagian post production dari megapresent PRABU 2023",
      icon: <Star className="h-6 w-6" />,
    },
    {
      role: "Staff Divisi Media dan Informasi",
      organization: "Himpunan Mahasiswa Teknologi Pangan",
      period: "2023",
      description:
        "Bertanggung jawab dalam mengatur alur publikasi segala kegiatan himpunan serta mendesain kebutuhan materi posting",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      role: "Bendahara Umum II & Wakil Ketua Divisi Rohani dan Medik",
      organization: "Studi Pengenalan Keprofesian Tahap Awal (SPEKTA)",
      period: "2022",
      description:
        "Bertanggung jawab dalam mengurus pemasukan dan pengeluaran selama kegiatan orientasi mahasiswa baru tingkat jurusan, serta mengawasi divisi Dana Usaha. Juga mengatur alur perawatan peserta medik serta alur peribadatan selama berlangsungnya acara",
      icon: <Award className="h-6 w-6" />,
    },
    {
      role: "Staff Divisi PDD",
      organization: "FTIP Goes to School",
      period: "2022",
      description: "Mendesain kebutuhan publikasi serta mendokumentasikan kegiatan yang sedang berlangsung",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      role: "Staff Divisi EPT dan Dekorasi",
      organization: "FTIP of The Year",
      period: "2022",
      description: "Turut berkontribusi dalam mempersiapkan kelengkapan properti acara beserta desain dekorasinya",
      icon: <Star className="h-6 w-6" />,
    },
    {
      role: "Staff Divisi Hubungan Eksternal",
      organization: "Himpunan Mahasiswa Teknologi Pangan",
      period: "2022",
      description:
        "Bertanggung jawab atas program kerja Roadshow dan turut berkontribusi pada segala aktivitas Divisi Hubungan Eksternal",
      icon: <Users className="h-6 w-6" />,
    },
    {
      role: "Staff Magang Departemen Sosial dan Lingkungan",
      organization: "BEM Fakultas Teknologi Industri Pertanian",
      period: "2021",
      description: "Berkontribusi dalam semua program kerja Departemen Sosial Lingkungan BEM FTIP",
      icon: <Building className="h-6 w-6" />,
    },
  ]

  const education = [
    {
      degree: "S1 Teknologi Pangan",
      institution: "Universitas Padjadjaran",
      period: "2021 - sekarang",
      gpa: "3.64",
      location: "Sumedang, Jawa Barat",
      highlights: [
        "Mata kuliah yang disukai adalah Mikrobiologi Pangan dan Teknologi Pengolahan Pangan",
        "Dipercayai sebagai koordinator mata kuliah Teknologi Fermentasi Pangan",
        "Tergabung ke dalam Tim PKM-K 2023 yang lolos tahap pendanaan dengan produk 'DOFU Straw'",
        "Tergabung ke dalam Tim PKM Dosen 2023 dengan fokus pendampingan UMKM produk brownies gluten-free",
      ],
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      degree: "Jurusan MIPA",
      institution: "SMAN 23 Bandung",
      period: "2018 - 2021",
      gpa: "Ranking 1",
      location: "Bandung, Jawa Barat",
      highlights: [
        "Dipercaya sebagai Ketua Kelas",
        "Mendapatkan ranking 1 di kelas (kelas 10-12)",
        "Termasuk siswa eligible dan lolos SNMPTN",
      ],
      icon: <Award className="h-6 w-6" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-lg border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                <Cookie className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Rachel Maharani
                </span>
                <p className="text-xs text-gray-600">Food Technology Specialist</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: "about", label: "About" },
                { id: "experience", label: "Experience" },
                { id: "projects", label: "Projects" },
                { id: "education", label: "Education" },
                { id: "organizations", label: "Organizations" },
                { id: "contact", label: "Contact" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`capitalize transition-colors ${
                    activeTab === tab.id ? "text-amber-600 font-semibold" : "text-gray-700 hover:text-amber-600"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">🍪 Food Technology Student</Badge>

                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Hi, I'm
                  <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    Rachel Aditia
                  </span>
                  <span className="block text-4xl lg:text-5xl">Maharani</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Saya adalah seorang under graduate semester 8 jurusan Teknologi Pangan, Universitas Padjadjaran. Saya
                  memiliki sifat yang amanah, bertanggung jawab, teliti, dapat diandalkan, serta tidak mudah menyerah
                  dalam menjalani dan mencoba hal baru untuk dapat meningkatkan potensi dalam diri.
                </p>

                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-amber-600" />
                    <span>Arcamanik, Bandung</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-amber-600" />
                    <span>13 Januari 2003, Cirebon</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-lg px-8 py-6"
                  onClick={() => scrollToSection("contact")}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent"
                  onClick={() => scrollToSection("projects")}
                >
                  <Target className="mr-2 h-5 w-5" />
                  View Projects
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl font-bold text-amber-600">3.64</div>
                  <div className="text-sm text-gray-600">IPK</div>
                </div>
                <div className="text-center p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl font-bold text-amber-600">5+</div>
                  <div className="text-sm text-gray-600">Work Experience</div>
                </div>
                <div className="text-center p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl font-bold text-amber-600">11+</div>
                  <div className="text-sm text-gray-600">Organizations</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="w-96 h-96 mx-auto bg-gradient-to-br from-amber-200 to-orange-200 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-80 h-80 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <Cookie className="h-24 w-24 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold">Food Technology</h3>
                      <p className="text-lg">Specialist</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Elements and QA/QC Expert removed as requested */}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mahasiswa Teknologi Pangan yang berdedikasi dengan passion dalam inovasi dan quality control
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-red-500" />
                  <h3 className="text-2xl font-semibold text-gray-900">Tentang Saya</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Saya adalah seorang under graduate semester 8 jurusan Teknologi Pangan, Universitas Padjadjaran. Saya
                  lahir di Kota Cirebon pada tanggal 13 Januari 2003. Saat ini, saya sedang memperluas pengetahuan dan
                  pengalaman dengan mengikuti beberapa kegiatan baik akademik maupun non-akademik.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Saya memiliki sifat yang amanah, bertanggung jawab, teliti, dapat diandalkan, serta tidak mudah
                  menyerah dalam menjalani dan mencoba hal baru untuk dapat meningkatkan potensi dalam diri.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-amber-100 to-orange-100 border-amber-200">
                <CardContent>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills</h3>

                  <div className="space-y-6">
                    {/* Languages */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <BookOpen className="h-4 w-4 mr-2 text-amber-600" />
                        Languages
                      </h4>
                      <div className="space-y-2">
                        {skills.languages.map((lang, index) => (
                          <div key={index}>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium text-gray-700">{lang.name}</span>
                              <span className="text-sm text-gray-500">{lang.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full transition-all duration-1000"
                                style={{ width: `${lang.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Skills */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <FlaskConical className="h-4 w-4 mr-2 text-amber-600" />
                        Technical
                      </h4>
                      <div className="space-y-2">
                        {skills.technical.map((skill, index) => (
                          <div key={index}>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                              <span className="text-sm text-gray-500">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full transition-all duration-1000"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Soft Skills */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Users className="h-4 w-4 mr-2 text-amber-600" />
                        Soft Skills
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {skills.soft.map((skill, index) => (
                          <Badge
                            key={index}
                            className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 hover:from-amber-200 hover:to-orange-200 justify-center py-2"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Riwayat Magang dan Bekerja</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pengalaman profesional dalam bidang teknologi pangan dan quality assurance
            </p>
          </div>

          <div className="space-y-8">
            {workExperiences.map((exp, index) => (
              <Card
                key={index}
                className="p-8 bg-white/80 backdrop-blur-sm border-amber-200 hover:shadow-lg transition-shadow"
              >
                <CardContent>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-900">{exp.role}</h3>
                          <p className="text-lg text-amber-600 font-medium">{exp.company}</p>
                          <p className="text-gray-600">{exp.location}</p>
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 mt-1">{exp.type}</Badge>
                        </div>
                        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 mt-2 md:mt-0">
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <Cookie className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proyek inovasi teknologi pangan yang berfokus pada solusi berkelanjutan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white">
                      {project.icon}
                    </div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{project.status}</Badge>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-amber-600 font-medium mb-3">
                    {project.category} • {project.year}
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 bg-amber-100 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-1">Impact:</h4>
                      <p className="text-sm text-gray-600">{project.impact}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Riwayat Pendidikan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perjalanan akademik dalam bidang teknologi pangan dan sains
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="p-8 bg-white/80 backdrop-blur-sm border-amber-200">
                <CardContent>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-900">{edu.degree}</h3>
                          <p className="text-lg text-amber-600 font-medium">{edu.institution}</p>
                          <p className="text-gray-600">{edu.location}</p>
                        </div>
                        <div className="flex flex-col items-end mt-2 md:mt-0">
                          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 mb-2">{edu.period}</Badge>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-200">IPK: {edu.gpa}</Badge>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Highlights:</h4>
                        <ul className="space-y-1">
                          {edu.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section id="organizations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Riwayat Organisasi, Kepanitiaan & Volunteer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pengalaman kepemimpinan dan kontribusi dalam berbagai organisasi dan kegiatan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizationExperiences.map((org, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardContent>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      {org.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 leading-tight">{org.role}</h3>
                        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 text-xs ml-2">
                          {org.period}
                        </Badge>
                      </div>
                      <p className="text-amber-600 font-medium text-sm mb-3 leading-tight">{org.organization}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{org.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-amber-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              Mari diskusikan teknologi pangan, peluang penelitian, atau potensi kolaborasi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MapPin className="h-6 w-6" />,
                title: "Alamat",
                info: "Arcamanik, Bandung",
              },
              {
                icon: <Phone className="h-6 w-6" />,
                title: "No Telp",
                info: "081220350962",
              },
              {
                icon: <Mail className="h-6 w-6" />,
                title: "Email",
                info: "rachel21001@mail.unpad.ac.id",
              },
              {
                icon: <Calendar className="h-6 w-6" />,
                title: "Born",
                info: "13 Januari 2003, Cirebon",
              },
            ].map((contact, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {contact.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{contact.title}</h3>
                <p className="text-amber-100">{contact.info}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="flex justify-center space-x-6 mb-8">
              {[
                { icon: <Linkedin className="h-6 w-6" />, label: "LinkedIn" },
                { icon: <Instagram className="h-6 w-6" />, label: "Instagram" },
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-white hover:bg-white/20 bg-transparent"
                >
                  {social.icon}
                </Button>
              ))}
            </div>

            <Button size="lg" className="bg-white text-amber-900 hover:bg-amber-50">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Cookie className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-bold">Rachel Aditia Maharani</span>
            </div>
            <p className="text-amber-100 mb-6">
              Food Technology Student • Quality Control Specialist • Innovation Enthusiast
            </p>
            <p className="text-amber-200 text-sm">
              © 2024 Rachel Aditia Maharani. Crafted with passion for food technology and innovation. 🍪
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
