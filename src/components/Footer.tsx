import { siteConfig } from '../config';

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-navy-dark text-ivory/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* الهوية */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <span className="text-navy-dark font-bold text-lg">ن</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-ivory">{siteConfig.name}</h3>
                <p className="text-xs text-ivory/60">{siteConfig.tagline}</p>
              </div>
            </div>
            <p className="text-sm text-ivory/60 leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* روابط سريعة */}
          <div>
            <h4 className="text-gold font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-gold transition-colors">الرئيسية</a></li>
              <li><a href="/guide" className="hover:text-gold transition-colors">دليل التاجر</a></li>
              <li><a href="/support" className="hover:text-gold transition-colors">الدعم</a></li>
            </ul>
          </div>

          {/* التواصل */}
          <div>
            <h4 className="text-gold font-semibold mb-4">تواصل معنا</h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.supportEmail && (
                <li>
                  <a href={`mailto:${siteConfig.supportEmail}`} className="hover:text-gold transition-colors">
                    {siteConfig.supportEmail}
                  </a>
                </li>
              )}
              {siteConfig.twitter && (
                <li>
                  <a href={siteConfig.twitter} className="hover:text-gold transition-colors" target="_blank" rel="noopener">
                    تويتر
                  </a>
                </li>
              )}
              {siteConfig.github && (
                <li>
                  <a href={siteConfig.github} className="hover:text-gold transition-colors" target="_blank" rel="noopener">
                    GitHub
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* الحالة */}
        <div className="mt-8 pt-8 border-t border-ivory/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-ivory/50">
              © {new Date().getFullYear()} {siteConfig.name}. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-gold animate-pulse"></span>
              <span className="text-xs text-ivory/50">{siteConfig.status}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
