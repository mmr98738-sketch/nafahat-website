import { Link } from 'react-router-dom';
import { 
  Palette, Moon, Layers, Award, GitCompare, Image, 
  ShoppingBag, Instagram, LayoutGrid, Globe, 
  ArrowLeft, ExternalLink, Sparkles, Eye
} from 'lucide-react';
import { siteConfig, features } from '../config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = {
  Palette, Moon, Layers, Award, GitCompare, Image,
  ShoppingBag, Instagram, LayoutGrid, Globe,
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* خلفية متدرجة */}
        <div className="absolute inset-0 bg-gradient-to-bl from-ivory via-ivory to-ivory-dark dark:from-navy-dark dark:via-navy-dark dark:to-navy"></div>
        <div className="absolute inset-0 animate-shimmer"></div>
        
        {/* عناصر زخرفية */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gold/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold/3 blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* حالة المشروع */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
              <span className="text-sm text-gold font-medium">{siteConfig.status}</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-navy dark:text-ivory mb-6 leading-tight">
              <span className="text-gold">{siteConfig.name}</span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-navy/70 dark:text-ivory/70">
                {siteConfig.tagline}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-navy/60 dark:text-ivory/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              {siteConfig.description}
            </p>

            {/* الأزرار */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/guide"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy-dark font-semibold rounded-xl hover:bg-gold-light transition-all shadow-lg shadow-gold/20 hover:shadow-gold/40"
              >
                <Sparkles size={20} />
                دليل التاجر
              </Link>
              
              <Link
                to="/support"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gold/30 text-gold font-semibold rounded-xl hover:bg-gold/5 hover:border-gold/50 transition-all"
              >
                الدعم والمساعدة
                <ArrowLeft size={18} />
              </Link>

              {/* زر المعاينة — يظهر فقط عند توفر رابط */}
              {siteConfig.isPreviewAvailable && (
                <a
                  href={siteConfig.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-navy dark:bg-navy-light text-ivory font-semibold rounded-xl hover:opacity-90 transition-all"
                >
                  <Eye size={20} />
                  معاينة الثيم
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* المميزات */}
      <section className="py-20 md:py-28 bg-ivory-dark/50 dark:bg-navy/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-ivory mb-4">
              مميزات <span className="text-gold">نفحات</span>
            </h2>
            <p className="text-navy/60 dark:text-ivory/60 text-lg max-w-2xl mx-auto">
              ثيم مصمم خصيصًا لمتاجر العطور — يجمع بين الأناقة والوظائف المتقدمة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon] || Sparkles;
              return (
                <div
                  key={feature.id}
                  className="group p-6 rounded-2xl bg-ivory dark:bg-navy-dark border border-gold/10 hover:border-gold/30 transition-all hover:shadow-lg hover:shadow-gold/5"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon size={24} className="text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-navy dark:text-ivory mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-navy/60 dark:text-ivory/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* معرض الصور */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-ivory mb-4">
              معرض <span className="text-gold">الصور</span>
            </h2>
            <p className="text-navy/60 dark:text-ivory/60 text-lg">
              لمحات من تصميم الثيم وميزاته البصرية
            </p>
          </div>

          {/* صور توضيحية — ستُستبدل بالصور الفعلية */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-navy/5 to-gold/10 dark:from-navy-dark dark:to-navy border border-gold/10">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <Image size={32} className="text-gold" />
                </div>
                <p className="text-navy/50 dark:text-ivory/50 text-sm font-medium">
                  صورة توضيحية — الصفحة الرئيسية
                </p>
                <p className="text-navy/30 dark:text-ivory/30 text-xs mt-2">
                  ستُستبدل بصورة فعلية من الثيم
                </p>
              </div>
              <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-gold/20 text-gold text-xs font-medium">
                توضيحية
              </div>
            </div>

            <div className="relative group rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-gold/5 to-navy/5 dark:from-navy dark:to-navy-dark border border-gold/10">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <ShoppingBag size={32} className="text-gold" />
                </div>
                <p className="text-navy/50 dark:text-ivory/50 text-sm font-medium">
                  صورة توضيحية — صفحة المنتج
                </p>
                <p className="text-navy/30 dark:text-ivory/30 text-xs mt-2">
                  ستُستبدل بصورة فعلية من الثيم
                </p>
              </div>
              <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-gold/20 text-gold text-xs font-medium">
                توضيحية
              </div>
            </div>

            <div className="relative group rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-navy/5 to-gold/5 dark:from-navy-dark dark:to-navy border border-gold/10">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <GitCompare size={32} className="text-gold" />
                </div>
                <p className="text-navy/50 dark:text-ivory/50 text-sm font-medium">
                  صورة توضيحية — مقارنة العطور
                </p>
                <p className="text-navy/30 dark:text-ivory/30 text-xs mt-2">
                  ستُستبدل بصورة فعلية من الثيم
                </p>
              </div>
              <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-gold/20 text-gold text-xs font-medium">
                توضيحية
              </div>
            </div>

            <div className="relative group rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-gold/10 to-navy/5 dark:from-navy dark:to-navy-dark border border-gold/10">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <Award size={32} className="text-gold" />
                </div>
                <p className="text-navy/50 dark:text-ivory/50 text-sm font-medium">
                  صورة توضيحية — العلامات المحلية
                </p>
                <p className="text-navy/30 dark:text-ivory/30 text-xs mt-2">
                  ستُستبدل بصورة فعلية من الثيم
                </p>
              </div>
              <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-gold/20 text-gold text-xs font-medium">
                توضيحية
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-l from-gold/5 to-gold/10 dark:from-navy dark:to-navy-dark border-t border-b border-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-ivory mb-4">
            جاهز للبدء؟
          </h2>
          <p className="text-navy/60 dark:text-ivory/60 text-lg mb-8 max-w-2xl mx-auto">
            تصفّح دليل التاجر للتعرف على طريقة إعداد الثيم وتخصيصه، أو تواصل معنا للحصول على الدعم.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/guide"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy-dark font-semibold rounded-xl hover:bg-gold-light transition-all shadow-lg shadow-gold/20"
            >
              ابدأ بالدليل
              <ArrowLeft size={18} />
            </Link>
            <Link
              to="/support"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-navy/20 dark:border-ivory/20 text-navy dark:text-ivory font-semibold rounded-xl hover:border-gold/50 hover:text-gold transition-all"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
